import React from 'react'
import "./Style.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
        <a href="./">Portfolio</a>
        </div>
        <div className="right">
            
                <li><a href="./about">About</a></li>
                <li><a href="./services">Services</a></li>
                <li><a href="./projects">Projects</a></li>
                <li><a href="./skills">Skills</a></li>
                <li><a href="./contact">Contact</a></li>
            
        </div>
    </div>
  )
}

export default Navbar