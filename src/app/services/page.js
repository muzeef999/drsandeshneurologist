import React from "react";
import Service from "../component/Service";
import Blogs from "../component/Blogs";
import Qulification from "../component/Qulification";
import ContactUs from "../component/ContactUs";

const page = () => {
  return (
    <div>
      <Service />
      <br />
      <Blogs />
      <br />
      <Qulification />
      <br />
      <br />
      <br />
      <ContactUs />
    </div>
  );
};

export default page;
