"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/responsive.css";
import "./styles/text.css";
import Appbar from "./component/Appbar";
import Footer from "./component/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession, SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ToastContainer />
          <Appbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
