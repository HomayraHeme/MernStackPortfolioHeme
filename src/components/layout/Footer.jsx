import React from 'react';
import { PORTFOLIO_DATA } from '../../constants/data';

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

export default Footer;
