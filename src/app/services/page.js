"use client";
import React from "react";
import Service from "../component/Service";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import ContactUs from "../component/ContactUs";
import useSWR from "swr";

const Page = () => {
<<<<<<< HEAD
  // const {
  //   data: meta,
  //   error,
  //   isValidating,
  // } = useSWR("/api/home/service", async (url) => {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   return response.json();
  // });

  // if (error) return <div>Error: {error.message}</div>;
  // if (!meta || isValidating) return <div>Loading...</div>; // Render loading message if data is not available or if SWR is validating
=======
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
>>>>>>> 1aa8044dce791e3b02ae3f41e98b9bbbf9dabcf1

  return (
    <>
      <head>
<<<<<<< HEAD
        <title>Best Neurologist in Manikonda | Dr. Sandesh Nanisetty</title>
        <meta
          name="description"
          content=" Meet our Dr. Sandesh Nanisetty expert in comprehensive care for all neurological problems."
        />
        <meta
          name="keywords"
          content="Best Neurology Doctor Financial District, Top Neurologist in Hyderabad, Best Meningitis Doctors in Financial District, Stroke Specialist doctor in Manikonda,Top Neurologist in Financial District, Neuro Physician Doctor Financial District, Top Neurologist in Kokapet"
        />
=======
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
>>>>>>> 1aa8044dce791e3b02ae3f41e98b9bbbf9dabcf1
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
