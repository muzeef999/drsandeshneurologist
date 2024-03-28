import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";

async function login(credentials) {
  try {
    await connect();
    const user = await User.findOne({ email: credentials.email });
    if (!user) {
      throw new Error("User doesn't exist");
    }

    const validpassword = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!validpassword) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
    newUser: "/register",
    error: "/login",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to login.");
        }
      },
    }),
  ],
  callbacks: {
    async authorize({ auth, request }) {
      const protectedPaths = [/\/profile/, /\/dashboard/, /\/login/];
      const { pathname } = request.nextUrl;

      if (protectedPaths.some((p) => p.test(pathname))) {
        if (!auth) return false; // Redirect if not authenticated

        const user = await User.findOne({ email: auth.user.email });

        if (!user) return false; // Redirect if user not found

        if (pathname === "/login") return true;

        return true;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.isAdmin = user.isAdmin !== undefined ? user.isAdmin : false; // Assign isAdmin if defined, otherwise set it to false
        token.id = user.id;
      }
      // console.log("this is the token =", token);
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.isAdmin =
          token.isAdmin !== undefined ? token.isAdmin : false; // Assign isAdmin if defined, otherwise set it to false
      }
      // console.log("this is the session =", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
