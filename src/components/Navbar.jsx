import React, { useState, useEffect, useRef } from 'react'
import "./Style.css"
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    
    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [navRef]);

  return (
    <div className='navbar' ref={navRef}>
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