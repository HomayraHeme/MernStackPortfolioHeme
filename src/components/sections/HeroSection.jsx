import React from 'react';
import { Sparkles, Download, Code } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { AnimatedButton, AnimatedBorderButton } from '../ui/AnimatedButton';
import { PORTFOLIO_DATA } from '../../constants/data';

// Enhanced Hero Section
const HeroSection = ({ scrollToSection }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-8 lg:px-16">
            <div className="w-full max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <Reveal className='pt-5' direction="down">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 backdrop-blur-sm text-[#744B93] dark:text-[#C889B5] text-sm font-medium ">
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

                        <Reveal delay={200} direction="up">
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
                        <Reveal delay={300} direction="left" duration={1000}>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-gradient-xy"></div>
                                <div className="relative p-2 bg-gradient-to-br from-white/20 to-white/5 dark:from-gray-800/20 dark:to-gray-800/5 backdrop-blur-xl rounded-full border border-white/20 dark:border-gray-700/30">
                                    <img
                                        src={PORTFOLIO_DATA.photoUrl}
                                        alt="Professional Profile"
                                        className="w-full h-auto rounded-full object-cover shadow-2xl"
                                    />
                                    <div className="absolute -bottom-[-20px] -right-[-5px] w-20 h-20 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-2xl flex items-center justify-center shadow-2xl">
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

export default HeroSection;
