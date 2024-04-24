import React from 'react'
import './Navbar.css'
import { FaBars, FaHome, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav id="navbar">
        <div id="logo-div">
            <Link to="/">STARVIEW</Link>
        </div>
        {screenWidth < 772 ? (
            <div id="dropdown-menu">
                <b onClick={toggleDropdown} style={{marginBottom:"-50px", marginTop:"20px"}}>
                  {dropdownVisible ? <FaTimes/> : <FaBars />}
                </b>
                {dropdownVisible && (
                    <ul id="dropdown-list">
                        <li><Link to="/" className="nav-link"><FaHome /></Link></li>
                        <li><Link to="/course" className="nav-link">Course</Link></li>
                        <li><Link to="/test" className="nav-link">Test</Link></li>
                        <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
                        <li><Link to="/login" className="nav-link">Login</Link></li>
                        <li><Link to="/signup" className="nav-link">Signup</Link></li>
                        <li><Link to="/register" className="nav-link">Register</Link></li>
                    </ul>
                )}
            </div>
        ) : (

        <div id="nav-links-div">
            <ul id="nav-links">
                <li><Link to="/" className="nav-link"><FaHome /></Link></li>
                <li><Link to="/course" className="nav-link">Course</Link></li>
                <li><Link to="/test" className="nav-link">Test</Link></li>
                <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
                  <>
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/signup" className="nav-link">Signup</Link></li>
                    <li><Link to="/register" className="nav-link">Register</Link></li>
                  </>
            </ul>
        </div>
        )}
    </nav>
  )
}

export default Navbar
