import React, { useState, useEffect, useCallback, useRef, useMemo, createContext } from 'react';
import emailjs from '@emailjs/browser';
import {
  Menu, X, Sun, Moon, Github, Linkedin, Facebook, Download, Mail, Phone, MessageCircle, Code, GraduationCap, Briefcase, Zap, Star, LayoutList, ArrowRight, ExternalLink, ChevronRight, Sparkles, Award, Users, Globe, Clock
} from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaFire
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from 'react-icons/si';

// Create context for animation control
const AnimationContext = createContext({ animationsEnabled: true });

// --- YOUR PERSONAL DATA ---
const PORTFOLIO_DATA = {
  designation: "MERN Stack Developer",
  name: "Homayra Binte Harun Heme",
  photoUrl: "https://i.ibb.co.com/8nmz2nBq/rounded-formal.png",
  resumeLink: "https://drive.google.com/file/d/1g-a55sF8gCmuI8shHD3ABWBqcaWtKgJM/view?usp=sharing",
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
    { category: "Frontend", icon: LayoutList, list: ["React", "Next.js", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"] },
    { category: "Backend", icon: Code, list: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Database & Tools", icon: Zap, list: ["MongoDB", "Git/GitHub", "Figma", "Firebase", "VS Code", "Vercel", "Nelify", "Surge"] },
  ],
  education: [
    {
      institution: "National Institute of Textile Engineering and Research",
      degree: "B.Sc. in Computer Science & Engineering",
      period: "2022-present",
    },
    {
      institution: "Programming Hero",
      degree: "Complete Web Development with Programming Hero",
      period: "2025-present",
    },
    {
      institution: "Milestone College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2020-2021",
      details: "Concentrated on Science subjects."
    },
  ],
  experience: [
    {
      title: "Fresher/Student",
      company: "Currently Seeking Opportunities",
      period: "N/A",
      description: "Focusing on building production-ready projects and continuously learning new technologies to start a professional journey.",
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

// Enhanced Floating Background with Glassmorphism
const BackgroundVideo = () => {
  // Tech icons for dark/light mode with adjusted opacity
  const techIconsDark = [
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <SiVercel className="text-white" />, name: "Vercel" },
  ];

  const techIconsLight = [
    { icon: <FaReact className="text-cyan-600" />, name: "React" },
    { icon: <SiNextdotjs className="text-gray-900" />, name: "Next.js" },
    { icon: <FaJs className="text-yellow-600" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-700" />, name: "Express" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <FaGitAlt className="text-orange-700" />, name: "Git" },
    { icon: <FaFigma className="text-purple-600" />, name: "Figma" },
    { icon: <FaFire className="text-red-500" />, name: "Firebase" },
    { icon: <SiVercel className="text-gray-900" />, name: "Vercel" },
  ];

  return (
    <>
      {/* Light Mode Background */}
      <div className="fixed inset-0 z-0 overflow-hidden dark:hidden">
        {/* Light mode gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/90 to-purple-50/90"></div>

        {/* Light mode subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        {/* Floating tech icons - Light mode - Reduced opacity and better movement */}
        {techIconsLight.map((tech, i) => (
          <div
            key={`light-${tech.name}-${i}`}
            className="absolute flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm border border-gray-200/30 shadow-lg"
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 14) % 85}%`,
              animation: `tech-float-light ${18 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.15 + Math.random() * 0.1,
              transform: `rotate(${i % 2 === 0 ? '5deg' : '-5deg'})`,
            }}
          >
            <div className="text-2xl opacity-70">{tech.icon}</div>
          </div>
        ))}

        {/* Subtle moving lines - Light */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`light-line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: '-10%',
              width: '120%',
              animation: `line-move-light ${15 + i * 3}s linear infinite`,
              animationDelay: `${i * 1}s`,
              opacity: 0.05,
            }}
          />
        ))}

        {/* Moving dots pattern - Light */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4f46e5 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px',
          opacity: 0.03,
          animation: 'grid-move-light 20s linear infinite'
        }}></div>
      </div>

      {/* Dark Mode Background */}
      <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block">
        {/* Dark mode gradient with more opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>

        {/* Subtle grid pattern for dark mode - Removed circuit lines, keeping only dots */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00ffaa 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>

        {/* Floating tech icons - Dark mode - Reduced opacity */}
        {techIconsDark.map((tech, i) => (
          <div
            key={`dark-${tech.name}-${i}`}
            className="absolute flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg"
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 14) % 85}%`,
              animation: `tech-float-dark ${22 + i * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.12 + Math.random() * 0.08,
              transform: `rotate(${i % 2 === 0 ? '5deg' : '-5deg'})`,
            }}
          >
            <div className="text-2xl opacity-60">{tech.icon}</div>
          </div>
        ))}

        {/* Binary rain effect - Dark only with slower movement */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`binary-${i}`}
            className="absolute top-0 font-mono text-xs text-green-400/5 tracking-widest whitespace-nowrap"
            style={{
              left: `${5 + (i * 5)}%`,
              animation: `binary-fall ${25 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          >
            {Array.from({ length: 10 }).map(() =>
              Math.random() > 0.5 ? '1' : '0'
            ).join(' ')}
          </div>
        ))}

        {/* Moving glowing dots - Dark only */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-[2px] h-[2px] rounded-full bg-cyan-400/15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `dot-move ${15 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 3px rgba(0, 255, 255, 0.1)'
            }}
          />
        ))}

        {/* Moving particle trails */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-[1px] h-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-500/8 to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-trail ${20 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.02,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes tech-float-light {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(var(--rotation, 0deg)) scale(1); 
          }
          25% { 
            transform: translateY(-15px) translateX(10px) rotate(calc(var(--rotation, 0deg) + 5deg)) scale(1.05); 
          }
          50% { 
            transform: translateY(-5px) translateX(20px) rotate(calc(var(--rotation, 0deg) + 10deg)) scale(1.1); 
          }
          75% { 
            transform: translateY(10px) translateX(5px) rotate(calc(var(--rotation, 0deg) + 5deg)) scale(1.05); 
          }
        }
        
        @keyframes tech-float-dark {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(var(--rotation, 0deg)) scale(1); 
          }
          25% { 
            transform: translateY(-20px) translateX(-15px) rotate(calc(var(--rotation, 0deg) + 8deg)) scale(1.08); 
          }
          50% { 
            transform: translateY(5px) translateX(25px) rotate(calc(var(--rotation, 0deg) + 15deg)) scale(1.15); 
          }
          75% { 
            transform: translateY(15px) translateX(-10px) rotate(calc(var(--rotation, 0deg) + 8deg)) scale(1.08); 
          }
        }
      `}</style>
    </>
  );
};

// Custom Hook for InView detection
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const Reveal = ({ children, threshold = 0.1, className = "", delay = 0 }) => {
  const [ref, isInView] = useInView({ threshold });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Custom Hook for Trailing Cursor Logic
const useTrailingCursor = () => {
  const [dots, setDots] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const dotsRef = useRef([]);

  useEffect(() => {
    const initialDots = Array.from({ length: 8 }, () => ({ x: 0, y: 0 }));
    dotsRef.current = initialDots;
    setDots(initialDots);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrame;
    const updateDots = () => {
      const newDots = [...dotsRef.current];
      newDots[0] = {
        x: newDots[0].x + (mousePos.current.x - newDots[0].x) * 0.4,
        y: newDots[0].y + (mousePos.current.y - newDots[0].y) * 0.4,
      };

      for (let i = 1; i < newDots.length; i++) {
        newDots[i] = {
          x: newDots[i].x + (newDots[i - 1].x - newDots[i].x) * 0.35,
          y: newDots[i].y + (newDots[i - 1].y - newDots[i].y) * 0.35,
        };
      }

      dotsRef.current = newDots;
      setDots(newDots);
      animationFrame = requestAnimationFrame(updateDots);
    };

    animationFrame = requestAnimationFrame(updateDots);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return dots;
};

const CursorTrail = () => {
  const dots = useTrailingCursor();

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden sm:block">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full transition-transform duration-150 ease-out"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${10 - index * 1}px`,
            height: `${10 - index * 1}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 0.7 - index * 0.08,
          }}
        />
      ))}
    </div>
  );
};

// Animated Neon Button Component
const AnimatedButton = ({ children, onClick, className = "", href, download, target, rel, type = "button" }) => {
  const baseClass = `
    relative group overflow-hidden px-6 sm:px-8 py-3 rounded-xl font-bold text-white transition-all duration-300
    shadow-lg hover:shadow-xl
    scale-100 hover:scale-105 active:scale-95
  `;

  const buttonContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 -z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} download={download} target={target} rel={rel} onClick={onClick} className={`${baseClass} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${className}`} type={type}>
      {buttonContent}
    </button>
  );
};

// Animated Border Button (for Repos)
const AnimatedBorderButton = ({ children, href, onClick, className = "", variant = "default" }) => {
  const baseClasses = `relative group flex items-center justify-center overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`;

  const content = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy ${variant === "outline" ? 'opacity-30' : 'opacity-70'} group-hover:opacity-100`} />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] px-6 py-3 text-sm font-bold backdrop-blur-3xl transition-colors
        ${variant === "outline"
          ? 'bg-transparent text-[#744B93] dark:text-[#C889B5] border border-[#744B93]/30 dark:border-[#C889B5]/30 hover:bg-[#744B93]/5 dark:hover:bg-[#C889B5]/5'
          : 'bg-white/90 dark:bg-gray-900/90 text-[#744B93] dark:text-[#C889B5] hover:bg-white dark:hover:bg-gray-800'
        }`}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

const Section = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-4 sm:px-8 lg:px-16 flex items-center justify-center scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-6xl relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
};

// Project Detail Modal
const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-900/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div
          className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 text-left shadow-2xl transition-all sm:my-8 border border-[#744B93]/20 dark:border-[#744B93]/40"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:text-[#744B93] dark:hover:text-[#C889B5] rounded-full transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            aria-label="Close Project Details"
          >
            <X size={28} className="transition-transform duration-300 hover:rotate-90" />
          </button>

          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>

          <div className="p-8 pt-12">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5] mb-6 break-words">
              {project.name}
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-[#C889B5]" />
                  Technology Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 dark:from-[#744B93]/20 dark:to-[#C889B5]/20 text-[#744B93] dark:text-[#C889B5] text-sm font-medium px-3 py-2 rounded-lg backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-[#C889B5]" />
                    Challenges Faced
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{project.challenges}</p>
                </div>

                <div>
                  <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-[#C889B5]" />
                    Future Plans
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{project.futurePlans}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2 flex items-center">
                  <LayoutList className="w-5 h-5 mr-2 text-[#C889B5]" />
                  Project Description
                </p>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full text-center py-3"
              >
                <Globe className="w-5 h-5" />
                Live Demo
              </AnimatedButton>
              <AnimatedBorderButton href={project.githubLink} className="flex-1 w-full">
                <Github className="w-5 h-5 mr-2" />
                Client Repo
              </AnimatedBorderButton>
              {project.serverLink && (
                <AnimatedBorderButton href={project.serverLink} className="flex-1 w-full">
                  <Code className="w-5 h-5 mr-2" />
                  Server Repo
                </AnimatedBorderButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Hero Section
const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                MERN Stack Developer
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-gray-100">Hello, I'm</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy">
                  {PORTFOLIO_DATA.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                I craft exceptional digital experiences with modern web technologies.
                Passionate about building scalable applications that make an impact.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <AnimatedButton
                  href={PORTFOLIO_DATA.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedButton>

                <AnimatedBorderButton variant="outline" onClick={() => scrollToSection('projects')}>
                  <Code className="w-5 h-5 mr-2" />
                  View Projects
                </AnimatedBorderButton>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex items-center gap-6 pt-8">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] rounded-xl shadow-lg border border-[#744B93]/10 dark:border-[#C889B5]/10 hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:w-1/3">
            <Reveal delay={200}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-gradient-xy"></div>
                <div className="relative p-2 bg-gradient-to-br from-white/20 to-white/5 dark:from-gray-800/20 dark:to-gray-800/5 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30">
                  <img
                    src={PORTFOLIO_DATA.photoUrl}
                    alt="Professional Profile"
                    className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-2xl flex items-center justify-center shadow-2xl">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fixed Navbar Component - ALWAYS VISIBLE
const Navbar = ({ activeSection, isDarkMode, toggleDarkMode, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const NavLink = ({ id, label }) => {
    const isActive = activeSection === id;

    const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      scrollToSection(id);
      setIsMenuOpen(false);
    };

    return (
      <button
        onClick={handleClick}
        className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
          ? 'text-white bg-gradient-to-r from-[#744B93] to-[#C889B5] shadow-lg'
          : 'text-gray-600 dark:text-gray-300 hover:text-[#744B93] dark:hover:text-[#C889B5] hover:bg-gray-100 dark:hover:bg-gray-800/50'
          }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="w-full backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 shadow-xl border-b border-white/20 dark:border-gray-700/30">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection('home');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="relative group">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <span className="text-white font-bold text-xl tracking-tighter">
                    &lt;/&gt;
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
              </div>
              <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5]">
                HEME.DEV
              </span>
            </button>

            <nav className="hidden lg:flex space-x-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-1.5 rounded-xl border border-white/20 dark:border-gray-700/30">
              {navItems.map(item => <NavLink key={item.id} {...item} />)}
            </nav>

            <div className="flex items-center space-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white transition-all duration-300"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/30 shadow-2xl">
            <nav className="p-4 space-y-1 flex flex-col">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className={`block text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === item.id
                    ? 'bg-gradient-to-r from-[#744B93] to-[#C889B5] text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

// --- APP COMPONENT ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  // Set dark class on body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Smooth scroll to section - OPTIMIZED VERSION
  const scrollToSection = useCallback((id) => {
    setIsMenuOpen(false);

    // Prevent multiple scrolls
    if (isScrolling) return;

    setIsScrolling(true);

    const element = document.getElementById(id);
    if (element) {
      // Use native scrollIntoView with smooth behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Reset scrolling state after animation
      const scrollDuration = 1000; // Match CSS transition duration
      setTimeout(() => {
        setIsScrolling(false);
      }, scrollDuration);
    }
  }, [isScrolling]);

  // Optimized Scroll Spy Logic - FIXED
  useEffect(() => {
    const handleScroll = () => {
      // Smooth scroll spy for active section
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Rest of the components remain the same...
  const AboutMeSection = () => (
    <Section id="about" title="About Me" subtitle="My journey in web development">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Personal Journey
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Crafting Digital Experiences with Passion
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {PORTFOLIO_DATA.about.intro}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {PORTFOLIO_DATA.about.journey}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {PORTFOLIO_DATA.about.hobbies}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#744B93] dark:text-[#C889B5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Quick Learner</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Adapting to new technologies</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#744B93] dark:text-[#C889B5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Attention to Detail</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Pixel-perfect implementations</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#744B93] dark:text-[#C889B5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Team Player</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Collaborative development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );

  const SkillsSection = () => (
    <Section id="skills" title="Technical Expertise" subtitle="Technologies I work with">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
          <Reveal key={skillGroup.category} delay={index * 100}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                  <skillGroup.icon className="w-7 h-7 text-[#744B93] dark:text-[#C889B5]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {skillGroup.list.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#744B93] dark:hover:text-[#C889B5] transition-colors duration-200 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  const EducationSection = () => (
    <Section id="education" title="Education" subtitle="My academic journey">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#744B93]/20 to-[#C889B5]/20 hidden md:block"></div>

        {PORTFOLIO_DATA.education.map((edu, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#744B93] dark:text-[#C889B5]" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-full text-sm font-medium text-[#744B93] dark:text-[#C889B5]">
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{edu.degree}</h3>
                  <p className="text-lg font-medium text-[#744B93] dark:text-[#C889B5] mb-3">{edu.institution}</p>
                  {edu.details && (
                    <p className="text-gray-600 dark:text-gray-400">{edu.details}</p>
                  )}
                </div>
              </div>

              <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full items-center justify-center relative z-10">
                <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>

              <div className="md:w-1/2"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  const ExperienceSection = () => (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="max-w-4xl mx-auto">
        {PORTFOLIO_DATA.experience.map((exp, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 mb-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-[#744B93] dark:text-[#C889B5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                    <p className="text-lg text-[#744B93] dark:text-[#C889B5]">{exp.company}</p>
                  </div>
                </div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-full text-sm font-medium text-[#744B93] dark:text-[#C889B5]">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{exp.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  const ProjectsSection = () => (
    <Section id="projects" title="Featured Projects" subtitle="My recent work">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20 dark:border-gray-700/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg text-[#744B93] dark:text-[#C889B5] hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white transition-all duration-300"
                  >
                    <Zap size={16} />
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 truncate">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-full text-xs font-medium text-[#744B93] dark:text-[#C889B5]">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 hover:from-[#744B93] hover:to-[#C889B5] hover:text-white text-[#744B93] dark:text-[#C889B5] rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <Globe size={16} />
                    Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 hover:from-[#744B93] hover:to-[#C889B5] hover:text-white text-[#744B93] dark:text-[#C889B5] rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );

  const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await emailjs.send(
          'service_vvep8u5',
          'template_skr3515',
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Homayra Heme',
          },
          'X8l8C7oU52H46-m87'
        );
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('Email send failed:', error);
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    };

    const ContactInfo = ({ icon: Icon, title, value, href }) => (
      <Reveal>
        <a
          href={href}
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block group"
        >
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 shadow-sm hover:shadow-xl hover:border-[#744B93]/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-2xl flex items-center justify-center text-[#744B93] group-hover:from-[#744B93] group-hover:to-[#C889B5] group-hover:text-white transition-all duration-300">
              <Icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex-grow">
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-wide">{title}</p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100 break-all">{value}</p>
            </div>
          </div>
        </a>
      </Reveal>
    );

    return (
      <Section id="contact" title="Get In Touch" subtitle="Let's work together">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-6">
                <ContactInfo icon={Mail} title="Email" value={PORTFOLIO_DATA.email} href={`mailto:${PORTFOLIO_DATA.email}`} />
                <ContactInfo icon={Phone} title="Phone" value={PORTFOLIO_DATA.phone} href={`tel:${PORTFOLIO_DATA.phone}`} />
                <ContactInfo icon={MessageCircle} title="WhatsApp" value={PORTFOLIO_DATA.phone} href={`https://wa.me/${PORTFOLIO_DATA.phone.replace(/[^0-9]/g, '')}`} />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="pt-8 border-t border-white/20 dark:border-gray-700/30">
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect on Social</h4>
                <div className="flex flex-wrap gap-4">
                  {PORTFOLIO_DATA.socials.map((social, index) => (
                    <Reveal key={social.name} delay={index * 50}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] rounded-2xl shadow-lg border border-[#744B93]/10 dark:border-[#C889B5]/10 hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                        aria-label={social.name}
                      >
                        <social.icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#C889B5]/20 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm text-green-700 dark:text-green-300 rounded-lg text-center border border-green-500/20">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm text-red-700 dark:text-red-300 rounded-lg text-center border border-red-500/20">
                    ✗ Failed to send message. Please try again later.
                  </div>
                )}

                <div className="pt-4">
                  <AnimatedButton
                    type="submit"
                    className={`w-full py-4 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    );
  };

  const Footer = () => (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-8 px-4 sm:px-8 lg:px-16 border-t border-white/20 dark:border-gray-700/30 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-xl shadow-lg">
              <span className="text-white font-bold text-xl tracking-tighter">
                &lt;/&gt;
              </span>
            </div>
            <div>
              <h2 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5] mb-1">
                HEME.DEV
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Crafting exceptional digital experiences
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {PORTFOLIO_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#744B93] dark:hover:text-[#C889B5] transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 dark:border-gray-700/30 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Homayra Binte Harun Heme. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
            Built with React & Tailwind CSS • Modern Professional Portfolio
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <AnimationContext.Provider value={{ animationsEnabled: true }}>
      <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden relative ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <BackgroundVideo />

        <div className="relative z-10">
          {/* Fixed Navbar - Always Visible */}
          <Navbar
            activeSection={activeSection}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            scrollToSection={scrollToSection}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <CursorTrail />

          <main>
            <HeroSection scrollToSection={scrollToSection} />
            <AboutMeSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          <Footer />

          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>

        <style>{`
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 80px;
          }
          
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: rgba(116, 75, 147, 0.1);
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #744B93, #C889B5);
            border-radius: 5px;
          }
          
          @keyframes gradient-xy {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient-xy {
            background-size: 400% 400%;
            animation: gradient-xy 3s ease infinite;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .backdrop-blur-sm {
            backdrop-filter: blur(8px);
          }
          
          .backdrop-blur-xl {
            backdrop-filter: blur(20px);
          }
        `}</style>
      </div>
    </AnimationContext.Provider>
  );
};

export default App;