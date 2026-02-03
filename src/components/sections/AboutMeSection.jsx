import React from 'react';
import { Users, Zap, Star } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { PORTFOLIO_DATA } from '../../constants/data';

const AboutMeSection = () => (
    <Section id="about" title="About Me" subtitle="My journey in web development">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal direction="right">
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

            <Reveal delay={200} direction="left">
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

export default AboutMeSection;
