"use client"
import React, { useState } from 'react'
import "../styles/text.css"
import axios from 'axios';
import { toast } from 'react-toastify';

const Appoittement = () => {

  const [name, setName]=useState(" ");
  const [number, setNumber]=useState(" ");
  const [message, setMessage] = useState(" ");
  const [radiotext, setRadio] = useState(" ");

  const ACCESS_TOKEN = "EAAU9dqi5jOQBO4iCoD0b7gWw52ViZCnZAIWEC86UyQZAEXSvyeq0MhQnRT7ms5ZAKqjFQSU1vDXqPfkSYlYVCfNKtk6UBZBFNiATEZAs2i9NwUL6NqY7vAXx7dGiWtJnesGwcbn3itCRgV8spVfGgSJPwSoFFCUIwLNCFqfv4mXAtEz3BIwoNZCDNAAm2S881ahehFxQ80TTZAuVAQzxTN4ZD";

  const handleRadioChange = (event) => {
    setRadio(event.target.value); // Update the radiotext state with the selected value
  };

  const onSubmit = async () => {
    try {

      console.log(name, number, message, radiotext)

      const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: "919959456647", // Replace with the recipient's number
        type: "text",
        text: {
          preview_url: false,
          body: `*Name* : ${name},\n  *Number* : ${number},\n  *Age* : ${age},\n *DOB* : ${dob},\n *Message* : ${message}`
        }
      };

   
      const response = await axios.post("https://graph.facebook.com/v18.0/209988965541805/messages", payload, {

      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}` 
      }
    });
    
    toast.success("Message sent successfully")

    // console.log("Message sent successfully:", response.data);
  } catch (error) {
    toast.error("Error sending message:", error.message);
   

  }
}


  return (
    <div>
      <div>
        <form onSubmit={onSubmit} >
      <div className="input-field">
  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required spellCheck="false" />
  <label>Enter Name</label>
</div>
<br/>
<div className="input-field">
  <input type="number" required value={number} onChange={(e) => setNumber(e.target.value)} spellCheck="false" />
  <label>Enter Number</label>
</div>
<br/>
<div className="input-field">
  <textarea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} spellCheck="false" rows="4" cols="50"></textarea>
  <label>Enter Message</label>
</div>
 <br/>
 <div className='d-flex align-items-start'>
        <input
          type="radio"
          name="hospital"
          value="ARETE hospitals"
          checked={radiotext === "ARETE hospitals"} // Add this line to make the radio button checked if radiotext matches
          onChange={handleRadioChange} // Call handleRadioChange function when radio button is changed
        />
        <label className='d-flex justify-content-center'> &nbsp;ARETE hospitals, Gachibowli, Hyderabad... 9 am to 5 pm</label>
      </div>
      <div className='d-flex  align-items-start'>
        <input
          type="radio"
          name="hospital"
          value="Freedom hospital"
          checked={radiotext === "Freedom hospital"} // Add this line to make the radio button checked if radiotext matches
          onChange={handleRadioChange} // Call handleRadioChange function when radio button is changed
        />
        <label> &nbsp;Freedom hospital, Gandipet, Hyderabad... 6.30 pm to 8.30 pm</label>
      </div>

<br/>
<button className='form-button'>Submit</button>
</form>
      </div>
    </div>
  )
}

export default Appoittement
