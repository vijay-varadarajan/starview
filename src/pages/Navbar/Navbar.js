import React from 'react'
import './Navbar.css'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar">
        <div id="logo-div">
            <Link to="/">STARVIEW</Link>
        </div>
        <div id="nav-links-div">
            <ul id="nav-links">
                <li><Link to="/" className="nav-link"><FaHome /></Link></li>
                <li><Link to="/course" className="nav-link">Course</Link></li>
                <li><Link to="/test" className="nav-link">Test</Link></li>
                <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
                <li><Link to="/login" className="nav-link">Login</Link></li>
                <li><Link to="/signup" className="nav-link">Signup</Link></li>
                <li><Link to="/register" className="nav-link">Register</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
