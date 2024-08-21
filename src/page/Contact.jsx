import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFile } from "react-icons/fa";

const Contact = () => {

  const handleClick = (url) => {
    window.location.href = url;  // Navigate to the specified URL
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Contact Me</h1>
        <div></div>
      </div>
      <p className="sub-head">
        I'm always excited to discuss new projects and opportunities. Feel free to reach out to me using the contact form or any of the provided channels.
      </p>

      <div className="contact">
        <div className="left">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <input type="button" value="Send Message" />
        </div>
        <div className="right">
          <div onClick={() => handleClick('https://github.com/PremSagarMishra')}>
            <FaGithub className="icon" />
            <p>Github</p>
          </div>
          <div onClick={() => handleClick('https://www.linkedin.com/in/premsagarmishra/')}>
            <FaLinkedin className="icon" />
            <p>LinkedIn</p>
          </div>
          <div onClick={() => handleClick('https://www.instagram.com/prem.sagar.mishra/')}>
            <FaInstagram className="icon" />
            <p>Instagram</p>
          </div>
          <div onClick={() => handleClick('https://drive.google.com/file/d/1aTCvZvKrZkKSyJKRtgj1UZcymWEWeE3M/view?usp=sharing')}>
            <FaFile className="icon" />
            <p>Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
