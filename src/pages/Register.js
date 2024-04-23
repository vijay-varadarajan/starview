import React from 'react'
import './Login.css'

import Navbar from './Navbar/Navbar'

const Register = () => {
  return (
    <>
    <Navbar />
    
    <div id="register-form-div">
        <div id="form-header">
            <h1>Register to take the course</h1>
        </div>

        <form>
            
            <div class="form-container">
            
            <div class="form-top">
                <div class="form-col">
                    <div class="form-row">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div class="form-row">
                        <label for="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" />
                    </div>
                    <div class="form-row">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div class="form-row">
                        <label for="gender">Gender:</label>
                        <select id="gender" name="gender">
                            <option value="Select gender" disabled selected>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-row">
                        <label for="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div class="form-row">
                        <label for="qualification">Qualification:</label>
                        <input type="text" id="qualification" name="qualification" />
                    </div>
                    <div class="form-row">
                        <label for="position">Position: </label>
                        <input type="text" id="position" name="position" />
                    </div>
                    <div class="form-row">
                        <label for="institution">Institution:</label>
                        <input type="text" id="institution" name="institution" />
                    </div>
                </div>
                <div class="form-col">
                    <div class="form-row">
                        <label for="address">Address:</label>
                        <textarea id="address" name="address" rows="10" cols="50"></textarea>
                    </div>
                    <div class="form-row">
                        <label for="city">City:</label>
                        <input type="text" id="city" name="city" />
                    </div>
                    <div class="form-row">
                        <label for="state">State:</label>
                        <select id="state" name="state">
                            <option value="select a state" disabled selected>Select a state</option>
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
                    <div class="form-row">
                        <label for="country">Country:</label>
                        <input type="text" id="country" name="country" />
                    </div>
                    <div class="form-row">
                        <label for="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" />
                    </div>
                    <div class="form-row">
                        <label for="linkedin">LinkedIn:</label>
                        <input type="url" id="linkedin" name="linkedin" />
                    </div>
                    <div class="form-row">
                        <label for="github">GitHub:</label>
                        <input type="url" id="github" name="github" />
                    </div>
                </div>

            </div>

            <div class="form-bottom">
            
            <div class="form-col">
                <div class="form-row">
                    <label for="profile-pic">Profile Picture:</label>
                    <input type="file" id="profile-pic" name="profile-pic" placeholder="c" />
                </div>
                <div class="form-row">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div class="form-row">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div><br />
                <div class="form-row">
                    <label for="interests">Interests:</label><br />
                    <div id="interests">
                        <input type="checkbox" id="interest1" name="interest" value="interest1" />
                        <label for="interest1">The Sun</label>
                        <input type="checkbox" id="interest2" name="interest" value="interest2" />
                        <label for="interest2">Moons</label>
                        <input type="checkbox" id="interest3" name="interest" value="interest3" />
                        <label for="interest3">Asteroids</label>
                    </div>
                </div><br />
                <div class="form-row">
                    <label for="payment">Payment Type:</label><br />
                    <div id="payment">
                        <input type="radio" id="payment1" name="payment" value="payment1" />
                        <label for="payment1">CASH</label>
                        <input type="radio" id="payment2" name="payment" value="payment2" />
                        <label for="payment2">Card</label>
                        <input type="radio" id="payment3" name="payment" value="payment3" />
                        <label for="payment3">UPI</label>
                    </div>
                </div>
                <div class="form-row">
                    <label for="resume">Resume (if available):</label>
                    <input type="file" id="resume" name="resume" />
                </div>
                <div class="form-row submit-form">
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