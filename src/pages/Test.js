import React from 'react'
import './Test.css'
import { useState } from 'react'

import Navbar from './Navbar/Navbar'
import Hero from './Test/Hero'
import Questions from './Test/Questions'

const Test = () => {
  const [score, setScore] = useState(0)

  const evaluateTest = (e) => {
    e.preventDefault()
    const answers = ['b', 'a', 'a', 'a', 'a', 'c', 'b', 'c', 'a', 'b']

    let temp_score = 0
    for (let i = 1; i <= 10; i++) {
      const answer = document.querySelector(`input[name="${i}"]:checked`)
      if (answer) {
        if (answer.value === answers[i - 1]) {
          temp_score++
        }
      }
    }

    setScore(temp_score)
    console.log(score)

    window.alert(`You scored ${score}/10`)
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Questions evaluateTest={evaluateTest} />
    </>
  )
}

export default Test