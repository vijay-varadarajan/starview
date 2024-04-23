import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Course/Hero'
import PlanetsContent from './Course/Content/PlanetsContent'

import './Course.css'

const Course = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <PlanetsContent />
        <div id="submit-btn">
            <a href="/test"><button>Take a Test</button></a>
        </div>
    </>
  )
}

export default Course