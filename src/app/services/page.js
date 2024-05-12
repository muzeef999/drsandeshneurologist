"use client";
import React from "react";
import Service from "../component/Service";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import ContactUs from "../component/ContactUs";
import useSWR from "swr";

const Page = () => {
  const {
    data: meta,
    error,
    isValidating,
  } = useSWR("/api/home/service", async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });

  if (error) return <div>Error: {error.message}</div>;
  if (!meta || isValidating) return <div>Loading...</div>; // Render loading message if data is not available or if SWR is validating

  return (
    <>
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link
          rel="canonical"
          href="https://www.drsandeshneurologist.com/services"
        />
      </head>
      <div>
        <>
          <Service />
          <br />
          <Blogs />
          <br />
          <Qulification />
          <br />
          <br />
          <br />
          <ContactUs />
        </>
      </div>
    </>
  );
};

export default Page;
