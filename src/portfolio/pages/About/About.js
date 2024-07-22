import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./about.css";

import Profile from "../assests/icon/2517863-Photoroom.png-Photoroom.png";

const About = () => {
  return (
    <div id="about" className="about-section mt-5 ">
      <Container>
        <h1 className="section-title text-center mb-5">ABOUT ME</h1>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-4">
              <Image className="profile-image" alt="profile" src={Profile} />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="details-section p-3">
              <p className="about-text">
                Web Developer with expertise in React.js, Redux, JavaScript, HTML, and CSS. Currently learning Material UI Native for frame works for a UI Applications.
                <br />
                <br />

                Passionate programmer and learner, born and brought up in India. Enrolled in  frontend - Web Development Program conducted by 10000 Coders.
                <br />
                Love learning about new technologies and building better and scalable products.
              </p>
              <div className="buttons-section">
                <Button href="#contact" className="btn-primary m-2" id="letsTalk">
                 Contact
                </Button>
                <Button href="https://drive.google.com/file/d/1xlxcMBlqlQ3Pzqzc1N_GBgZmKOOtLj59/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-success m-2" id="resume">
                  Resume
                </Button>
                
                <Button href="https://github.com/Praveenkumar21v" target="_blank" rel="noopener noreferrer" className="btn-dark m-2" id="github">
                  GitHub
                </Button>
                <Button href="https://www.linkedin.com/in/praveengangula/" target="_blank" rel="noopener noreferrer" className="btn-info m-2" id="linkedin">
                  LinkedIn
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
