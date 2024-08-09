import React from 'react'
import "./Style.css"
import pp from "../assets/pp.jpeg"
const About = () => {
  return (
    <div className='about'>
      <div className="heading">
        <h1>About</h1>
        <div></div>
      </div>
      <div className='container'>
        <div className="left">
        <p>Hello! My name is Prem Sagar Mishra, and I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I tried to build software using Java. Since then, I have explored multiple tech domains.<br></br><br></br>

Fast forward to today, and I specialize in building web and mobile apps. I strive to keep myself updated in different tech domains and have just completed my bachelor's degree in computer application. My main focus these days is to learn more about development and stay updated on the latest technologies.
<br></br>
<br></br>
Reach out to me if you have any project idea in your mind.</p>
        </div>
        <div className="right">
        <img src={pp} alt='image'></img>
        </div>
      </div>
    </div>
  )
}

export default About