import React from 'react'
import Navbar from './Navbar/Navbar'

import './Feedback.css'

import { useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Feedback = () => {
    const [rating, setRating] = useState(0)

    const handleStarClick = (index) => {
        setRating(index + 1)
    }

    const feedbackSubmitHandler = (event) => {
        event.preventDefault()

        const feedbackForm = document.getElementById('feedbackForm')
        const userComment = feedbackForm.userComment.value

        if (rating === 0) {
            alert('Please rate your experience.')
            return
        }

        if (userComment === '') {
            alert('Please provide feedback.')
            return
        }

        alert('Feedback submitted successfully.')
        feedbackForm.reset()
        setRating(0)
    }

  return (
    <>
        <Navbar />
        <div class="feedback-container">
            <h1>Feedback Form</h1>
            <form id="feedbackForm" onSubmit={feedbackSubmitHandler}>
                <div class="rating">
                    <label for="starRating">Rate your experience:</label>
                    <div class="stars" id="starRating">
                        {[...Array(5)].map((star, index) => {
                                return index < rating ? (
                                    <FaStar key={index} onClick={() => handleStarClick(index)} />
                                ) : (
                                    <FaRegStar key={index} onClick={() => handleStarClick(index)} />
                                )
                            })}
                    </div>
                </div>

                <div class="comment">
                    <label for="userComment">Comments:</label>
                    <textarea id="userComment" name="userComment" rows="4" placeholder="Your feedback..."></textarea>
                </div>

                <button type="submit" id='feedbackSubmitBtn'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Feedback