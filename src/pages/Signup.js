import React from 'react'

import './Login.css'
import Navbar from './Navbar/Navbar'

import { useState } from 'react';

const Signup = ({ submitHandler }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignupSubmit = (e) => {
        e.preventDefault();
    
        if (!username || !email || !password || !confirmPassword) {
          alert('Please fill in all fields');
          return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email');
            return;
        }
    
        // Pass the username and password to the submitHandler
        submitHandler(username, email, password, confirmPassword);
      }

  return (
    <>
    <Navbar />
    <div id="register-form-div">
        <div id="form-header">
            <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSignupSubmit}>
            <div className="form-container">
                <div className="form-top">
                    <div className="form-col">
                        <div className="form-row">
                            <label htmlFor="username">Username: </label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="password">Password: </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="confirm_password">Confirm Password: </label>
                            <input 
                                type="password" 
                                id="confirm_password" 
                                name="confirm_password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}    
                            />
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