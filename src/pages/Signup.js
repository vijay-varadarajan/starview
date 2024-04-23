import React from 'react'

import './Login.css'
import Navbar from './Navbar/Navbar'

const Signup = () => {
  return (
    <>
    <Navbar />
    <div id="register-form-div">
        <div id="form-header">
            <h1>Sign Up</h1>
        </div>
        <form>
            <div class="form-container">
                <div class="form-top">
                    <div class="form-col">
                        <div class="form-row">
                            <label for="username">Username: </label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div class="form-row">
                            <label for="email">Email: </label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div class="form-row">
                            <label for="password">Password: </label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div class="form-row">
                            <label for="confirm_password">Confirm Password: </label>
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