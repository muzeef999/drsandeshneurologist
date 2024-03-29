"use client"
import React, { useState } from 'react'
import "../styles/text.css"
import axios from 'axios';
import { toast } from 'react-toastify';

const Appoittement = () => {

  const [name, setName]=useState(" ");
  const [number, setNumber]=useState(" ");
  const [age,setAge]= useState(" ");
  const [dob, setDOB] = useState(" ");
  const [message, setMessage] = useState(" ");

  const ACCESS_TOKEN = 'EAAU9dqi5jOQBO2RG9KkWcBSzMXqJ8vpb5Kw6acPtaducR33o3tg0Jv4C0Da536wyGHZBh8PrCTEs3XcokTWRYHW2W6W24dEyJIYdve6LsTYhvYWA4DdnZA8zoN0NG6ZAVRpEMeErUKisFZAmnsco7yVR6tZCw1fJFylZCOASWBCBZA0khbBhdnZBmC6KI8RcjGMTn1SiheS75UCBZAnHiZAQEZD';

  const onSubmit = async () => {
    try {

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
<div className='row'>
    <div className='col'>
    <div className="input-field">
  <input type="text" required value={age} onChange={(e) => setAge(e.target.value)} spellCheck="false" />
  <label>Enter Age</label>
</div>
    </div>
    <div className='col'>
    <div className="input-field">
  <input type="Date" required value={dob} onChange={(e) => setDOB(e.target.value)} spellCheck="false" />
  <label></label>
</div>
    </div>
</div>
<br/>
<div className="input-field">
  <textarea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} spellCheck="false" rows="4" cols="50"></textarea>
  <label>Enter Message</label>
</div>
 <br/>
<div>
              <input type="radio"  />
              <label for="huey">ARETE hospitals, Gachibowli, Hyderabad... 9 am to 5 pm</label>           
                <div>
                <input type="radio"/>
                <label for="dewey">Freedom hospital, Gandipet, Hyderabad... 6.30 pm to 8.30 pm</label>
                </div>
              </div>
<br/>
<button className='form-button'>Submit</button>
</form>
      </div>
    </div>
  )
}

export default Appoittement
