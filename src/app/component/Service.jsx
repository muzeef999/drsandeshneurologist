"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Alzhemers from "../../asserts/Alzheimer.webp";
import Eplicy from "../../asserts/Epilepsy.webp";
import Diabaties from "../../asserts/Diabetic.webp";
import carival from "../../asserts/Cervical.webp";
import botulinum from "../../asserts/Botulinum.webp";
import stroke from "../../asserts/Stroke.webp";
import nmsod from "../../asserts/NMOSD.webp";
import Myasthenia from "../../asserts/Myasthenia.webp";
import wheelchair from "../../asserts/wheelchair.webp";
import meningitis from "../../asserts/Meningitis.webp";
import headeche from "../../asserts/Headeche.webp"
import innerear from "../../asserts/innerear.webp"
import Parkinson from "../../asserts/parkinson.webp"
import { Modal } from "react-bootstrap";
import Appoittement from "./Appoittement";
import "../styles/text.css"
import gsap from 'gsap';

import SplitText from 'split-type'


const Service = () => {

  const textRef = useRef(null);
  const repeatCount = 3;
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <div className="container">
      
      <h1 ref={textRef} className="service_head">
          Focus Services And Treatment
        </h1>
      <br />
      
        
        <br />
        <br />
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-center align-items-end">
            <div className="card mb-5 d-flex justify-content-end align-items-end">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={Alzhemers}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Alzheimer's disease & Dementia
                    </h5>
                    <p className="card-text">
                      Alzheimer's disease is a specific type of dementia,
                      characterized by progressive cognitive decline and memory
                      loss, affecting primarily older individuals. Dementia is a
                      broader term encompassing various conditions that result
                      in similar symptoms of cognitive impairment.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5 d-flex justify-content-end align-items-end">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={Eplicy}
                    className="card_service_img"
                    alt="..."
                  />
                </div> 
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Epilepsy</h5>
                    <p className="card-text">
                      Epilepsy is a neurological disorder marked by recurrent
                      seizures due to abnormal brain activity. Seizures can vary
                      from brief lapses of attention to convulsions. Treatment
                      often involves medication to control seizures, but in some
                      cases, surgery may be considered.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4  d-flex justify-content-center align-items-end">
                  <Image
                    src={Diabaties}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Diabetic Neuropathy</h5>
                    <p className="card-text">
                      Diabetic neuropathy is a type of nerve damage that can
                      occur in people with diabetes. It is caused by prolonged
                      exposure to high blood sugar levels, leading to symptoms
                      such as tingling, numbness, pain, or weakness, typically
                      starting in the feet and legs and progressing to other
                      parts of the body. Management involves blood sugar
                      control, pain management, and lifestyle modifications.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5 d-flex justify-content-center align-items-center">
              <div className="row g-0">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                  <Image
                    src={carival}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Cervical/ Lumbar Radiculopathies
                    </h5>
                    <p className="card-text">
                      Cervical/lumbar radiculopathies are conditions where
                      nerves in the neck (cervical) or lower back (lumbar) are
                      compressed or irritated, leading to symptoms like pain,
                      numbness, and weakness radiating down the arms or legs.
                      Common causes include herniated discs or bone spurs.
                      Treatment may include physical therapy, medication, or in
                      severe cases, surgery.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4 ">
                  <Image
                    src={stroke}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Stroke</h5>
                    <p className="card-text">
                      Stroke neurology involves the study and treatment of
                      conditions resulting from disruptions in blood flow to the
                      brain, leading to brain damage. Ischemic strokes are
                      caused by blockages in blood vessels, while hemorrhagic
                      strokes result from bleeding. Treatment includes rapid
                      medical intervention to restore blood flow and prevent
                      further damage, along with rehabilitation to aid recovery.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={meningitis}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Meningitis</h5>
                    <p className="card-text">
                      Meningitis is the inflammation of the protective membranes
                      covering the brain and spinal cord, known as the meninges.
                      It is typically caused by viral or bacterial infections
                      and can lead to symptoms such as severe headache, fever,
                      stiffness in the neck, and sensitivity to light. Prompt
                      medical treatment is essential, as bacterial meningitis
                      can be life-threatening.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={wheelchair}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Multiple sclerosis</h5>
                    <p className="card-text">
                      Multiple sclerosis (MS) is a chronic autoimmune disease
                      that affects the central nervous system, causing
                      inflammation, demyelination, and a range of neurological
                      symptoms such as fatigue, weakness, and impaired mobility.
                      Treatment focuses on managing symptoms and slowing disease
                      progression through medication and lifestyle adjustments.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={nmsod}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">NMOSD</h5>
                    <p className="card-text">
                      Neuromyelitis optica spectrum disorder (NMOSD) is an
                      autoimmune condition primarily affecting the optic nerves
                      and spinal cord. It causes episodes of optic neuritis,
                      transverse myelitis, and other neurological symptoms such
                      as weakness and sensory disturbances. Treatment involves
                      immunosuppressive therapy to manage attacks and prevent
                      relapses.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={Myasthenia}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Myasthenia Gravis</h5>
                    <p className="card-text">
                      Myasthenia gravis (MG) is an autoimmune neuromuscular
                      disorder characterized by muscle weakness and fatigue,
                      often worsening with activity and improving with rest.
                      Treatment involves medications to enhance neuromuscular
                      transmission and manage symptoms.
                    </p>
                    <button onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={botulinum}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Botulinum Toxin (Botox) injections
                    </h5>
                    <p className="card-text">
                    Botulinum toxin (Botox) injections, commonly used in neurology, temporarily paralyze muscles by blocking nerve signals. They are utilized for cosmetic purposes to reduce wrinkles and for medical conditions like muscle spasms or chronic migraines.
                    </p>
                    <button  onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={headeche}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                    Headache
                    </h5>
                    <p className="card-text">
                    Headache pain results from signals interacting among your brain, blood vessels and surrounding nerves. During a headache, multiple mechanisms activate specific nerves that affect muscles and blood vessels. These nerves send pain signals to your brain, causing a headache.
                    </p>
                    <button  onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={innerear}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                    vertigo
                    </h5>
                    <p className="card-text">
                    Vertigo is not a disease itself but rather a symptom of various underlying conditions. It's characterized by a sensation of spinning, dizziness, or a feeling that the environment around you is moving or spinning when it's not. This sensation can range from mild to severe and may be accompanied by other symptoms such as nausea, vomiting, sweating, or difficulty walking.
                    </p>
                    <button  onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          


          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="card mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image
                    src={Parkinson}
                    className="card_service_img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                    Parkinson's
                    </h5>
                    <p className="card-text">
                    Parkinson's disease is a progressive neurological disorder marked by motor symptoms like tremors and stiffness, caused by dopamine cell loss. It also brings cognitive and mood changes. While incurable, treatments can ease symptoms and enhance life quality.
                    </p>
                    <button  onClick={handleShow} className="service_btn">Book An Appointment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
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
};

export default Service;
