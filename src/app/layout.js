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
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="CMj_C3vdqHMpom_g6nC7Yq2WYvQ8bSR5liu3Pr_v5YA"
        />
        <link rel="canonical" href="https://www.drsandeshneurologist.com/" />

        <GoogleTagManager gtmId="G-X03KBP4WF1" />
      </head>
      <body>
        <SessionProvider>
          <ToastContainer />
          <Appbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
