import React from 'react'

import './Login.css'
import Navbar from './Navbar/Navbar'

const Signup = ({ submitHandler }) => {
  return (
    <>
    <Navbar />
    <div id="register-form-div">
        <div id="form-header">
            <h1>Sign Up</h1>
        </div>
        <form onSubmit={submitHandler}>
            <div className="form-container">
                <div className="form-top">
                    <div className="form-col">
                        <div className="form-row">
                            <label htmlFor="username">Username: </label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="form-row">
                            <label htmlFor="confirm_password">Confirm Password: </label>
                            <input type="password" id="confirm_password" name="confirm_password" />
                        </div>

                        <button type="submit" id="register-btn">SUBMIT</button>
                    </div>
                </div>
            </div>
        </form>
    </div> 
    </>
  )
}

export default Signup