import React from "react";
import { Container } from "react-bootstrap";
import NavBar from './nav/Navbar';
import TitleMessage from "./pages/textpage/TitleMessage";
import About from "./pages/About/About";
import Skills from './pages/Skills/skills';
import Education from './pages/Education/Education';
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/footer/Footer";
import AnimatedSection from "./AnimatedSection";
import "./app.css";

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const fadeInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 5 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar />
      <TitleMessage />

      <Container className="container-box rounded">
        <AnimatedSection variants={fadeInLeft}>
          <About />
        </AnimatedSection>
      </Container>

      <Container className="container-box rounded">
        <AnimatedSection variants={fadeInRight}>
          <Skills />
        </AnimatedSection>
      </Container>

      <Container className="container-box rounded">
        <AnimatedSection variants={slideInBottom}>
          <hr />
          <Education />
        </AnimatedSection>
      </Container>

      <Container className="container-box rounded">
        <AnimatedSection variants={slideInLeft}>
          <hr />
          <Projects />
        </AnimatedSection>
      </Container>

      <Container className="container-box rounded">
        <AnimatedSection variants={fadeInBottom}>
          <hr />
          <Contact />
        </AnimatedSection>
      </Container>

      <hr />
      <Footer />
    </div>
  );
}

export default App;
