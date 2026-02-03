import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = ({ activeSection, isDarkMode, toggleDarkMode, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
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
            <header className="w-full backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 shadow-xl border-b border-white/20 dark:border-gray-700/30 lg:px-7">
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

export default Navbar;
