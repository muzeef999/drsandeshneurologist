"use client";
import React, { useState } from "react";
import "../styles/text.css";
import axios from "axios";
import { toast } from "react-toastify";
import { FaCheckCircle, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";


const Appoittement = () => {
  const [loading, setLoading] = React.useState(false);

  const [name, setName] = useState(" ");
  const [number, setNumber] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [radiotext, setRadio] = useState(" ");

  const ACCESS_TOKEN =
    "EAAU9dqi5jOQBOzzAoR5bx2HCz3lDO12uH3aoys4sIlEZA20HmKBXhUZB5mwoLZBb4RruHZB7q2D756XnjG8kRB3IjBXp0cf6IjPd9sNuefAZBAp5Fkf3BwOwHEUUlKklWsxN0YXB5fAV6J7qvhFfO0FNNuCzQbjSZAYnbJVwr3FGbtK37VZC4WweBzpe7ZCrlW04"
  const handleRadioChange = (event) => {
    setRadio(event.target.value); // Update the radiotext state with the selected value
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "919959456647",
        "type": "template",
        "template": {
          "name": "appointment_custom_messages",
          "language": {
            "code": "en"
          },
          "components": [
            {
              "type": "body",
              "parameters": [
                {
                  "type": "text",
                  "text":  `${name}`
                },
                {
                  "type": "text",
                  "text": `${number}`
                },
                {
                  "type": "text",
                  "text": `${message}__SelectedTimingSlot:${radiotext}__from: https://www.drsandeshneurologist.com/`
                }
              ]
            }
          ]
        }
      };
  
      const response = await axios.post(
        "https://graph.facebook.com/v18.0/209988965541805/messages",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
  
      console.log(response.data); // Log the response to inspect
  
      toast.success("Message sent successfully");
      setLoading(true);
    } catch (error) {
      console.error("Error sending message:", error.message); // Log the error
      toast.error("Error sending message:", error.message);
    }
  };
  

  return (
    <div>
      <div>
        {!loading ? (
          <>
            <form onSubmit={onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  spellCheck="false"
                />
                <label>Enter Name</label>
              </div>
              <br />
              <div className="input-field">
                <input
                  type="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  spellCheck="false"
                />
                <label>Enter Number</label>
              </div>
              <br />
              <div className="input-field">
                <textarea
                  type="text"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  spellCheck="false"
                  rows="4"
                  cols="50"
                ></textarea>
                <label>Enter Message</label>
              </div>
              <br />
              <div className="d-flex align-items-start">
                <input
                  type="radio"
                  name="hospital"
                  value="ARETE hospitals"
                  checked={radiotext === "ARETE hospitals"} // Add this line to make the radio button checked if radiotext matches
                  onChange={handleRadioChange} // Call handleRadioChange function when radio button is changed
                />
                <label className="d-flex justify-content-center">
                  {" "}
                  &nbsp;ARETE hospitals, Gachibowli, Hyderabad... 9 am to 5 pm
                </label>
              </div>
              <div className="d-flex  align-items-start">
                <input
                  type="radio"
                  name="hospital"
                  value="Freedom hospital"
                  checked={radiotext === "Freedom hospital"} // Add this line to make the radio button checked if radiotext matches
                  onChange={handleRadioChange} // Call handleRadioChange function when radio button is changed
                />
                <label>
                  {" "}
                  &nbsp;Freedom hospital, Gandipet, Hyderabad... 6.30 pm to 8.30
                  pm
                </label>
              </div>

              <br />
              <button className="form-button">Submit</button>
            </form>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center">
              <br />
              <div>
                <center>
                  <FaCheckCircle
                    style={{
                      color: "#48cfad",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    size={80}
                  />
                </center>
                <br />
                <h2 style={{ textAlign: "center" }}>
                  Thank you for contacting us!
                </h2>
                <p style={{ color: "#969293", textAlign: "center" }}>
                  we have received your message.
                </p>
                <p style={{ color: "#969293", textAlign: "center" }}>
                  we'll reach you out immedately!
                </p>
                <br />
                <br />
                <center>
                  Let's connect!
                  <div className="d-flex justify-content-center align-items-center icons">
                
                  <div>
                    <Link href={"https://www.facebook.com/profile.php?id=61557767382318"}  target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaFacebook size={20} />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.instagram.com/sandesh_945/"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <IoLogoInstagram size={20} />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://twitter.com/sandesh_945"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    
                    <FaTwitter size={20} />
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.linkedin.com/company/dr-sandesh-nanisetty/"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaLinkedinIn  size={20}/>
                    </Link>
                  </div>
                  <div>
                    <Link href={"https://www.youtube.com/channel/UC8ZI-MIOP6aQ3AwID05Nuvw"} target="_blank" style={{textDecoration:'none', color:"#969293"}}>
                    <FaYoutube />
                    </Link>
                  </div>
                </div>

                </center>
                <br />
                <br />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Appoittement;
