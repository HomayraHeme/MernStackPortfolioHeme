import React from 'react';
import { Zap, Globe, Github, Code, Star, LayoutList, X } from 'lucide-react';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import { AnimatedButton, AnimatedBorderButton } from '../ui/AnimatedButton';
import { PORTFOLIO_DATA } from '../../constants/data';

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

const ProjectsSection = ({ setSelectedProject }) => (
    <Section id="projects" title="Featured Projects" subtitle="My recent work">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

export { ProjectsSection, ProjectDetailModal };
