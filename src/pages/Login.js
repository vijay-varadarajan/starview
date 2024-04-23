import React from 'react'

import './Login.css'
import Navbar from './Navbar/Navbar'

import { useState } from 'react';

const Login = ({ submitHandler }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        if (!username || !password) {
          alert('Please fill in all fields');
          return;
        }
    
        // Pass the username and password to the submitHandler
        submitHandler(username, password);
      };

  return (
    <>
    <Navbar />
    <div id="register-form-div">
        <div id="form-header">
            <h1>Login</h1>
        </div>
        <form onSubmit={handleLoginSubmit}>
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
                            <label htmlFor="password">Password: </label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-row" id="forgot-pwd">
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