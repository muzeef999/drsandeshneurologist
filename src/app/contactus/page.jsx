"use client"
import React from "react";
import ContactUs from "../component/ContactUs";
import useSWR from "swr";


 

const Contact = () => {

  const {
    data: meta,
    error1,
    isValidating,
  } = useSWR("/api/home/contact", async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });

  if (error1) return <div>Error: {error1.message}</div>;
  if (!meta || isValidating) return <div>Loading...</div>; // Render loading message if data is not available or if SWR is validating


  return (
    <>
    <head>
   <title>{meta.title}</title>
   <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href="https://www.drsandeshneurologist.com/contactus" />
    </head>
     
      <div className="container">
        <ContactUs />
      </div>
      </>
  );
};

export default Contact;
