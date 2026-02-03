import React from 'react';
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

// Enhanced Floating Background with Glassmorphism
const BackgroundEffect = () => {
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

export default BackgroundEffect;
