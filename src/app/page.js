"use client";
import Image from "next/image";
import Service from "./component/Service";
import Doctor from "../asserts/doctor.png";
import Experience from "./component/Experience";
import Qulification from "./component/Qulification";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/text.css";
import { Col, Row } from "react-bootstrap";
import Blogs from "./component/Blogs";
import ContactUs from "./component/ContactUs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Appoittement from "./component/Appoittement";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container hero_section">
        <div className="row hero_data">
          <div className="col-md-6">
            <h1 className="main-head">Expert Neurological Care</h1>

            <h4 className="main-desc">
              Compassionate Care for Your Brain Health
            </h4>
            <p className="main-p">
              Welcome to Dr Sandesh Nanisetty, Where We Specialize in Diagnosing
              and Treating a Wide Range of Neurological Conditions. With a Focus
              on Personalized Care and Cutting-edge Treatments, Our Team is
              Dedicated to Helping You Achieve Optimal Brain Health and Quality
              of Life.
            </p>
            <br />
            <button onClick={handleShow}>Book An Appointment</button>
          </div>
          <div className="col-md-6  d-flex justify-content-end align-items-end">
            <Image src={Doctor} className="hero_img" alt="" />
          </div>
        </div>
        <Qulification />
      </div>

      <Experience />
      <Service />

      <div className="special">
        <div className="container">
          <Row>
            <Col md={7}>
              <h2 className="special_head_sp">Special interests/Expertise</h2>
              <br />
              <h5 className="special-sub-head">
                Dr sandesh provides the best quality medical care with his
                unwavering dedication and commitment. His key expertise include:
              </h5>
              <br />
              <ul className="special-desc">
                <li>
                  Movement Disorders: Parkinson's disease, Atypical Parkinsonian
                  disorders, Essential Tremor, Dystonia, Chorea and Tic
                  disorders
                </li>
                <li>Neuro-otology: Vertigo & Vestibular Neuritis</li>
                <li>Headaches</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      <Blogs />
      <br />
      <ContactUs />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book An Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Appoittement />
        </Modal.Body>
      </Modal>
    </div>
  );
}
