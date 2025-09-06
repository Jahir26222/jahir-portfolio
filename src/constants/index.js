import { divinetech} from "../assets/images";
import { graduate} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },

    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

export const experiences = [
   {
  title: "MERN Stack Intern",
  company_name: "DivineTech Solutions",
  icon: divinetech, 
  iconBg: "#accbe1",
  date: "Dec 2024 - Mar 2025",
  points: [
    "Worked on real-world MERN stack projects during internship.",
    "Developed and optimized responsive E-commers admin panel using React.js and Node.js.",
    "Integrated REST APIs and managed MongoDB database operations.",
    "Collaborated with the team and learned industry-level coding practices.",
  ],
},
{
  title: "IT Graduate",
  company_name: "Bachelor of Science in IT",
  icon: graduate,
  iconBg: "#a2d2ff",
  date: "2022 - 2024",
  points: [
    "Studied programming, databases, and web development fundamentals.",
    "Completed academic projects using HTML, CSS, JavaScript, and React.",
    "Learned problem-solving, data structures, and software engineering basics.",
    "Built a strong foundation for full-stack development career.",
  ],
},

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jahir26222/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jahir-hussain-31a523316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'BugBuster',
        description: 'AI-based tool that reviews code, highlights potential issues, and suggests improvements to enhance code quality and readability.',
        link: 'https://bug-reviewer.netlify.app/',
    },
       {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Admin Panel , E-Commerce',
        description: 'E-commerce admin dashboard with product, order, add product, delete production functionality built using the MERN stack.',
        link: 'https://github.com/Jahir26222/Sweet__Namkeen/tree/main/Admin-Dashboard',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'GenZNote',
        description: 'Note-taking app built with the MERN stack, featuring CRUD operations, and responsive design.',
        link: 'https://genznote.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Play Free Quiz Game',
        description: 'Interactive quiz game built with React.js that uses an API to generate random questions, tracks scores, and provides instant feedback.',
        link: 'https://mernquiz2.netlify.app/',
    }
 
   
];