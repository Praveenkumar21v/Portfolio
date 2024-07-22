import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaGithub,
} from "react-icons/fa";
import "./TitleMessage.css";

const TitleMessage = () => (
  <div id="home" className="container-fluid">
    < div className="title-message-container">
      <div className="title-message">
        <div className="text-center mb-3">
          <div className="main">
            Hi, I am
            <br />
            <div>
              <strong>Praveen Kumar</strong>
            </div>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "Fullstack Developer",
                  "Web Developer",
                  "React Developer",
                  "Traveller",
                  "Photographer"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="social-buttons">
      <a  
      target="_blank" rel="noreferrer"
        href="https://www.facebook.com/"
        className="social-button social-button--facebook"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a 
          target="_blank" rel="noreferrer"
        href="https://www.linkedin.com/in/praveengangula/"
        className="social-button social-button--linkedin"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
      <a
         target="_blank" rel="noreferrer"
        href="https://www.snapchat.com/"
        className="social-button social-button--snapchat"
        aria-label="Snapchat"
      >
        <FaSnapchatGhost />
      </a>
      <a      
       target="_blank" rel="noreferrer"
        href="https://github.com/Praveenkumar21v"
        className="social-button social-button--github"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
    </div>
  </div>
);

export default TitleMessage;
