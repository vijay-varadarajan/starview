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
    </>
  )
}

export default Course