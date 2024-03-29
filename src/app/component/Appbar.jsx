"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { PiLockKeyThin } from "react-icons/pi";
import { PiLockKeyOpenThin } from "react-icons/pi";
import { PiUserCircleThin } from "react-icons/pi";
import { Modal } from "react-bootstrap";
import Login from "./Login";
import { toast } from "react-toastify";


const Appbar = () => {

  const { data: session, status } = useSession();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {

    try {
       toast.success("Logout Succesfully")
      window.location.href = "/";
    }catch (error) {
      console.error("Failed to sign out:", error);
    }
    
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container cont">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabels">
            Dr Sandesh Nanisetty
          </h5>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <div className=" links">
                <p data-bs-dismiss="offcanvas">
                  <Link href="/" className="link">
                    Home
                  </Link>
                </p>
                <p data-bs-dismiss="offcanvas">
                  <Link href="/blogs" className="link">
                    Blogs
                  </Link>
                </p>
                <p data-bs-dismiss="offcanvas">
                  <Link href="/services" className="link">
                    Services
                  </Link>
                </p>
               
                <p data-bs-dismiss="offcanvas">
                  <Link href="/contactus" className="link">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div style={{border:'3px solid #27b9ec', borderRadius:'22px', backgroundColor:'#27b9ec'}}>
              {status === "authenticated" ? (
                   <div className="d-flex justify-content-center align-items-center">
                    <Link href="/profile" className="d-flex justify-content-center align-items-center" style={{color:'#FFF', textDecoration:'none'}}> <>&nbsp; <PiUserCircleThin fontSize={25}/>&nbsp;</> <>{session.user.name}&nbsp;</></Link>
                    <button onClick={handleLogout} className="d-flex justify-content-center align-items-center"> <PiLockKeyThin/><>&nbsp; Logout</></button>
                    </div>
                ) : (
                  <button  onClick={handleShow} className="d-flex justify-content-center align-items-center"><PiLockKeyOpenThin /><>&nbsp;Admin</></button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book An Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Appbar;
