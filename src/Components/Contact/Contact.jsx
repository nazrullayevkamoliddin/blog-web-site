import React from "react";
import Navbar from "../Navbar/Navbar";
import "./contact.css";
import Roll from "react-reveal/Roll";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <Roll>
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2>Contact us</h2>
              <input type="text" className="field" placeholder="Your Name" />
              <input type="text" className="field" placeholder="Your Email" />
              <input type="text" className="field" placeholder="Phone" />
              <textarea placeholder="Message" className="field"></textarea>
              <button className="btn">Send</button>
            </div>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default Contact;
