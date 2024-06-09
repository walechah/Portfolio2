import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  ideal,
  myGarage,
  ark,
  express,
  java,
  Idealvid,
  Arkvid,
  Orebivid,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Data Structures and Algorithms",
    icon: backend,
  },
  {
    title: "Computer Educator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  { name: "Java", icon: java },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  { name: "Express JS", icon: express },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Arctic Innovage(MyGarage)",
    icon: myGarage,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Created a user-friendly, responsive website using JavaScript, HTML, and CSS.",
      "Ensured high uptime and smooth launch with GoDaddy hosting",
      "Seamlessly connected front-end and back-end using Fetch API.",
      "Identified and resolved technical issues to enhance performance.",
    ],
  },
  {
    title: "Web Developer and IT Head",
    company_name: "Ideal Career Institute",
    icon: ideal,
    iconBg: "#383E56",
    date: "Apr 2023 - Present",
    points: [
      "Provided comprehensive tutoring in computer science for grades 11-12, ensuring student understanding and engagement.",
      "Led website and application development using technologies like Java, Firebase, React, MongoDB, and Flutter.",
      "Managed computer lab resources and coordinated online tests for smooth operation and accurate assessment.",
      "Collaborated with educators to align tech activities with educational goals, offering innovative solutions to enhance learning outcomes.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Ark Surveillance System",
    icon: ark,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Secured verification from the New Gen IEDC Manav Rachna as a Startup, validating the project's quality and impact.",
      "Spearheaded the development of an innovative security system leveraging AI for attendance tracking and security enhancement.",
      "Demonstrated proficiency in Python and OpenCV for AI model development, ensuring accurate and reliable results.",
      "Utilized HTML, CSS, and JavaScript to create a user-friendly interface, enhancing user experience and interaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ark Surveillance System",
    description:
      "Developed a responsive website for Ark Surveillance System, integrating our AI face detection model. The site ensures smooth functionality across all devices while showcasing the precision and efficiency of our technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://arksurveillancesystem.netlify.app/",
    video: Arkvid,
  },
  {
    name: "Ideal Career Institute",
    description:
      "    I transformed Ideal Career Institute's website, resulting in a remarkable 50% increase in attraction. Through strategic design and user-focused optimization, the site now effectively engages both prospective students and stakeholders. By showcasing the institute's offerings and values compellingly, I've elevated its online presence and driven tangible results in attracting new audiences.",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://test-ici-1.netlify.app/",
    video: Idealvid,
  },
  {
    name: "Real Estate App",
    description:
      " Orebishipping is my responsive e-commerce project, built entirely with ReactJS. It ensures seamless browsing across devices, offering an intuitive shopping experience with visually appealing product displays. Leveraging my front-end development skills, Orebishipping enhances the online shopping journey for customers.",
    tags: [
      {
        name: "n  ",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://orebi-shopping.vercel.app/",
    video : Orebivid,
  },
];

export { services, technologies, experiences, testimonials, projects };
