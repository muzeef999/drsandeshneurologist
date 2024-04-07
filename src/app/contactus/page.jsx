import React from "react";
import ContactUs from "../component/ContactUs";
import Head from "next/head"



 const metadata = {
  title: "Dr. Sandesh Nanisetty |Best Neurologist in Hyderabad",
  description: "Dr. Sandesh Nanisetty is an extremely dedicated and well versed Best Neurologist in Hyderabad catering to the twin cities of Hyderabad and Gachibowli",
  keywords:"Neurology Hospital Hyderabad,Brain Specialist Doctor in Hyderabad,Best Neurologist in Manikonda,Top neurologist in Manikonda,Epilepsy specialist in Manikonda,Epilepsy Treatment Doctors in Manikonda,Best Neuro Physician Doctors in Manikonda,Best Neurologist in Gandipet, Best Neuro Doctor in Gandipet,Best Neurologist in Kokape, Brain Specialist Doctor in Kokapet"
 };

 

const Contact = () => {
  return (
    <>
    <head>
   <title>{metadata.title}</title>
   <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
    </head>
     
      <div className="container">
        <ContactUs />
      </div>
      </>
  );
};

export default Contact;
