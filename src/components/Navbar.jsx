import React from 'react'
import "./Style.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            Portfolio
        </div>
        <div className="right">
            
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            
        </div>
    </div>
  )
}

export default Navbar