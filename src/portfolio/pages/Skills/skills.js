import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { skills } from "./db-skills";

import "./skills.css";

const Skills = () => {
  return (
    <div className="pt-3 pb-3 " id="skills">
      <h1 className="text-center text-primary pb-4">TECH SKILLS</h1>

      <Row className="justify-content-center">
        {Object.keys(skills).map((category, index) => (
          <Col key={index} md={4} className="mb-2">
            <Card className="focus">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  {category}
                </Card.Title>
                <hr />
                <Card.Text className="card-text">
                  {skills[category].map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="image-style m-1"
                        />
                        <span className="skill-name">{skill.skillName}</span>
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
