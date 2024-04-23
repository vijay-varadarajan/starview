import React from 'react'
import './Test.css'

import Navbar from './Navbar/Navbar'
import Hero from './Test/Hero'
import Questions from './Test/Questions'

const Test = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Questions />
        <button type="submit" value="Submit">Submit</button>
        <br />
        <br />
        <button type="reset" value="Reset">Clear</button>
    </>
  )
}

export default Test