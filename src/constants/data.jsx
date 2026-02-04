import {
    Github, Linkedin, Facebook, LayoutList, Code, Zap, Server, Globe, Database, Wrench
} from 'lucide-react';
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaFigma,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiFirebase,
    SiVercel,
    SiNetlify,
    SiFramer,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';

export const PORTFOLIO_DATA = {
    designation: "MERN Stack Developer",
    name: "Homayra Binte Harun Heme",
    photoUrl: "https://i.ibb.co.com/cctxyfjs/banner-formal-removebg-preview.png",
    resumeLink: "https://drive.google.com/file/d/1MssJQLLtG0_XPjJrwgc_PiLRnhXc_gtk/view?usp=drive_link",
    email: "heme5674@gmail.com",
    phone: "+8801878654211",
    socials: [
        { name: "GitHub", icon: Github, link: "https://github.com/HomayraHeme" },
        { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/homayra-heme/" },
        { name: "Facebook", icon: Facebook, link: "https://www.facebook.com/homayra.heme.75" },
    ],
    about: {
        intro: "I am Homayra Binte Harun Heme, a passionate MERN Stack Developer. I approach my work with a detail-oriented mindset and am committed to building robust and functional applications. I pride myself on being a good listener, which helps me understand project requirements deeply, and I highly value continuous learning in the web development field.",
        journey: "My development journey started with Programming Hero. I began by working on projects using simple HTML and CSS. As my knowledge grew, I eagerly explored and mastered the full MERN (MongoDB, Express, React, Node.js) stack. While I identify as a slow learner, I utilize my inherent patience to systematically overcome this challenge, ensuring I fully grasp every concept and deliver quality work.",
        hobbies: "Outside of coding, my hobbies are painting and gardening. These creative pursuits perfectly complement my professional work, as they cultivate the same qualities I bring to development: patience and extreme attention to detail. I apply these core values to every task I undertake, whether it's perfecting a painting, nurturing a plant's growth, or fine-tuning a web application's code.",
    },
    skills: [
        {
            category: "Frontend",
            icon: LayoutList,
            list: [
                { name: "React", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "JavaScript (ES6+)", icon: <FaJs /> },
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> }
            ]
        },
        {
            category: "Backend",
            icon: Code,
            list: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "REST APIs", icon: <TbApi /> },
                { name: "Axios", icon: <Zap className="w-4 h-4" /> }
            ]
        },
        {
            category: "Database & Deployment",
            icon: Database,
            list: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Netlify", icon: <SiNetlify /> },
                { name: "Surge", icon: <Globe /> }
            ]
        },
        {
            category: "Tools & Libraries",
            icon: Wrench,
            list: [
                { name: "Git/GitHub", icon: <FaGitAlt /> },
                { name: "Figma", icon: <FaFigma /> },
                { name: "Framer Motion", icon: <SiFramer /> },
                { name: "VS Code", icon: <BiLogoVisualStudio /> },
            ]
        }
    ],
    education: [
        {
            institution: "National Institute of Textile Engineering and Research",
            degree: "B.Sc. in Computer Science & Engineering",
            period: "2022-present",
        },

    ],

    projects: [
        {
            id: 1,
            name: "Book Haven - An Online Book Library",
            image: "https://i.ibb.co.com/qFJsTKW1/Book-Haven.png",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Express.js"],
            description: "A full-stack bookstore web app where users can browse and manage books easily.",
            liveLink: "https://book-haven-48f66.web.app/",
            githubLink: "https://github.com/HomayraHeme/book-haven-client",
            serverLink: "https://github.com/HomayraHeme/book-haven-server",
            challenges: "Overcame challenges in implementing a light/dark mode toggle, adding a comment feature, and deploying the project successfully.",
            futurePlans: "Planning to add a feature for selling hard copy books directly through the platform.",
        },
        {
            id: 2,
            name: "SkillSwap - A Skills Sharing Platform",
            image: "https://i.ibb.co.com/35Dz38nP/Skill-Swap.png",
            techStack: ["React", "React-router", "Firebase", "Taiwind CSS", "HTML"],
            description: "A platform where users can share and explore skills, connect with others, and learn collaboratively.",
            liveLink: " https://skill-swap-9152c.web.app/",
            githubLink: "https://github.com/HomayraHeme/skill-swap",
            challenges: "Faced challenges while implementing the profile update system, building an efficient filtering system, and ensuring smooth user interactions across the platform.",
            futurePlans: "Plan to add real-time chat, advanced ratings, and payment integration for a better user experience.",
        },
        {
            id: 3,
            name: "FitTrack - A Fitness Tracking App",
            image: "https://i.ibb.co.com/4RcPDYqm/FitTrach.png",
            techStack: ["React", "Tailwind CSS", "Next.js", "Next-auth", "JavaScript", "Context API"],
            description: "A fitness tracking app that helps users manage workouts and monitor progress.",
            liveLink: "https://fit-track-six-beta.vercel.app/",
            githubLink: "https://github.com/HomayraHeme/fit-track",
            challenges: "Faced challenges while exploring Next.js and implementing its features effectively.",

            futurePlans: "Plan to add photo uploads, GPS tracking, push notifications, and advanced workout filtering/search.",
        },
        {
            id: 4,
            name: "LoanLink - Microloan Tracker System",
            image: "https://i.ibb.co.com/zWmBCgcQ/loanlink-banner.png",
            techStack: ["React", "Tailwind CSS", "Framer Motion", "Firebase Auth", "Axios", "Node.js", "Express.js", "MongoDB", "Stripe"],
            description: "A web-based microloan request, review & approval tracker system designed for small financial organizations. Streamlines applications, approvals, and EMI tracking.",
            liveLink: "https://loanlink-49d90.web.app/",
            githubLink: "https://github.com/HomayraHeme/LoanLink-Client",
            serverLink: "https://github.com/HomayraHeme/LoanLink-Server",
            challenges: "Implemented a robust Role-Based Access Control (RBAC) system for Admin, Manager, and Borrower roles to ensure secure data access and authorized operations.",
            futurePlans: "Integrating a secure payment gateway for real-time transactions. Future plans also include AI-driven credit scoring, multi-language support for broader accessibility, and an automated notification system for EMI reminders.",
        },
    ],
};
