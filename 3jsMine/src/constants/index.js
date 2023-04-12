import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import postgresql from '../assets/tech/postgresql.png'
  import navy from '../assets/company/navy.png'
  import valerio from '../assets/company/valerio.png'
  import ace from '../assets/company/ace.png'
  import idleGame from '../assets/idlegame.png'
  import fastFood from '../assets/fastFood.png'
  
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Ship Engineer (MM)",
      company_name: "US Navy",
      icon: navy,
      iconBg: "#383E56",
      date: "June 2013 - February 2017",
      points: [
        "Managed 200 hours preventative maintenance on both rudder system and aircraft elevator which increased the longevity of the ship by 23%",
        "Trained and supervised the professional development of 25 personnel in maintaining the A/C unit and refrigeration units including operations, technical drawings, and maintenance best practices",
        "Negotiated contract prices, timelines and personnel with civilian contractors and Navy supervisors",
        "Held 100% accountable for equipment worth more than $80 million",
      ],
    },
    {
      title: "Bakery Assistant",
      company_name: "Valerio's Tropical Bakery",
      icon: valerio,
      iconBg: "#383E56",
      date: "Feb 2017 - Aug 2018",
      points: [
        "Ensured the dough was made correctly and efficiently",
        "Prepared the pastries to their right shape and flavor",
        "Baked the products to the right time and temperature",
        "Communicated any products that the store are lacking to the head baker",
      ],
    },
    {
      title: "Store Clerk",
      company_name: "J.C. Licht: Ace Hardware",
      icon: ace,
      iconBg: "#383E56",
      date: "June 2021 - Oct 2022",
      points: [
        "Provided a positive representation of Ace Hardware and gave great customer service",
        "Continuosly assist with merchandise resets and restock through the store",
        "Proactively assist customer in solving problems",
        "Ensure all calls were answered promptly, courteously and effectively",
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
      name: "Idle Platoon",
      description:
        "Web application that allowed user to play as a fantasy character passively without too much effort",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "yellow-text-gradient",
        },
      ],
      image: idleGame,
      source_code_link: "https://github.com/YebraL/Game-Idle",
    },
    {
      name: "Fast-Food",
      description:
        "Website that acts like social media for food lovers and it has a unique feature that will randomizely pick a restaurant around your location if the user can't decide which restaurant to pick",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "yellow-text-gradient",
        },
      ],
      image: fastFood,
      source_code_link: "https://github.com/YebraL/FastFood",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };