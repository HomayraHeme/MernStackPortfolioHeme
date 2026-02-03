import React, { useState, useEffect, useCallback, createContext, useRef } from 'react';
import Lenis from 'lenis';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundEffect from './components/layout/BackgroundEffect';
import CursorTrail from './components/ui/CursorTrail';

import HeroSection from './components/sections/HeroSection';
import AboutMeSection from './components/sections/AboutMeSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import { ProjectsSection, ProjectDetailModal } from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

// Create context for animation control
export const AnimationContext = createContext({ animationsEnabled: true });

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle Modal Scroll Lock and Lenis State
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    }
  }, [selectedProject]);

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

  return (
    <AnimationContext.Provider value={{ animationsEnabled: true }}>
      <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden relative ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <BackgroundEffect />

        <div className="relative z-10">
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
            <ProjectsSection setSelectedProject={setSelectedProject} />
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