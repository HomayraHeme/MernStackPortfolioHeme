import React from 'react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { PORTFOLIO_DATA } from '../../constants/data';

const SkillsSection = () => (
    <Section id="skills" title="Technical Expertise" subtitle="Technologies I work with">
        <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#744B93]/20 to-[#C889B5]/20 hidden md:block"></div>

            {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
                <Reveal key={skillGroup.category} delay={index * 100}>
                    <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Card container - Full width on mobile, half on medium+ */}
                        <div className="w-full md:w-1/2">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl mx-auto w-full max-w-md sm:max-w-lg md:max-w-none">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-xl flex items-center justify-center">
                                        <skillGroup.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#744B93] dark:text-[#C889B5]" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {skillGroup.category}
                                    </h3>
                                </div>
                                <ul className="space-y-3 sm:space-y-4">
                                    {skillGroup.list.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#744B93] dark:hover:text-[#C889B5] transition-colors duration-200 group">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gradient-to-r from-[#744B93]/20 to-[#C889B5]/20 rounded-full text-[#744B93] dark:text-[#C889B5] group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base">
                                                {skill.icon}
                                            </div>
                                            <span className="text-base sm:text-lg font-medium">{skill.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Center dot connector - Hidden on mobile */}
                        <div className="hidden md:flex w-12 h-12 bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full items-center justify-center relative z-10">
                            <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full"></div>
                        </div>

                        {/* Empty space for desktop layout */}
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                </Reveal>
            ))}
        </div>
    </Section>
);

export default SkillsSection;