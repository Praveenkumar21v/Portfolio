import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.css';

const Education = () => {
  useEffect(() => {
    const handleScroll = () => {
      const timelineElements = document.querySelectorAll('.vertical-timeline-element');

      timelineElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 1;

        if (isVisible) {
          element.classList.add('vertical-timeline-element--animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='education'>
      <h1 className="text-center text-primary">Education</h1>

      <VerticalTimeline className="timeline-container">
        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          contentStyle={{
            background: 'linear-gradient(to right, #FFA726, #FB8C00)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #FB8C00' }}
          date={<span style={{ color: '#fff' }}>2020 - 2023</span>}
          iconStyle={{ background: 'linear-gradient(to right, #FFA726, #FB8C00)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">B.Tech</h3>
          <h4 className="vertical-timeline-element-subtitle">Siddhartha Institute of Technologies and Sciences</h4>
          <p>Major in Electronics and Communication Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          contentStyle={{
            background: 'linear-gradient(to right, #AED581, #4CAF50)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  #4CAF50' }}
          date={<span style={{ color: '#fff' }}>2015 - 2019</span>}
          iconStyle={{ background: 'linear-gradient(to right, #AED581, #4CAF50)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Diploma</h3>
          <h4 className="vertical-timeline-element-subtitle">Siddhartha Institute of Technologies and Sciences</h4>
          <p>Major in Electronics and Communication Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
  className="vertical-timeline-element-work"
  contentStyle={{
    background: 'linear-gradient(to right, #EF5350, #D32F2F)',  // Red gradient
    color: '#fff',
  }}
  contentArrowStyle={{ borderRight: '7px solid #D32F2F' }}
  date={<span style={{ color: '#fff' }}>2014 - 2015</span>}
  iconStyle={{ background: 'linear-gradient(to right, #EF5350, #D32F2F)', color: '#fff' }}
>
  <h3 className="vertical-timeline-element-title">SSC</h3>
  <h4 className="vertical-timeline-element-subtitle">Scholars EM School</h4>
  <p>High School</p>
</VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
};

export default Education;
