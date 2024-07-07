"use client"
import React from "react";
import ContactUs from "../component/ContactUs";
import useSWR from "swr";


 

const Contact = () => {

<<<<<<< HEAD
  // const {
  //   data: meta,
  //   error1,
  //   isValidating,
  // } = useSWR("/api/home/contact", async (url) => {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data");
  //   }
  //   return response.json();
  // });

  // if (error1) return <div>Error: {error1.message}</div>;
  // if (!meta || isValidating) return <div>Loading...</div>; // Render loading message if data is not available or if SWR is validating
=======
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
>>>>>>> 1aa8044dce791e3b02ae3f41e98b9bbbf9dabcf1


  return (
    <>
    <head>
<<<<<<< HEAD
   <title>Neurology Doctor in Kokapet | Neurologist Near Me | Dr. Sandesh Nanisetty</title>
   <meta name="description" content="Dr. Sandesh Nanisetty is an extremely dedicated and well versed Neurology Doctor in Kokapet catering to the twin cities of Hyderabad and Gachibowli" />
        <meta name="keywords" content="Neurology Doctor in Kokapet, Brain Specialist Doctor in Manikonda, Best Neurologist in Manikonda Kondapur, Top neurologist in Manikonda, Epilepsy specialist in Manikonda, Epilepsy Treatment Doctors in Manikonda, Best Neuro Physician Doctors in Manikonda, Best Neurologist in Gandipet, Best Neuro Doctor in Gandipet, Best Neurologist in Kokapet" />
        <link rel="canonical" href="https://www.drsandeshneurologist.com/contactus"/>
=======
   <title>{meta.title}</title>
   <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href="https://www.drsandeshneurologist.com/contactus" />
>>>>>>> 1aa8044dce791e3b02ae3f41e98b9bbbf9dabcf1
    </head>
     
      <div className="container">
        <ContactUs />
      </div>
      </>
  );
};

export default Contact;
