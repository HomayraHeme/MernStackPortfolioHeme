import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Trailing Cursor Logic
const useTrailingCursor = () => {
    const [dots, setDots] = useState([]);
    const mousePos = useRef({ x: 0, y: 0 });
    const dotsRef = useRef([]);

    useEffect(() => {
        const initialDots = Array.from({ length: 8 }, () => ({ x: 0, y: 0 }));
        dotsRef.current = initialDots;
        setDots(initialDots);

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        let animationFrame;
        const updateDots = () => {
            const newDots = [...dotsRef.current];
            newDots[0] = {
                x: newDots[0].x + (mousePos.current.x - newDots[0].x) * 0.4,
                y: newDots[0].y + (mousePos.current.y - newDots[0].y) * 0.4,
            };

            for (let i = 1; i < newDots.length; i++) {
                newDots[i] = {
                    x: newDots[i].x + (newDots[i - 1].x - newDots[i].x) * 0.35,
                    y: newDots[i].y + (newDots[i - 1].y - newDots[i].y) * 0.35,
                };
            }

            dotsRef.current = newDots;
            setDots(newDots);
            animationFrame = requestAnimationFrame(updateDots);
        };

        animationFrame = requestAnimationFrame(updateDots);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return dots;
};

const CursorTrail = () => {
    const dots = useTrailingCursor();

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden sm:block">
            {dots.map((dot, index) => (
                <div
                    key={index}
                    className="absolute bg-gradient-to-r from-[#744B93] to-[#C889B5] rounded-full transition-transform duration-150 ease-out"
                    style={{
                        left: dot.x,
                        top: dot.y,
                        width: `${10 - index * 1}px`,
                        height: `${10 - index * 1}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.7 - index * 0.08,
                    }}
                />
            ))}
        </div>
    );
};

export default CursorTrail;
