
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="py-5">
      <h1 className="text-center class">CONTACT ME</h1>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <div className="m-2">
            <iframe
            className="iframe"
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60561.23469966969!2d79.1331482!3d18.43480505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd910bcf48931%3A0x4889b0398ed69f07!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709225457837!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>{" "}
          </div>
        </Col>

        <Col md={6}>
          <Row className="d-flex justify-content-center">
            <div className="m-2">
              <a
                href="mailto:praveenkumargangula21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="praveenkumargangula21@gmail.com"
                >
                  <i className="bi bi-envelope"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/praveengangula/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-primary"
                  title="Visit my LinkedIn profile"
                >
                  <i className="bi bi-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://github.com/Praveenkumar21v"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-secondary"
                  title="Explore my GitHub projects"
                >
                  <i className="bi bi-github"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-info" title="Follow me on Twitter">
                  <i className="bi bi-twitter"></i> Naukri
                </Button>
              </a>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
