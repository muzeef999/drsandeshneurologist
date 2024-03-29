"use client";
import Image from "next/image";
import Service from "./component/Service";
import Doctor from "../asserts/doctor.png";
import Experience from "./component/Experience";
import Qulification from "./component/Qulification";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/text.css";
import { Col, Row } from "react-bootstrap";
import Blogs from "./component/Blogs";
import ContactUs from "./component/ContactUs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Appoittement from "./component/Appoittement";
import Head from "next/head";

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
              Dr. Sandesh Nanisetty excels in identifying and managing a wide
              array of neurological disorders such as epilepsy, stroke,
              migraines, vertigo, multiple sclerosis, Parkinson's disease,
              diabetic neuropathy, and issues related to the cervical and lumbar
              spine, among others. He has a particular expertise in providing
              Botox injections for the treatment of dystonia, spasticity, and
              other neurological conditions, emphasizing meticulous attention to
              detail and superior patient care. Dr. Nanisetty's approach is
              centered on delivering personalized care and leveraging the latest
              in medical advancements, underscoring his commitment to enhancing
              patients' brain health and overall quality of life.
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
