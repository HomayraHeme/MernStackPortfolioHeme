import React from 'react';
import Reveal from './Reveal';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-4 sm:px-8 lg:px-16 flex items-center justify-center scroll-mt-20 ${className}`}
        >
            <div className="w-full max-w-6xl relative z-10">
                <Reveal>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#744B93] to-[#C889B5]">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
                        )}
                    </div>
                </Reveal>
                {children}
            </div>
        </section>
    );
};

export default Section;
