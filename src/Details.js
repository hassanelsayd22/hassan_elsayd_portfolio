// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import nextjs from "./assets/techstack/nextjs.png";
import turborepo from "./assets/techstack/turborepo.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import mui from "./assets/techstack/mui.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import rhf from "./assets/techstack/rhf.png";
import reactQuery from "./assets/techstack/react_query.webp";
import ts from "./assets/techstack/ts.png";
import shadcn from "./assets/techstack/shadcn.png";
import cursor from "./assets/techstack/cursor-ai.png";

// Project Images
import aseel from "./assets/projects/aseel.jpg";
import salehunter from "./assets/projects/salehunter.png";
import ideahub from "./assets/projects/ideahub.png";

// Personal Details
export const personalDetails = {
  name: "Hassan Elsayd",
  tagline: "React / Next.js Frontend Developer",
  img: profile,
  about: `Experienced Frontend Developer proficient in building responsive, high-performance web applications with ReactJS and NextJS. Skilled in creating clean, maintainable code and applying modern design principles to deliver exceptional user experiences. Proactive team player with a passion for innovation and leveraging the latest technologies.`,
};

// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/hassan-elsayd-218a9510a/",
  github: "https://github.com/hassanelsayd22",
};

// Work Experience
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: "Beetleware",
    Location: "Remote",
    Type: "Full time",
    Duration: "June 2024 - Present",
  },
  {
    Position: "Frontend Web Developer",
    Company: "Elite (Military Service Place)",
    Location: "Egypt",
    Type: "Full Time",
    Duration: "May 2023 - May 2024",
  },
  {
    Position: "Full-Stack Internship",
    Company: "Faculty of Computers and Informatics, Suez Canal University",
    Location: "Egypt, Ismailia",
    Type: "Internship",
    Duration: "July 2020 - August 2020",
  },
];

// Education Details
export const eduDetails = [
  {
    Position: "Bachelor of Computer Science",
    Company: "Faculty of Computers and Informatics, Suez Canal University",
    Location: "Ismailia, Egypt",
    Type: "Bachelor",
    Duration: "2018 - 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html,
  css,
  js,
  react,
  redux,
  turborepo,
  tailwind,
  bootstrap,
  mui,
  nextjs,
  vscode,
  postman,
  git,
  github,
  figma,
  rhf,
  reactQuery,
  ts,
  shadcn,
  cursor,
};

// Project Details
export const projectDetails = [
  {
    title: "InvestAseel Platform",
    image: aseel,
    description: `Developed a Shariah-compliant investment platform licensed by the CMA in Saudi Arabia, focusing on building responsive and dynamic user interfaces with real-time data visualization and secure investment workflows.`,
    techstack:
      "Next.js, React.js, React Hook Form, React Query, ECharts, Tailwind, Material UI",
    previewLink: "https://investaseel.sa/",
    githubLink: "",
  },
  {
    title: "InvestAseel Admin Dashboard",
    image: aseel,
    description: `Built a dynamic admin dashboard to manage investments, investors, companies, and requests, featuring role-based access control (RBAC), real-time statistics, server/client side filtering, and a scalable monorepo setup.`,
    techstack:
      "Next.js, React.js, React Hook Form, React Query, Material UI, Tailwind CSS",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "InvestAseel Authorized Entity Panel",
    image: aseel,
    description: `Developed a dedicated panel for fund owners within the platform to manage investment opportunities with real-time status updates and customized RBAC system.`,
    techstack:
      "Next.js, React.js, React Hook Form, React Query, Material UI, Tailwind CSS",
    previewLink: "",
    githubLink: "",
  },
  {
    title: "Salehunter",
    image: salehunter,
    description: `Developed a price comparison engine across Android, Desktop, and Web platforms for products from Amazon, Jumia, and registered stores with real-time price tracking.`,
    techstack: "React.js, JavaScript, Redux, MUI, Node.js (Backend)",
    previewLink: "https://sale-hunter.vercel.app/",
    githubLink: "https://github.com/hassanelsayd22/SaleHunter",
  },
  {
    title: "Ideahub",
    image: ideahub,
    description: `Developed a Blogs App featuring blog display, user authentication using Auth.js, post creation with React Quill, and browsing individual posts with smooth UI.`,
    techstack: "Next.js, Auth.js, React Quill, JSON-SERVER, CSS Modules",
    previewLink: "https://ideahub-lac.vercel.app/",
    githubLink: "https://github.com/hassanelsayd22/ideahub",
  },
];

// Contact Details
export const contactDetails = {
  email: "hassan22elsayd@gmail.com",
  phone: "+201033704442",
};
