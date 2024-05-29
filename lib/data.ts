import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuAtom, LuBrain, LuBriefcase, LuComputer, LuGraduationCap, LuShield } from "react-icons/lu";
import socialWatch from "@/public/socialWatch.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import priceWise from '@/public/priceWise.png'
import fitnessApp from '@/public/FitnessApp.png'
import technicalBlog from '@/public/TechnicalBlog.png'
import youtubeClone from '@/public/youtubeClone.png'
import adminDashboard from '@/public/ecommerceAdmin.png'
import ecommerceStore from '@/public/ecommerceStore.png'
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Cybersecurity Bootcamp",
    location : "Zalego, Nairobi",
    description: "In 2018, I embarked on a transformative journey by joining a pentesting/cybersecurity bootcamp, immersing myself in the world of cybersecurity and ethical hacking.",
    icon: React.createElement(LuShield),
    date: "2018"
  },
  {
    title: "University Pursuit",
    location: "JKUAT, Kenya",
    description: "Later in 2018, I enrolled in university to pursue a Bachelor's degree in Actuarial Science, where I expanded my knowledge in risk assessment and predictive analytics while also acquiring foundational mathematical skills that facilitated my journey into machine learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2018"
  },
  {
    title: "Machine and Deep Learning Journey",
    location: "Everywhere",
    description: "I embarked on a self-taught journey into deep learning, traversing diverse domains. Beginning with machine learning, I progressed to mastering deep learning techniques, including natural language models, reinforcement learning models, and generative adversarial models. I applied these advanced techniques to various research projects, exploring their potential across different fields.",
    icon: React.createElement(LuBrain),
    date: "2019-2020"
  }
  ,
  {
    title: "Part-Time Research Collaborator",
    location: "Remote",
    date: "2021 - 2023",
    icon:React.createElement(LuBriefcase),
    "summary": "As a part-time research collaborator for various academic Projects, I played a pivotal role in advancing research initiatives in machine learning, deep learning, and reinforcement learning. Collaborating with interdisciplinary teams, I contributed to the development and benchmarking of cutting-edge models, conducted rigorous experiments, and facilitated knowledge transfer sessions. This role allowed me to refine my skills in model development, experimentation, and interdisciplinary collaboration.",
    description: "As a part-time research collaborator, I actively contributed to various aspects of machine learning research. I collaborated closely with students and researchers from diverse disciplines, offering expertise in machine learning projects. Additionally, I assisted in the development of cutting-edge machine learning models, ensuring alignment with research objectives. I conducted rigorous benchmarking exercises to evaluate model performance against industry benchmarks. Engaging in iterative refinement processes, I enhanced model performance and scalability. Furthermore, I facilitated knowledge transfer sessions, sharing best practices and insights with fellow researchers."
  },
  {
    title: "Data Engineer",
    location: "Remote",
    date: "2022",
    "summary": "In 2022, I undertook diverse roles in the field of data science, contributing both as a Data Engineer at a social media analytics firm and as a Freelance Data Science Consultant. These roles allowed me to leverage my expertise in engineering data infrastructure, implementing data governance processes, and advising clients on advanced machine learning techniques for actionable insights.",
    description: "As a Data Engineer at a social media analytics firm, I engineered data infrastructure to support real-time ingestion, processing, and analysis of social media data streams. Additionally, I implemented data governance and quality assurance processes to ensure the reliability and accuracy of analytics reports delivered to clients.I advised on leveraging advanced machine learning techniques for extracting actionable insights from complex datasets and designed custom machine learning solutions tailored to specific business objectives. These solutions ranged from customer segmentation and churn prediction to anomaly detection and social networks clustering."
    ,icon: React.createElement(LuBriefcase)
  },
  
  {
    title: "Web Development",
    location: "Various Locations",
    date: "2021-2023",
    icon: React.createElement(LuAtom),
    // "summary": "In 2021, I embarked on a web development journey to offer complete data science solutions, starting from basic HTML and CSS to advanced frameworks like React and Next.js. This journey has equipped me with the skills to integrate data science solutions seamlessly into web applications, enhancing their functionality and usability.",
      description: "My journey into web development began in 2021 with a focus on expanding my skill set to offer end-to-end data science solutions. Starting with HTML and CSS, I mastered the fundamentals of web development, laying the groundwork for building user interfaces. As I progressed, I delved into JavaScript and its modern libraries and frameworks, including React. With React, I gained proficiency in building dynamic and interactive user interfaces, seamlessly integrating data visualization and analysis components.Continuing to advance, I transitioned to Next.js, a powerful React framework for building server-side rendered and statically generated web applications. With Next.js, I enhanced my ability to develop robust and performant web applications, capable of handling complex data science tasks efficiently."
  },
  {
    title: "Freelance fullStack Developer & Research Collaborator",
    location: "Various Locations",
    date: "2024 - Present",
    icon:React.createElement(LuBriefcase),
    "summary": "Since 2024, I've been thriving in my dual role as a freelance backend developer and research collaborator, specializing in building data-driven backend applications that integrate machine learning and data mining technologies.",
    description: "As a freelance fullstack developer, my primary focus lies in architecting and developing robust backend systems for data-driven applications. Leveraging my expertise in backend technologies such as Node.js, Express.js,Flask, and databases like MongoDB,postgress, I design scalable and efficient backend architectures that power data-driven applications. I specialize in integrating machine learning and data mining techniques into backend systems  enabling the extraction of actionable insights from large datasets."
  }
  
  // {
  //   title: "Data Engineer & Freelance Data Science Consultant",
  //   location: "Various Locations",
  //   date: "2022-2023",
  //   "summary": "In 2022, I undertook diverse roles in the field of data science, contributing both as a Data Engineer at a social media analytics firm and as a Freelance Data Science Consultant. These roles allowed me to leverage my expertise in engineering data infrastructure, implementing data governance processes, and advising clients on advanced machine learning techniques for actionable insights.",
  //   description: "As a Data Engineer at a social media analytics firm, I engineered data infrastructure to support real-time ingestion, processing, and analysis of social media data streams. Additionally, I implemented data governance and quality assurance processes to ensure the reliability and accuracy of analytics reports delivered to clients.\n\nSimultaneously, as a Freelance Data Science Consultant, I provided valuable insights to academic researchers and industry clients. I advised on leveraging advanced machine learning techniques for extracting actionable insights from complex datasets and designed custom machine learning solutions tailored to specific business objectives. These solutions ranged from customer segmentation and churn prediction to anomaly detection and fraud prevention."
  //   ,icon: React.createElement(LuComputer)
  // },
  
  
  
  ,
] as const;

export const projectsData = [
  {
    title: "socialWatch",
    description: "socialWatch is a comprehensive social media analytics platform that leverages advanced techniques for web scraping, natural language processing, and data visualization. The application allows users to monitor,compare and analyze sentiment trends across various social media platforms for selected entities. ",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Puppeteer",
      "Web Scraping",
      "Python",
      "Flask",
      "Natural Language Processing",
    
      "Data Visualization",
      "PostgreSQL"
    ],
    imageUrl: socialWatch,
    siteUrl: '',
  },
  {
    title: "priceWise",
    description: "priceWise is a powerful price tracking and notification platform designed to help users stay informed about price fluctuations for products on Amazon. With its advanced web scraping capabilities powered by Puppeteer, the application continuously monitors product prices, ensuring users never miss out on the best deals. ",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Puppeteer",
      "Web Scraping",
      "MongoDB",
      "Cron Jobs",
      "Price Tracking",
      "Email Notifications",
      "Data Analytics"
    ],
    imageUrl: priceWise,
  },
  {
    title: "Technical Blog",
    description: "A platform meticulously crafted to elevate the art of technical writing to new heights. Built on the robust foundation of Next.js, this blog leverages the advanced capabilities of Content Layer, a powerful content management solution that seamlessly integrates with Markdown, empowering writers to effortlessly compose, organize, and publish their technical articles. ",
    tags: [
      "Next.js",
      "Content Layer",
      "Markdown",
      "Zustand",
      "Rehype",
      "Blog Platform",
      "Code Snippets",
      "Interactive Elements"
    ],
    imageUrl: technicalBlog,
  },
  {
    title: "eCommerce Admin Dashboard",
    description: "Built with Next.js, this feature-rich platform empowers business owners to seamlessly create and monitor multiple online stores simultaneously. With its intuitive interface, you can tailor each store's dashboard to your unique branding and preferences, ensuring a cohesive and professional experience.",
    tags: [
      "Next.js",
      "Cloudinary",
      "Prisma",
      "PlanetScale",
      "MySQL",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
      "Zod"
    ],
    imageUrl: adminDashboard,
  },
  {
    title: "eCommerce Store",
    description: "A sleek and user-friendly frontend designed to captivate and engage customers. Seamlessly integrated with our powerful Admin Dashboard, this storefront leverages the same robust tech stack to deliver an exceptional shopping experience. Built.",
    tags: [
      "Next.js",
      "eCommerce",
      "Tailwind CSS",
      "TypeScript",
      "Zustand",
      "Zod",
      "Stripe",
      "Cloudinary",
      "User Experience"
    ],
    imageUrl: ecommerceStore,
  },
  {
      title: "Fitness App",
      description: "Built with React, this app leverages the RapidAPI platform to seamlessly integrate exercise GIFs and YouTube tutorials, providing users with a visually engaging and informative experience. The app offers a vast library of exercises, complete with detailed instructions and demonstrations, catering to various fitness levels and preferences.",
      tags: [
        "React",
        "vite",
        "React Router",
        "RapidAPI",
        "Tailwind CSS",
        "Responsive Design"
      ],
      imageUrl: fitnessApp,
    
  },
  {
    title: "YouTube Clone",
    description: "Immerse yourself in the world of video streaming with our YouTube Clone, a powerful web application that showcases your proficiency in React and API integration. Leveraging the capabilities of RapidAPI, this project allows you to seamlessly fetch and display video data, replicating the core functionality of the popular YouTube platform. With a sleek and intuitive user interface, users can easily browse, search, and play videos from a vast library,",
    tags: [
      "React",
      "RapidAPI",
      "YouTube",
      "Video Streaming",
      "API Integration",
      "Filtering",
      "Searching",
      "User Interface",
      "JavaScript"
    ],
    imageUrl: youtubeClone,
  }

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Framer Motion",
  "Sklearn",
  "Tensorflow",
  "Pytorch",
  "Apache Spark",
  "PySpark"
] as const;