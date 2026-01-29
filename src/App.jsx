import React, { useState, useEffect, useCallback, useRef, useMemo, createContext, useContext } from 'react';
import emailjs from '@emailjs/browser';
import {
  Menu, X, Sun, Moon, Github, Linkedin, Facebook, Download, Mail, Phone, MessageCircle, Code, GraduationCap, Briefcase, Zap, Star, LayoutList, ArrowRight
} from 'lucide-react';

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
      description: "Focusing on building production-ready projects and continuously learning new technologies to start a professional journey .",
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

// Enhanced Floating Background Video Component
const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Multiple Video Layers for Parallax Effect */}
      <div className="absolute inset-0">
        {/* Main Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-25"
          style={{ filter: 'brightness(0.7) contrast(1.3) saturate(1.2)' }}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-geometric-shapes-background-34417-1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.coverr.co/videos/coverr-abstract-lines-and-shapes-rotating-2163/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Secondary floating video element */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-40 animate-float-very-slow">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-full object-cover"
            style={{ filter: 'blur(5px) brightness(0.8)' }}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-geometric-lines-rotating-in-space-34418-1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Third floating video element */}
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 opacity-30 animate-float-medium">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full rounded-full object-cover"
            style={{ filter: 'blur(8px) brightness(0.6)' }}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-rotating-abstract-geometric-shapes-34415-1080p.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-gray-900/20 dark:via-gray-900/10 dark:to-gray-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#744B93]/10 via-transparent to-[#C889B5]/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Animated floating geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#744B93]/20 to-[#C889B5]/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-[#C889B5]/15 to-[#744B93]/15 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute top-2/3 left-2/3 w-48 h-48 bg-gradient-to-r from-[#744B93]/25 to-transparent rounded-full blur-2xl animate-float-fast"></div>
      <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-l from-[#C889B5]/10 to-transparent rounded-full blur-3xl animate-float-very-slow"></div>

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#744B93]/40 to-[#C889B5]/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float-particle ${10 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
};

// Utility function to get Google Docs/Drive direct download URL
const getGoogleDocsDownloadUrl = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    const fileId = match[1];
    if (url.includes('/file/d/')) {
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return `https://docs.google.com/document/d/${fileId}/export?format=pdf`;
  }
  return url;
};

// Custom Hook for Scroll Direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDirection]);

  return scrollDirection;
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

const Reveal = ({ children, threshold = 0.1, className = "" }) => {
  const [ref, isInView] = useInView({ threshold });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
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
          className="absolute bg-[#744B93]/60 dark:bg-[#C889B5]/60 rounded-full blur-[1px] transition-transform duration-150 ease-out"
          style={{
            left: dot.x,
            top: dot.y,
            width: `${12 - index * 1.2}px`,
            height: `${12 - index * 1.2}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 1 - index * 0.1,
          }}
        />
      ))}
    </div>
  );
};

// --- MAIN COMPONENTS ---

// Animated Neon Button Component
const AnimatedButton = ({ children, onClick, className = "", href, download, target, rel }) => {
  const baseClass = `
    relative group overflow-hidden px-6 sm:px-8 py-3 rounded-xl font-bold text-white transition-all duration-300
    shadow-[0_0_20px_rgba(116,75,147,0.5)] hover:shadow-[0_0_35px_rgba(116,75,147,0.7)]
    scale-100 hover:scale-105 active:scale-95
  `;

  const buttonContent = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 -z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <span className="relative z-10 flex items-center justify-center">
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
    <button onClick={onClick} className={`${baseClass} ${className}`}>
      {buttonContent}
    </button>
  );
};

// Animated Border Button (for Repos)
const AnimatedBorderButton = ({ children, href, onClick, className = "" }) => {
  const buttonClasses = `relative group flex items-center justify-center overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`;

  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-[spin_3s_linear_infinite] opacity-70 group-hover:opacity-100" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-white dark:bg-gray-900 px-6 py-3 text-sm font-bold text-[#744B93] dark:text-[#C889B5] backdrop-blur-3xl transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
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
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

const Section = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 flex items-center justify-center scroll-mt-20"
    >
      <div className="w-full max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-12 text-center text-[#744B93] border-b-4 border-[#C889B5]/30 pb-3 inline-block mx-auto">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

// Project Detail Modal - UPDATED: Removed Close Button, Added X in corner
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
          {/* Close X button in top-right corner */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 hover:text-[#744B93] dark:hover:text-[#C889B5] rounded-full transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            aria-label="Close Project Details"
          >
            <X size={28} className="transition-transform duration-300 hover:rotate-90" />
          </button>

          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />

          <div className="p-8 pt-12">
            <h3 className="text-3xl font-bold text-[#744B93] mb-4 break-words">{project.name}</h3>

            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold text-lg text-[#C889B5] flex items-center mb-2"><Code className="w-5 h-5 mr-2" /> Main Technology Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-[#744B93]/10 dark:bg-[#744B93]/20 text-[#744B93] text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg text-[#C889B5] flex items-center mb-2"><LayoutList className="w-5 h-5 mr-2" /> Brief Description</p>
                <p>{project.description}</p>
              </div>

              <div>
                <p className="font-semibold text-lg text-[#C889B5] flex items-center mb-2"><Zap className="w-5 h-5 mr-2" /> Challenges Faced</p>
                <p>{project.challenges}</p>
              </div>

              <div>
                <p className="font-semibold text-lg text-[#C889B5] flex items-center mb-2"><Star className="w-5 h-5 mr-2" /> Potential Improvements & Future Plans</p>
                <p>{project.futurePlans}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <AnimatedButton
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 w-full text-center py-3 shadow-md shadow-[#744B93]/40"
              >
                Live Link
              </AnimatedButton>
              <AnimatedBorderButton href={project.githubLink} className="flex-1 w-full">
                Client Repo
              </AnimatedBorderButton>
              {project.serverLink && (
                <AnimatedBorderButton href={project.serverLink} className="flex-1 w-full">
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

// Enhanced Hero Section with improved profile animation
const HeroSection = ({ scrollToSection }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="py-12 md:py-24 px-4 sm:px-8 lg:px-16 flex items-center justify-center min-h-screen relative z-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
          <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
              Hi, I'm <br /> <span className="text-[#744B93]">{PORTFOLIO_DATA.name}</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-medium text-[#C889B5] tracking-wide">
              {PORTFOLIO_DATA.designation}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              I turn creative ideas into robust, high-performance web applications. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start pt-4">
              <AnimatedButton
                href={getGoogleDocsDownloadUrl(PORTFOLIO_DATA.resumeLink)}
                download="Homayra_Binte_Harun_Heme_Resume.pdf"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </AnimatedButton>

              <div className="flex items-center gap-4">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 text-[#744B93] rounded-full shadow-md border-2 border-[#744B93] dark:border-[#C889B5] hover:bg-[#744B93] hover:text-white dark:hover:bg-[#C889B5] dark:hover:text-black hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <social.icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 mt-6 lg:mt-0 order-1 lg:order-2">
            <div className="group relative p-[10px] rounded-full shadow-2xl shadow-[#744B93]/40 overflow-hidden cursor-pointer transition-all duration-700 hover:scale-110 hover:shadow-[0_0_80px_rgba(116,75,147,0.8)]">
              <div
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#744B93_0%,#C889B5_25%,#744B93_50%,#C889B5_75%,#744B93_100%)] opacity-100 blur-[2px]"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 0.05s linear'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#744B93]/20 to-[#C889B5]/20 animate-pulse-slow rounded-full"></div>
              <img
                src={PORTFOLIO_DATA.photoUrl}
                alt="Professional Profile"
                className="relative z-10 w-full h-auto rounded-full object-cover border-4 border-white dark:border-gray-800 transition-all duration-700 group-hover:scale-105 group-hover:border-[#C889B5]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- APP COMPONENT ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

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

  // Smooth Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Modern smooth scroll with behavior smooth
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Navbar Component
  const Navbar = () => {
    const navItems = [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About Me' },
      { id: 'skills', label: 'Skills' },
      { id: 'education', label: 'Education' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ];

    const NavLink = ({ id, label }) => (
      <button
        onClick={() => scrollToSection(id)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === id
          ? 'bg-[#744B93] text-white shadow-[0_0_15px_rgba(116,75,147,0.5)]'
          : 'text-gray-700 dark:text-gray-200 hover:bg-[#744B93]/10 dark:hover:bg-gray-700/50 hover:text-[#744B93] dark:hover:text-[#C889B5]'
          }`}
      >
        {label}
      </button>
    );

    const isVisible = !isScrolled || scrollDirection === 'up' || isMenuOpen;

    return (
      <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <header className={`w-[95%] max-w-5xl transition-all duration-300 backdrop-blur-xl ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-xl border border-white/20 dark:border-gray-700/30' : 'bg-transparent border-transparent'} rounded-2xl`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5] cursor-pointer" onClick={() => scrollToSection('home')}>
                HEME.DEV
              </h1>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1">
                {navItems.map(item => <NavLink key={item.id} {...item} />)}
              </nav>

              <div className="flex items-center space-x-4">
                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-[#744B93] dark:text-[#C889B5] hover:bg-[#744B93]/10 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-lg text-[#744B93] dark:text-[#C889B5] hover:bg-[#744B93]/10 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-[#744B93]/20 dark:border-[#744B93]/40 shadow-2xl overflow-hidden">
              <nav className="p-4 space-y-2 flex flex-col">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${activeSection === item.id
                      ? 'bg-gradient-to-r from-[#744B93] to-[#C889B5] text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-[#744B93]/10 dark:hover:bg-gray-700'
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

  const AboutMeSection = () => (
    <Section id="about" title="About My Journey">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl shadow-xl border border-[#744B93]/20 dark:border-[#744B93]/40">
        <Reveal>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            {PORTFOLIO_DATA.about.intro}
          </p>
        </Reveal>
        <Reveal>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed border-l-4 border-[#744B93] pl-4 italic">
            <span className="font-semibold text-[#744B93]">My Programming Journey:</span> {PORTFOLIO_DATA.about.journey}
          </p>
        </Reveal>
        <Reveal>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-[#744B93]">Outside of Code:</span> {PORTFOLIO_DATA.about.hobbies}
          </p>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-xl font-bold text-[#C889B5] flex items-center">
            Ready to collaborate! <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 hover:translate-x-1" />
          </p>
        </Reveal>
      </div>
    </Section>
  );

  const SkillsSection = () => (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.skills.map((skillGroup) => (
          <Reveal key={skillGroup.category}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-t-4 border-[#744B93] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <skillGroup.icon className="w-8 h-8 text-[#744B93] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {skillGroup.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skillGroup.list.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#744B93] transition-colors duration-200">
                    <span className="w-2 h-2 bg-[#C889B5] rounded-full mr-3 animate-pulse"></span>
                    {skill}
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
    <Section id="education" title="Educational Qualification">
      <div className="relative space-y-8 md:space-y-12">
        {PORTFOLIO_DATA.education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row relative">
            <div className={`hidden md:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#744B93]/20 to-[#C889B5]/20 ${index === PORTFOLIO_DATA.education.length - 1 ? 'h-1/2' : ''}`}></div>

            <div className="md:w-1/12 flex justify-center relative z-10 pt-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full flex items-center justify-center shadow-md animate-pulse">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="md:w-11/12 pl-0 md:pl-12 pt-4 md:pt-0">
              <Reveal>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#744B93]/10 dark:border-[#744B93]/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-[#744B93]">{edu.degree}</h3>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{edu.institution}</p>
                  <p className="text-sm font-semibold text-[#C889B5] mb-1">{edu.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{edu.details}</p>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );

  const ExperienceSection = () => (
    <Section id="experience" title="Professional Experience">
      <div className="relative space-y-8 md:space-y-12">
        {PORTFOLIO_DATA.experience.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row relative">
            <div className={`hidden md:block absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#744B93]/20 to-[#C889B5]/20 ${index === PORTFOLIO_DATA.experience.length - 1 ? 'h-1/2' : ''}`}></div>

            <div className="md:w-1/12 flex justify-center relative z-10 pt-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full flex items-center justify-center shadow-md animate-pulse">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="md:w-11/12 pl-0 md:pl-12 pt-4 md:pt-0">
              <Reveal>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#744B93]/10 dark:border-[#744B93]/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <p className="text-sm font-semibold text-[#C889B5] mb-1">{exp.period}</p>
                  <h3 className="text-2xl font-bold text-[#744B93]">{exp.title}</h3>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );

  const ProjectsSection = () => (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <Reveal key={project.id}>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group border border-[#744B93]/10 dark:border-[#744B93]/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="bg-white text-[#744B93] p-2 rounded-full hover:bg-[#744B93] hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <Zap size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3 flex-shrink-0">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-[#744B93]/10 text-[#744B93] text-xs font-semibold px-2 py-1 rounded-md hover:bg-[#744B93]/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 truncate flex-shrink-0">{project.name}</h3>
                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6">
                    {project.description}
                  </p>
                </div>
                <AnimatedBorderButton
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-auto"
                >
                  View Details
                </AnimatedBorderButton>
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
        <div className="flex items-center space-x-5 p-5 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#744B93]/10 dark:border-[#744B93]/30 shadow-sm hover:shadow-xl hover:border-[#744B93]/30 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 dark:from-[#744B93]/20 dark:to-[#C889B5]/20 rounded-2xl flex items-center justify-center text-[#744B93] group-hover:from-[#744B93] group-hover:to-[#C889B5] group-hover:text-white transition-all duration-300 shadow-inner">
            <Icon size={28} className="transition-all duration-300 group-hover:scale-110" />
          </div>
          <div className="flex-grow">
            <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 mb-0.5 tracking-wide uppercase">{title}</p>
            {href ? (
              <a href={href} className="text-lg font-bold text-gray-900 dark:text-gray-100 hover:text-[#744B93] transition-colors break-all">
                {value}
              </a>
            ) : (
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100 break-all">{value}</p>
            )}
          </div>
        </div>
      </Reveal>
    );

    return (
      <Section id="contact" title="Get In Touch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactInfo icon={Mail} title="Email Me" value={PORTFOLIO_DATA.email} href={`mailto:${PORTFOLIO_DATA.email}`} />
              <ContactInfo icon={Phone} title="Call Me" value={PORTFOLIO_DATA.phone} href={`tel:${PORTFOLIO_DATA.phone}`} />
              <ContactInfo icon={MessageCircle} title="WhatsApp" value={PORTFOLIO_DATA.phone} href={`https://wa.me/${PORTFOLIO_DATA.phone.replace(/[^0-9]/g, '')}`} />
            </div>

            <div className="pt-6 border-t border-[#744B93]/20">
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Connect on Social Media</h4>
              <div className="flex flex-wrap gap-4">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <Reveal key={social.name}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-[#744B93] rounded-2xl shadow-md border border-[#744B93]/10 hover:border-[#744B93] hover:bg-gradient-to-r hover:from-[#744B93] hover:to-[#C889B5] hover:text-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon size={26} className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <Reveal>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#744B93]/10 dark:border-[#744B93]/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#744B93]/40 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#744B93]/40 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#744B93]/40 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-[#744B93]/20 dark:border-[#744B93]/40 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#744B93] focus:border-transparent transition-all backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100/80 dark:bg-green-900/80 backdrop-blur-sm text-green-700 dark:text-green-300 rounded-lg text-center">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100/80 dark:bg-red-900/80 backdrop-blur-sm text-red-700 dark:text-red-300 rounded-lg text-center">
                    ✗ Failed to send message. Please try again later.
                  </div>
                )}

                <div className="pt-2">
                  <AnimatedButton
                    type="submit"
                    className={`w-full py-3 shadow-lg shadow-[#744B93]/40 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
    <footer className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-sm py-8 px-4 sm:px-8 lg:px-16 border-t border-[#744B93]/10 dark:border-[#744B93]/20 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Homayra Heme. All rights reserved. | Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );

  return (
    <AnimationContext.Provider value={{ animationsEnabled: true }}>
      <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden relative ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        {/* Enhanced Floating Background Video */}
        <BackgroundVideo />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <CursorTrail />

          <main className="pt-16">
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
          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
            scroll-padding-top: 100px;
          }
          
          /* Remove scroll blinking */
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Smooth scrollbar */
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
          
          /* Animations */
          @keyframes gradient-xy {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient-xy {
            background-size: 400% 400%;
            animation: gradient-xy 3s ease infinite;
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          
          @keyframes float-medium {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(-15px); }
          }
          
          @keyframes float-fast {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(5px); }
          }
          
          @keyframes float-very-slow {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          
          @keyframes float-particle {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(10px, -15px); }
            50% { transform: translate(20px, 0); }
            75% { transform: translate(10px, 15px); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }
          
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
          
          .animate-float-medium {
            animation: float-medium 6s ease-in-out infinite;
          }
          
          .animate-float-fast {
            animation: float-fast 4s ease-in-out infinite;
          }
          
          .animate-float-very-slow {
            animation: float-very-slow 12s ease-in-out infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          /* Prevent layout shift */
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </AnimationContext.Provider>
  );
};

export default App;