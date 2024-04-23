import React from 'react'
import './About.css'
import './Media.css'
import { FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about">
        <div id="about-header">
            <h1>Company profile</h1>
        </div>
        <div id="about-name">
            <a href="home.htm"><h2>STARVIEW</h2></a>
            <a href="#" id="schedule-btn-link">
                <button className="get-started-btn">
                    <div className="get-started-btn-div" id="get-started-btn-div"> <p>
                        <FaGithub />    
                    </p> </div>
                </button>
            </a>
        </div>
        <div id="about-company">
            <div id="about-company-text">
                <p>Starview is a leading space exploration company dedicated to bringing the wonders of the universe closer to people. With a team of passionate astronomers, engineers, and scientists, we strive to provide a unique and immersive experience for space enthusiasts of all ages.</p>
                <p>Our mission is to inspire curiosity, foster scientific literacy, and promote a deeper understanding of the cosmos. Through our interactive website, educational resources, and community engagement, we aim to ignite a sense of wonder and encourage lifelong learning about the mysteries of the universe.</p>
                <p>Join us on this cosmic journey as we explore the wonders of the solar system and beyond. Together, let's reach for the stars!</p>
            </div>
            <div id="about-company-links">
                <a href="#" id="schedule-btn-link">
                    <button className="get-started-btn">
                        <div className="get-started-btn-div" id="get-started-btn-div"> <p>
                            <FaFacebook />
                            </p> </div>
                    </button>
                </a>
                <a href="#" id="schedule-btn-link">
                    <button className="get-started-btn">
                        <div className="get-started-btn-div" id="get-started-btn-div"> <p>
                            <FaTwitter />
                            </p> </div>
                    </button>
                </a>
                <a href="#" id="schedule-btn-link">
                    <button className="get-started-btn">
                        <div className="get-started-btn-div" id="get-started-btn-div"> <p>
                            <FaInstagram />
                            </p> </div>
                    </button>
                </a>
                <a href="#" id="schedule-btn-link">
                    <button className="get-started-btn">
                        <div className="get-started-btn-div" id="get-started-btn-div"> <p>
                            <FaLinkedin />
                            </p> </div>
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About