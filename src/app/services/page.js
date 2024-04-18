import React from "react";
import Service from "../component/Service";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import ContactUs from "../component/ContactUs";

export const metadata = {
  title: "Best Neurologist in Financial District | Dr. Sandesh Nanisetty",
  description:
    "Dr. Sandesh Nanisetty The Best Neurologist in Financial District at Freedom hospital, Hyderabad, India. The Department of Neurology provides specialized care for stroke, epilepsy, headache...",
  keywords:
    "Best Neurology Doctor Financial District ,Best Neurologist in Hyd,Best Neurologist in Financial District,Best Meningitis Doctors in Financial District, Stroke Specialist doctor in Financial District,Top Neurologist in Financial District,Best Neuro Physician Doctor Financial District, Best Neuro Physician Doctor in Gandipet, Top Neurologist in Kokapet",
};
const page = () => {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
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

export default page;
