import React, { useState } from 'react';
import './Navbar.css';
import './Media.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarStyle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <nav id="navbar" style={navbarStyle}>
        <div id="nav-links-div">
          <ul id="nav-links">
            <li className="nav-dropdown" onClick={toggleDropdown}>
              {dropdownVisible ? <FaTimes style={{transform: "translateY(12px)", animation: "1s ease"}}/> : <FaBars style={{transform: "translateY(2px)", transition: "1s ease"}}/>}
              {dropdownVisible && (
                <ul className="dropdown-menu" style={{position:'absolute', display:"flex", flexDirection:'column', margin:'27px 0px 0px -20px', alignItems:"flex-start"}}>
                  <li className='dropdown-item'><Link to="/login">Login</Link></li>
                  <li className='dropdown-item'><Link to="/signup">Signup</Link></li>
                  <li className='dropdown-item'><Link to="/register">Register</Link></li>
                  <li className='dropdown-item'><Link to="/course">Course</Link></li>
                  <li className='dropdown-item'><Link to="/test">Test</Link></li>
                  <li className='dropdown-item'><Link to="/feedback">Feedback</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="#" className="nav-link">Home</Link></li>
            <li><Link to="#schedule" className="nav-link">Schedule</Link></li>
            <li><Link to="#about" className="nav-link">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
