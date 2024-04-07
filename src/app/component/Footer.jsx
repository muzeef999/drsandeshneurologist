"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

import Link from "next/link";


const Footer = () => {
  return (
    <div style={{ backgroundColor: "#27b9ec", color:'#FFF' }}>
      <FloatingWhatsApp
        phoneNumber="96524 61501 "
        accountName="Doctor"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
      <div className="container footer_data">
        <div className="row">
          <div className="col-md-6">
            <h4>Dr Sandesh Nanisetty</h4>
            <div>
              <p>
              Dr Sandesh Nanisetty commitment to advancing his knowledge is underscored by certifications in Dementia from NHS, England, and MRCP (Neurology) from the UK. Dr Nanisetty has extensive experience, having served as an Assistant Professor at NIMS and a Senior Resident in Neurology.
              </p>
            </div>
          </div>
          <div className="col-md-3 middle">
            <h4>Quick Links</h4>
            <div>
              <p> <Link href={"/"} style={{textDecoration:'none', color:"#FFF"}}>Home</Link></p>
              <p> <Link href={"/blogs"} style={{textDecoration:'none', color:"#FFF"}}>Blogs</Link></p>
              <p><Link  href={"/services"} style={{textDecoration:'none', color:"#FFF"}}>Services</Link></p>
              <p><Link  href={"/contactus"} style={{textDecoration:'none', color:"#FFF"}}>Contact Us</Link></p>
            </div>
          </div>

          <div className="col-md-3">
            <h4>Contact Us</h4>
            <div>
              <div>
                <a href={"mailto:drsandeshnanisetty@gmail.com"} style={{textDecoration:'none', color:"#FFF"}}>
                <p>drsandeshnanisetty@gmail.com</p>
                </a>
                <a href={"tel:+919652461501"} style={{textDecoration:'none', color:"#FFF"}}>
                <p>+91 96524 61501</p>
                </a>
              </div>
              <div>
                <p>Follow on</p>
                <div className="d-flex icons">
                  <div>
                    <Link href={"https://www.facebook.com/profile.php?id=61557767382318"}  target="_blank" style={{textDecoration:'none', color:"#FFF"}}>
                    <FaFacebook />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.instagram.com/sandesh_945/"} target="_blank" style={{textDecoration:'none', color:"#FFF"}}>
                    <IoLogoInstagram />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://twitter.com/sandesh_945"} target="_blank" style={{textDecoration:'none', color:"#FFF"}}>
                    
                    <FaTwitter />
                    </Link>
                  </div>
                  
                  <div>
                    <Link href={"https://www.linkedin.com/company/dr-sandesh-nanisetty/"} target="_blank" style={{textDecoration:'none', color:"#FFF"}}>
                    <FaLinkedinIn />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.youtube.com/channel/UC8ZI-MIOP6aQ3AwID05Nuvw"} target="_blank" style={{textDecoration:'none', color:"#FFF"}}>
                    <FaYoutube />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
