import React from 'react'
import Navbar from './Home/Navbar'
import Upbutton from './Home/Upbutton'
import Hero from './Home/Hero'
import Schedule from './Home/Schedule'
import About from './Home/About'
import Footer from './Home/Footer'
import './Home.css'

import { useState } from 'react';

const Home = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    opacity: '1',
    borderBottom: 'none',
  });

  const updateNavbar = () => {
    if (window.scrollY > 600 || (window.innerWidth < 772 && window.scrollY > 1)) {
      setNavbarStyle({
        backgroundColor: 'black',
        opacity: '0.9',
        borderBottom: '1px solid rgba(255, 255, 255, 0.922)',
      });
    } else {
      setNavbarStyle({
        backgroundColor: 'transparent',
        opacity: '1',
        borderBottom: 'none',
      });
    }
  };

  window.addEventListener('scroll', updateNavbar);

  return (
    <>
        <Navbar navbarStyle={navbarStyle} />
        <Upbutton />
        <Hero />
        <Schedule />
        <About />
        <Footer />
    </>
  )
}

export default Home