import React, { useState } from 'react'
import "./Style.css"
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='navbar'>
      <div className="left">
        <a href="./">Portfolio</a>
      </div>
      <div className={`right ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="./about" onClick={toggleMenu}>About</a></li>
          <li><a href="./services" onClick={toggleMenu}>Services</a></li>
          <li><a href="./projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="./skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="./contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  )
}

export default Navbar