import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Card, Button } from 'react-bootstrap';
import QuizAppImage from '../assests/img/projects/4c1e1def41226add319172f41b623b95.jpg';
import TouchAppImage from '../assests/img/projects/Touch-ui.png';
import FreeGuyImage from '../assests/img/projects/FreeGuy.png'
import './projects.css'
const Projects = () => {
  return (
    <div id="projects" className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center text-primary mb-4 container">Projects</h1>

      <VerticalTimelineElement
        className="vertical-timeline-element-works"
        contentStyle={{
          background: 'linear-gradient(to right, #56435D, #7A687F)',  
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid #7A687F' }}
        date={<span style={{ color: '#fff' }}>2024</span>}
        iconStyle={{ background: 'linear-gradient(to right, #56435D, #7A687F)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Touch UI App</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>

      <Card className='card-pro'>
          <Card.Img
            variant="top"
            src={TouchAppImage}
            alt="ToDo App Screenshot"
            style={{ maxHeight: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <p style={{ textAlign: 'left', wordSpacing: '2px', fontSize: '13px' }}>
Touch UI is a real-time web application (Social-media platform). It enables authorization (Sign in, Login, Password flow) for secure access. Users can create and share content like posts, reels, short videos
and Comment & Like on each other’s posts.            </p>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-between flex-nowrap text-center mt-3 codes">
        <Button variant="primary" target="_blank" href="https://touch-ui.vercel.app/">
            See Live
          </Button>
          <Button variant="secondary" target="_blank" href="https://github.com/Praveenkumar21v/Touch-UI" className='sourceCode'>
            Source Code
          </Button>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element-works"
        contentStyle={{
          background: 'linear-gradient(to right, #BB6B37, #B08858)', 
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid #B08858' }}
        date={<span style={{ color: '#fff' }}>2024</span>}
        iconStyle={{ background: 'linear-gradient(to right, #BB6B37, #B08858)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Quiz App</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>

        <Card className="card-pro">
          <Card.Img
            variant="top"
            src={QuizAppImage}
            alt="Quiz App Screenshot"
            style={{ maxHeight: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <p style={{ textAlign: 'left', wordSpacing: '2px', fontSize: '13px'  }}>
              The Quiz App is a personal project designed to test your basic computer knowledge. Users can engage in quizzes where questions and options change with every page reload.
            </p>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-between flex-nowrap text-center mt-3 codes">
          <Button variant="primary" target="_blank" href="https://quiz-app-sigma-beryl.vercel.app/">
            See Live
          </Button>
          <Button variant="secondary" target="_blank" href="https://github.com/Praveenkumar21v/Quiz-app " className='sourceCode'>
            Source Code
          </Button>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element-works"
        contentStyle={{
          background: 'linear-gradient(to right, #403b4a, #e7e9bb)', 
          color: '#fff',
        }}
        contentArrowStyle={{ borderRight: '7px solid #B08858' }}
        date={<span style={{ color: '#fff' }}>2024</span>}
        iconStyle={{ backgroundImage: 'linear-gradient(to right, #403b4a, #e7e9bb)', color: '#fff' }}
        
 
      >
        <h3 className="vertical-timeline-element-title">Free Guy App</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>

        <Card className="card-pro">
          <Card.Img
            variant="top"
            src={FreeGuyImage}
            alt="Quiz App Screenshot"
            style={{ maxHeight: '150px', objectFit: 'cover' }}
          />
          <Card.Body>
            <p style={{ textAlign: 'left', wordSpacing: '2px', fontSize: '13px'  }}>
            Free Guy is a mobile application that allows users to view the trending and latest movie trailers and clips. Users can also use the movie
            rating feature. Utilized Responsive and rich user interface and smooth UI.            </p>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-between flex-nowrap text-center mt-3 codes">
          <Button variant="primary" target="_blank" href="https://praveenkumar21v.github.io/Free-guy/">
            See Live
          </Button>
          <Button variant="secondary" target="_blank" href="https://github.com/Praveenkumar21v/Free-guy" className='sourceCode'>
            Source Code
          </Button>
        </div>
      </VerticalTimelineElement>


    </div>
  );
};

export default Projects;
