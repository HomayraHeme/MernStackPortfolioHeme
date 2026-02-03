import React from 'react';
import { GraduationCap } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { PORTFOLIO_DATA } from '../../constants/data';

const EducationSection = () => (
    <Section id="education" title="Education" subtitle="My academic journey">
        <div className="max-w-6xl mx-auto">
            {PORTFOLIO_DATA.education.map((edu, index) => (
                <Reveal key={index} delay={index * 100}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-2xl flex items-center justify-center">
                                <GraduationCap className="w-8 h-8 text-[#744B93] dark:text-[#C889B5]" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                                <p className="text-xl text-[#744B93] dark:text-[#C889B5] font-medium">{edu.institution}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#744B93]/10 to-[#C889B5]/10 rounded-full text-sm font-medium text-[#744B93] dark:text-[#C889B5]">
                                {edu.period}
                            </div>
                        </div>
                        {edu.details && (
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{edu.details}</p>
                        )}
                    </div>
                </Reveal>
            ))}
        </div>
    </Section>
);

export default EducationSection;
