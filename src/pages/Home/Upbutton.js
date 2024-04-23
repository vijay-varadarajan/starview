import React from 'react'
import './Media.css'
import { FaArrowUp } from 'react-icons/fa'
import './Upbutton.css'

const Upbutton = () => {
  return (
    <div className="scroll-to-top-btn">
        <a href="/#">
            <FaArrowUp />
        </a>
    </div>
  )
}

export default Upbutton
