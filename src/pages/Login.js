import React from 'react'

import './Login.css'
import Navbar from './Navbar/Navbar'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Navbar />
    <div id="register-form-div">
        <div id="form-header">
            <h1>Login</h1>
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
                            <label for="password">Password: </label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div class="form-row" id="forgot-pwd">
                            <a href="#">Forgot Password?</a>
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

export default Login