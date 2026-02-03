import React from 'react';

// Animated Neon Button Component
export const AnimatedButton = ({ children, onClick, className = "", href, download, target, rel, type = "button" }) => {
    const baseClass = `
    relative group overflow-hidden px-6 sm:px-8 py-3 rounded-xl font-bold text-white transition-all duration-300
    shadow-lg hover:shadow-xl
    scale-100 hover:scale-105 active:scale-95
  `;

    const buttonContent = (
        <>
            <div className="absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 -z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <a href={href} download={download} target={target} rel={rel} onClick={onClick} className={`${baseClass} ${className}`}>
                {buttonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseClass} ${className}`} type={type}>
            {buttonContent}
        </button>
    );
};

// Animated Border Button (for Repos)
export const AnimatedBorderButton = ({ children, href, onClick, className = "", variant = "default" }) => {
    const baseClasses = `relative group flex items-center justify-center overflow-hidden rounded-xl p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 ${className}`;

    const content = (
        <>
            <div className={`absolute inset-0 bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy ${variant === "outline" ? 'opacity-30' : 'opacity-70'} group-hover:opacity-100`} />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] px-6 py-3 text-sm font-bold backdrop-blur-3xl transition-colors
        ${variant === "outline"
                    ? 'bg-transparent text-[#744B93] dark:text-[#C889B5] border border-[#744B93]/30 dark:border-[#C889B5]/30 hover:bg-[#744B93]/5 dark:hover:bg-[#C889B5]/5'
                    : 'bg-white/90 dark:bg-gray-900/90 text-[#744B93] dark:text-[#C889B5] hover:bg-white dark:hover:bg-gray-800'
                }`}>
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
            >
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {content}
        </button>
    );
};
