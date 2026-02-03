import React from 'react';
import { useInView } from 'react-intersection-observer';

const Reveal = ({
    children,
    threshold = 0.1,
    className = "",
    delay = 0,
    direction = "up", // up, down, left, right, scale
    duration = 700
}) => {
    const { ref, inView } = useInView({
        threshold,
        triggerOnce: true,
    });

    const getInitialStyles = () => {
        switch (direction) {
            case "up": return "translate-y-12 opacity-0";
            case "down": return "-translate-y-12 opacity-0";
            case "left": return "translate-x-12 opacity-0";
            case "right": return "-translate-x-12 opacity-0";
            case "scale": return "scale-90 opacity-0";
            default: return "translate-y-12 opacity-0";
        }
    };

    const getInViewStyles = () => {
        switch (direction) {
            case "scale": return "scale-100 opacity-100";
            default: return "translate-y-0 translate-x-0 opacity-100";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) will-change-transform ${inView ? getInViewStyles() : getInitialStyles()
                } ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${duration}ms`,
                backfaceVisibility: 'hidden'
            }}
        >
            {children}
        </div>
    );
};

export default Reveal;
