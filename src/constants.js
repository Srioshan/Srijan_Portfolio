// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import pwclogo from './assets/company_logo/pwclogo.png';

// Education Section Logo's

import Nistlogo from './assets/education_logo/Nistlogo.png';
import Xavierslogo from './assets/education_logo/Xavierslogo.jpg';
import premchandlogo from './assets/education_logo/premchandlogo.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: pwclogo,
      role: "Salesforce Trainee",
      company: "PWC",
      date: "September 2023 - Feburary 2024",
      desc: "Six-month training using the Salesforce Trailhead platform, covering Salesforce Lightning Web Components (LWC) development, an introduction to Apex programming, and Salesforce data modeling using standard and custom objects; followed by certification. Six-month training using the Salesforce Trailhead platform, covering Salesforce Lightning Web Components (LWC) development, an introduction to Apex programming, and Salesforce data modeling using standard and custom objects; followed by certification.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Apex",
        "LWC",
        "Flows",
        "Java",
        "SOQL",
        "AgentForce",
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: Nistlogo,
      school: "NIST University, Berhampur",
      date: "December 2021 - May 2025",
      grade: "7.5 CGPA",
      desc: "I have completed my Bachelors's degree (BTECH) in Information Technology from NIST University , Berhampur. During my time at NIST, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NIST University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors of Technology - BTECH",
    },
    {
      id: 1,
      img: Xavierslogo,
      school: "St.Xaviers College, Ranchi",
      date: "April 2018 - Feb 2020",
      grade: "60%",
      desc: "I completed my Intermediate from St.Xaviers College, Ranchi. ",
      degree: "Intermediate(XII) - PCM with IT",
    },
    {
      id: 2,
      img: premchandlogo,
      school: "Premchand High School, Mesra",
      date: "Apr 2017 - Feb 2018",
      grade: "73%",
      desc: "I completed my class 10 education from Premchand High School, Mesra, under the State board.",
      degree: "Matriculation(X) - Science",
    },
    
  ];
  
