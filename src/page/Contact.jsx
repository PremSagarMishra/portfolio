import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFile } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.send(
        'service_4awdvn8', // Replace with your EmailJS service ID
        'template_cfvr043', // Replace with your EmailJS template ID
        formData,
        'inpi8-fzeLIevSAwF' // Replace with your EmailJS user ID
      );

      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleClick = (url) => {
    window.location.href = url;
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
        <form className="left" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <input type="submit" className="send-message" value="Send Message" />
        </form>
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