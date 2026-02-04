import React from 'react';

const Preloader = ({ isLoading, isDarkMode }) => {
    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-full'
                } ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
            <div className="relative flex flex-col items-center">
                {/* Animated Rings */}
                <div className="absolute inset-0 -m-8 flex items-center justify-center">
                    <div className={`w-24 h-24 border-t-2 border-[#744B93] rounded-full animate-spin ${isDarkMode ? 'opacity-40' : 'opacity-60'}`}></div>
                </div>
                <div className="absolute inset-0 -m-12 flex items-center justify-center">
                    <div className={`w-32 h-32 border-r-2 border-[#C889B5] rounded-full animate-spin transition-all duration-300 [animation-duration:3s] ${isDarkMode ? 'opacity-30' : 'opacity-50'}`}></div>
                </div>

                {/* Welcome Text */}
                <div className="relative overflow-hidden">
                    <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#744B93] via-[#C889B5] to-[#744B93] animate-gradient-xy tracking-tighter mb-2">
                        WELCOME
                    </h1>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#744B93] to-[#C889B5] animate-progress_bar"></div>
                </div>

                {/* Subtext */}
                <div className={`mt-4 flex items-center gap-2 font-medium tracking-widest text-xs uppercase transition-colors duration-300 ${isDarkMode ? 'text-[#C889B5] opacity-70' : 'text-[#744B93] opacity-90'} animate-pulse`}>
                    <span className="w-2 h-2 rounded-full bg-[#744B93] animate-ping"></span>
                    Homayra.Portfolio
                </div>
            </div>

            <style>{`
        @keyframes progress_bar {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
        .animate-progress_bar {
          animation: progress_bar 2s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Preloader;
