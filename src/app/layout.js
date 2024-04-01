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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Web Page</title>
      </head>

      <body style={{ position: "relative", minHeight: "100vh" }}>
        <SessionProvider>
          <ToastContainer />
          <Appbar />
          {children}
          <Footer style={{ position: "fixed", bottom: "0", width: "100%" }} />
        </SessionProvider>
      </body>
    </html>
  );
}
