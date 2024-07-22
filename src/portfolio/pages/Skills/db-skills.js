import L_HTML5 from '../assests/img/skills/html-5-svgrepo-com.svg';
import L_CSS3 from '../assests/img/skills/css-3-svgrepo-com.svg';
import L_JAVASCRIPT from '../assests/img/skills/js-svgrepo-com.svg';
import L_REACT from '../assests/img/skills/react-svgrepo-com.svg';
import L_REDUX from '../assests/img/skills/redux-svgrepo-com.svg';
import L_REACT_BOOTSTRAP from '../assests/img/skills/React Bootstrap.svg';
import L_BOOTSTRAP from '../assests/img/skills/bootstrap-svgrepo-com.svg';
import L_NETLIFY from '../assests/img/skills/netlify-svgrepo-com.svg';
import L_POSTMAN from '../assests/img/skills/postman.svg';
import L_GITHUB_PAGES from '../assests/img/skills/icons8-github.svg';
import L_MYSQL from '../assests/img/skills/icons8-mysql (1).svg';
import L_GIT from '../assests/img/skills/git-svgrepo-com (1).svg';
import L_VERCEL from '../assests/img/skills/vercel_dark.svg'
import L_MONGODB from '../assests/img/skills/mongodb-wordmark.svg'
import L_NODE from '../assests/img/skills/nodejs.svg'
import L_GITHUB from '../assests/img/skills/gitHub.svg'
import L_EXPRESS from '../assests/img/skills/icons8-express-js.svg'


export const skills = {
    frontend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "HTML 5",
        imgSrc: L_HTML5,
        skillName: "HTML5",
      },
      {
        link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
        imgAltText: "CSS 3",
        imgSrc: L_CSS3,
        skillName: "CSS3",
      },
      {
        link: "https://www.javascript.com/",
        imgAltText: "JavaScript",
        imgSrc: L_JAVASCRIPT,
        skillName: "JavaScript",
      },
      
      {
        link: "https://reactjs.org/",
        imgAltText: "React JS",
        imgSrc: L_REACT,
        skillName: "React JS",
      },
      {
        link: "https://redux.js.org/",
        imgAltText: "Redux",
        imgSrc: L_REDUX,
        skillName: "Redux",
      },
      
    ],

    backend: [
      {
        link: "https://en.wikipedia.org/wiki/HTML5",
        imgAltText: "Node.js",
        imgSrc: L_NODE,
        skillName: "Node.js",
      },
      {
        link: "https://expressjs.com/",
        imgAltText: "Express",
        imgSrc: L_EXPRESS,
        skillName: "Express.js",
      },
    
      
    ],
    frameworks:[
       
          {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
          },
          {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
          },
         
          
    ],

    hostingPlatforms: [

      {
        link: "https://vercel.com/",
        imgAltText: "Vercel",
        imgSrc: L_VERCEL,
        skillName: "Vercel",
      },
   
      {
        link: "https://www.netlify.com/",
        imgAltText: "Netlify",
        imgSrc: L_NETLIFY,
        skillName: "Netlify",
      },
      {
        link: "https://pages.github.com/",
        imgAltText: "GitHub Pages",
        imgSrc: L_GITHUB_PAGES,
        skillName: "GitHub Pages",
      },
      
    ],
    databases: [
      {
        link: "https://firebase.google.com/",
        imgAltText: "SQL",
        imgSrc: L_MYSQL,
        skillName: "MYSQL",
      },
      {
        link: "https://www.mongodb.com/",
        imgAltText: "MONGODB",
        imgSrc: L_MONGODB,
        skillName: "MONGODB",
      },
      
    ],
    versionControl: [
      {
        link: "https://git-scm.com/",
        imgAltText: "GIT",
        imgSrc: L_GIT,
        skillName: "GIT",
      },
      {
        link: "https://github.com/",
        imgAltText: "GITHUB",
        imgSrc: L_GITHUB,
        skillName: "GITHUB",
      },
      {
        link: "https://www.postman.com/",
        imgAltText: "POSTMAN",
        imgSrc: L_POSTMAN,
        skillName: "POSTMAN",
      },
    ],
  };