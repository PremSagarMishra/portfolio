import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFile } from "react-icons/fa";



const Contact = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>Contact Me</h1>
        <div></div>

      </div>
      <p className="sub-head">
      I'm always excited to discuss new projects and opportunities. Feel free to reach out to me using the contact form or any of the provided channels.</p>

      <div className="contact">
        <div className="left">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <input type="button" value="Send Message" />
        </div>
        <div className="right">
        <div><FaGithub className="icon"/>
        <p>Github</p></div>
        <div><FaLinkedin className="icon"/>
        <p>Linkedin</p></div>
        <div><FaInstagram className="icon"/>
        <p>Instagram</p></div>
        <div><FaFile className="icon"/>
        <p>Resume</p></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
