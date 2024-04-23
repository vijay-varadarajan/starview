import React from 'react'
import './Login.css'
import Navbar from './Navbar/Navbar'
import { useState } from 'react'

const Register = ({ submitHandler }) => {
    const [nameValue, setNameValue] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [qualification, setQualification] = useState('');
    const [position, setPosition] = useState('');
    const [institution, setInstitution] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [interests, setInterests] = useState([]);
    const [payment, setPayment] = useState('');

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleQualificationChange = (e) => {
        setQualification(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleInstitutionChange = (e) => {
        setInstitution(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    };

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
    };

    const handleGithubChange = (e) => {
        setGithub(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleInterestsChange = (e) => {
        const selectedInterests = Array.from(e.target.selectedOptions, (option) => option.value);
        setInterests(selectedInterests);
    };

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameValue.trim() === '') {
            alert('Please enter your name');
            return;
        }

        if (email.trim() === '') {
            alert('Please enter your email');
            return;
        }

        if (dob.trim() === '') {
            alert('Please enter your date of birth');
            return;
        }

        if (gender.trim() === '') {
            alert('Please select your gender');
            return;
        }

        if (phone.trim() === '') {
            alert('Please enter your phone number');
            return;
        }

        if (qualification.trim() === '') {
            alert('Please enter your qualification');
            return;
        }

        if (position.trim() === '') {
            alert('Please enter your position');
            return;
        }

        if (institution.trim() === '') {
            alert('Please enter your institution');
            return;
        }

        if (address.trim() === '') {
            alert('Please enter your address');
            return;
        }

        if (city.trim() === '') {
            alert('Please enter your city');
            return;
        }

        if (state.trim() === '') {
            alert('Please enter your state');
            return;
        }

        if (country.trim() === '') {
            alert('Please enter your country');
            return;
        }

        if (pincode.trim() === '') {
            alert('Please enter your pincode');
            return;
        }

        if (linkedin.trim() === '') {
            alert('Please enter your LinkedIn profile URL');
            return;
        }

        if (github.trim() === '') {
            alert('Please enter your GitHub profile URL');
            return;
        }

        if (username.trim() === '') {
            alert('Please enter your username');
            return;
        }

        if (password.trim() === '') {
            alert('Please enter your password');
            return;
        }

        if (interests.length === 0) {
            alert('Please select at least one interest');
            return;
        }

        if (payment.trim() === '') {
            alert('Please enter your payment details');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Please enter a valid password');
            return;
        }

        // LinkedIn validation
        const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub|profile)\/[a-zA-Z0-9_-]+\/?$/;
        if (!linkedinRegex.test(linkedin)) {
            alert('Please enter a valid LinkedIn profile URL');
            return;
        }

        // GitHub validation
        const githubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
        if (!githubRegex.test(github)) {
            alert('Please enter a valid GitHub profile URL');
            return;
        }

        // Reset the form after submission
        setNameValue('');
        setDob('');
        setEmail('');
        setGender('');
        setPhone('');
        setQualification('');
        setPosition('');
        setInstitution('');
        setAddress('');
        setCity('');
        setState('');
        setCountry('');
        setPincode('');
        setLinkedin('');
        setGithub('');
        setUsername('');
        setPassword('');
        setInterests([]);
        setPayment('');

        // Display success message or redirect to another page
        alert('Form submitted successfully');
    };

    return (
        <>
            <Navbar />

            <div id="register-form-div">
                <div id="form-header">
                    <h1>Register to take the course</h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-container">

                        <div className="form-top">
                            <div className="form-col">
                                <div className="form-row">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={nameValue} onChange={handleNameChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="dob">Date of Birth:</label>
                                    <input type="date" id="dob" name="dob" value={dob} onChange={handleDobChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="gender">Gender:</label>
                                    <select id="gender" name="gender" value={gender} onChange={handleGenderChange}>
                                        <option value="Select gender" disabled defaultValue>Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="qualification">Qualification:</label>
                                    <input type="text" id="qualification" name="qualification" value={qualification} onChange={handleQualificationChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="position">Position: </label>
                                    <input type="text" id="position" name="position" value={position} onChange={handlePositionChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="institution">Institution:</label>
                                    <input type="text" id="institution" name="institution" value={institution} onChange={handleInstitutionChange} />
                                </div>
                            </div>
                            <div className="form-col">
                                <div className="form-row">
                                    <label htmlFor="address">Address:</label>
                                    <textarea id="address" name="address" rows="10" cols="50" value={address} onChange={handleAddressChange}></textarea>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="city">City:</label>
                                    <input type="text" id="city" name="city" value={city} onChange={handleCityChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="state">State:</label>
                                    <select id="state" name="state" value={state} onChange={handleStateChange}>
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
                                    <input type="text" id="country" name="country" value={country} onChange={handleCountryChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="pincode">Pincode:</label>
                                    <input type="text" id="pincode" name="pincode" value={pincode} onChange={handlePincodeChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="linkedin">LinkedIn:</label>
                                    <input type="url" id="linkedin" name="linkedin" value={linkedin} onChange={handleLinkedinChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="github">GitHub:</label>
                                    <input type="url" id="github" name="github" value={github} onChange={handleGithubChange} />
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
                                    <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
                                </div><br />
                                <div className="form-row">
                                    <label htmlFor="interests">Interests:</label><br />
                                    <div id="interests">
                                        <input type="checkbox" id="interest1" name="interest" value="interest1" checked={interests.includes('interest1')} onChange={handleInterestsChange} />
                                        <label htmlFor="interest1">The Sun</label>
                                        <input type="checkbox" id="interest2" name="interest" value="interest2" checked={interests.includes('interest2')} onChange={handleInterestsChange} />
                                        <label htmlFor="interest2">Moons</label>
                                        <input type="checkbox" id="interest3" name="interest" value="interest3" checked={interests.includes('interest3')} onChange={handleInterestsChange} />
                                        <label htmlFor="interest3">Asteroids</label>
                                    </div>
                                </div><br />
                                <div className="form-row">
                                    <label htmlFor="payment">Payment Type:</label><br />
                                    <div id="payment">
                                        <input type="radio" id="payment1" name="payment" value="payment1" checked={payment === 'payment1'} onChange={handlePaymentChange} />
                                        <label htmlFor="payment1">CASH</label>
                                        <input type="radio" id="payment2" name="payment" value="payment2" checked={payment === 'payment2'} onChange={handlePaymentChange} />
                                        <label htmlFor="payment2">Card</label>
                                        <input type="radio" id="payment3" name="payment" value="payment3" checked={payment === 'payment3'} onChange={handlePaymentChange} />
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