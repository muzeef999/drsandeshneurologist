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

const metadata = {
  title:
    "Neuro Physician Dr. Sandesh Nanisetty | Best Neurologist in Gachibowli",
  description:
    "Dr. Sandesh Nanisetty is the Best Neurologist in Gachibowli, practising as a Consultant Neuro Physician Arete Hospitals, Gachibowli and Freedom Hospital, Gandipet.",
  keywords:
    "Top 3 Neurologist in Hyderabad,Best Neuro Hospital in Hyderabad,Best Neurology Doctor in Hyderabad,best neurologist in gachibowli,Best Neuro Physician Doctor in Gachibowli,Best Neurologists in Gachibowli,Best Neurology Hospitals in Gachibowli,Top Neurologist in Gachibowli,Brain Specialist Doctor in Gachibowli,Best Doctors for Meningitis Treatment in Gachibowli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta
          name="google-site-verification"
          content="CMj_C3vdqHMpom_g6nC7Yq2WYvQ8bSR5liu3Pr_v5YA"
        />

        <GoogleTagManager gtmId="G-X03KBP4WF1" />
      </head>

      <body>
        <SessionProvider>
          <ToastContainer />
          <Appbar />
          {children}
          <SpeedInsights />
          <Footer style={{ position: "fixed", bottom: "0", width: "100%" }} />
        </SessionProvider>
      </body>
    </html>
  );
}
