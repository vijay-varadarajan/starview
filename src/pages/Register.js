import React from 'react'
import './Login.css'

import Navbar from './Navbar/Navbar'

const Register = ({ submitHandler }) => {
  return (
    <>
    <Navbar />
    
    <div id="register-form-div">
        <div id="form-header">
            <h1>Register to take the course</h1>
        </div>

        <form onSubmit={submitHandler}>
            
            <div className="form-container">
            
            <div className="form-top">
                <div className="form-col">
                    <div className="form-row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender">
                            <option value="Select gender" disabled defaultValue>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="qualification">Qualification:</label>
                        <input type="text" id="qualification" name="qualification" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="position">Position: </label>
                        <input type="text" id="position" name="position" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="institution">Institution:</label>
                        <input type="text" id="institution" name="institution" />
                    </div>
                </div>
                <div className="form-col">
                    <div className="form-row">
                        <label htmlFor="address">Address:</label>
                        <textarea id="address" name="address" rows="10" cols="50"></textarea>
                    </div>
                    <div className="form-row">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="state">State:</label>
                        <select id="state" name="state">
                            <option value="select a state" disabled defaultValue>Select a state</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="linkedin">LinkedIn:</label>
                        <input type="url" id="linkedin" name="linkedin" />
                    </div>
                    <div className="form-row">
                        <label htmlFor="github">GitHub:</label>
                        <input type="url" id="github" name="github" />
                    </div>
                </div>

            </div>

            <div className="form-bottom">
            
            <div className="form-col">
                <div className="form-row">
                    <label htmlFor="profile-pic">Profile Picture:</label>
                    <input type="file" id="profile-pic" name="profile-pic" placeholder="c" />
                </div>
                <div className="form-row">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-row">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div><br />
                <div className="form-row">
                    <label htmlFor="interests">Interests:</label><br />
                    <div id="interests">
                        <input type="checkbox" id="interest1" name="interest" value="interest1" />
                        <label htmlFor="interest1">The Sun</label>
                        <input type="checkbox" id="interest2" name="interest" value="interest2" />
                        <label htmlFor="interest2">Moons</label>
                        <input type="checkbox" id="interest3" name="interest" value="interest3" />
                        <label htmlFor="interest3">Asteroids</label>
                    </div>
                </div><br />
                <div className="form-row">
                    <label htmlFor="payment">Payment Type:</label><br />
                    <div id="payment">
                        <input type="radio" id="payment1" name="payment" value="payment1" />
                        <label htmlFor="payment1">CASH</label>
                        <input type="radio" id="payment2" name="payment" value="payment2" />
                        <label htmlFor="payment2">Card</label>
                        <input type="radio" id="payment3" name="payment" value="payment3" />
                        <label htmlFor="payment3">UPI</label>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="resume">Resume (if available):</label>
                    <input type="file" id="resume" name="resume" />
                </div>
                <div className="form-row submit-form">
                    <button type="submit">SUBMIT</button>
                </div>
            </div>
                
            </div>
                
            </div>
            
        </form>

    </div>
    </>
  )
}

export default Register