import React from "react";
import Service from "../component/Service";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import ContactUs from "../component/ContactUs";
import useSWR from "swr";


export const metadata = {
  title:'Best Neurologist in Manikonda | Dr. Sandesh Nanisetty',
  description:'Meet our Dr. Sandesh Nanisetty expert in comprehensive care for all neurological problems.',
  keywords:'Best Neurology Doctor Financial District, Top Neurologist in Hyderabad, Best Meningitis Doctors in Financial District, Stroke Specialist doctor in Manikonda,Top Neurologist in Financial District, Neuro Physician Doctor Financial District, Top Neurologist in Kokapet'
}


const Page = () => {


  return (
    <>
      <head> 
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
