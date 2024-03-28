"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
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
                Dr Sandesh Nanisetty commitment to advancing his knowledge is
                underscored by certifications in Dementia from NHS, England, and
                MRCP (Neurology) from the UK. Dr Nanisetty has extensive
                experience, having served as an Assistant Professor at NIMS and
                a Senior Resident in Neurology. 
              </p>
            </div>
          </div>

          <div className="col-md-3 middle">
            <h4>Quick Links</h4>
            <div>
              <p>Home</p>
              <p>Blogs</p>
              <p>Services</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="col-md-3">
            <h4>Contact Us</h4>
            <div>
              <div>
                <p>drsandeshnanisetty@gmail.com</p>
                <p>+91 96524 61501</p>
              </div>
              <div>
                <p>Follow on</p>
                <div className="d-flex icons">
                  <div>
                    <FaFacebook />
                  </div>
                  <div>
                    <IoLogoInstagram />
                  </div>
                  <div>
                    <FaTwitter />
                  </div>
                  <div>
                    <FaYoutube />
                  </div>
                  <div></div>
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
