
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import file from "../asserts/notfound.png";
import ContactUs from "./component/ContactUs";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
 

  return (
    <>
      <Container style={{marginTop:'10%'}}>
        <Row>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div style={{ lineHeight: "12px" }}>
              <button
                style={{
                  color: "#77818f",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#dadee5",
                  border: "1px solid #77818f",
                }}
              >
                404 page
              </button>
              <h1>
                <b>Oops! Page not found.</b>
              </h1>
              <h4 style={{ color: "#626d7c" }}>
                Sorry, we couldn't find the page you were looking for.
              </h4>
              <br/>
              <Link
                href="/"
                style={{ textDecoration:'none',
                  color: "#FFF",
                  padding: "12px 16px",
                  borderRadius: "12px",
                  backgroundColor: "#27b9ec",
                  border: "none",
                }}
              >
                Go Back
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <Image src={file} alt="database"  style={{width:'80%', height:'auto'}}/>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <ContactUs />
    </>
  );
};

export default NotFound;