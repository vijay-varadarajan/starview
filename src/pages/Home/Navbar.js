import React from 'react'
import './Navbar.css'
import './Media.css'
import { FaBars } from 'react-icons/fa';

const Navbar = ({ navbarStyle }) => {
  return (
    <header>
        <nav id="navbar" style={navbarStyle}>
            <div id="nav-links-div">
                <ul id="nav-links">
                    <li className="nav-dropdown"><FaBars /></li>
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#schedule" className="nav-link">Schedule</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar