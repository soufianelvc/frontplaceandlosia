// import "./mailList.css"

// const MailList = ({bgColor}) => {
//   return (
//     <div className="mail" style={{backgroundColor:bgColor}}>
//       <h1 className="mailTitle">Save time, save money!</h1>
//       <span className="mailDesc">Sign up and we'll send the best deals to you</span>
//       <div className="mailInputContainer">
//         <input type="text" placeholder="Your Email" />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   )
// }

// export default MailList

import React, { useState } from "react";

import "./mailList.css";
import { axiosClient } from "../../../redux/axios";
import { ClientApi } from "../../../service/Api/Client/ClientApi";

const MailList = ({ bgColor }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      await  ClientApi.getCsrfToken();
      const response = await axiosClient.post("http://localhost:8000/api/subscribe", {
        email: email,
      });
      await alert('add emails success')
      setMessage(response.data.message);
      setEmail(""); // Clear the input field after successful subscription
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Subscription failed. Please try again.");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="mail" style={{ backgroundColor: bgColor }}>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MailList;
