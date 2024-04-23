import React from 'react'
import './Hero.css'
import './Media.css'
import './Particles.css'
import ParticlesComponent from './Particles'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useState, useEffect } from 'react';


const Hero = () => {
    const [scheduleBtn, setScheduleBtn] = useState('Schedule');

    const handleWindowResize = () => {
        if (window.innerWidth < 620) {
            setScheduleBtn(<MdKeyboardDoubleArrowDown />);
        } else {
            setScheduleBtn('Schedule');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

  return (
    <div id="landing">
        <ParticlesComponent id="particles" />
        <section id="hero-pic">
        </section>
        
        <section className="" id="hero">
            <div className="" id="hero-text">
                <h1>STARVIEW</h1>
                <h2>Welcome, Adventurer!</h2>
                <h3 id="intro-para">Welcome to STARVIEW, your gateway to the cosmos. </h3>
                    
                <p id="intro-para">Embark on a journey of discovery and explore the vast expanse of the solar system from the comfort of your home.</p>
                
                <p id="intro-para">Dive into detailed planet profiles, view stunning images from space missions and take assessments with fellow space enthusiasts.</p>

                <p className="wide-only" id="intro-para">From the fiery surface of the Sun to the icy realms of the outer planets, the solar system is a place of wonder and beauty, full of mysteries waiting to be unraveled.</p>
                
                <p id="intro-para">So why wait? The universe is at your fingertips!</p>
                
                <div id="get-started-div">
                    <div id="get-started-div-part-b">
                        <a href="/register" id="schedule-btn-link">
                            <button className="get-started-btn">
                                <div className="get-started-btn-div" id="get-started-btn-div"> <p>Get &nbsp;Started</p> </div>
                            </button>
                        </a>
                    </div>
                    <div id="get-started-div-part-a">
                        <a href="#schedule" id="get-started-btn-link">
                            <button className="get-started-btn" id="schedule-btn">
                                <div className="get-started-btn-div" id="schedule-btn-div"> <p id="schedule-btn-div-text">{scheduleBtn}</p> </div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Hero