export function Navbar() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@300;400;500&display=swap');
            `}</style>

            {/* Apple-style premium dark navigation bar */}
            <nav className="w-full shrink-0 flex items-center justify-between h-12 sm:h-14 px-6 sm:px-12 bg-[#161617]/95 backdrop-blur-md border-b border-white/5 z-50 relative transition-all duration-300">

                {/* Wordmark & Logo */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        {/* Subtle logo glow on hover */}
                        <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="relative z-10">
                            <rect x="0" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.95" />
                            <rect x="8" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.4" />
                            <rect x="0" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.4" />
                            <rect x="8" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.15" />
                        </svg>
                    </div>
                    <span className="font-['Playfair_Display'] font-bold text-[#F5F5F7] text-[14px] sm:text-[15px] tracking-wide mt-[2px] group-hover:text-white transition-colors duration-300">
                        Magic Keyboard
                    </span>
                </div>

                {/* Right Side Links */}
                <div className="hidden sm:flex items-center gap-6 font-['Outfit'] font-light text-[10px] tracking-[0.18em] uppercase text-[#F5F5F7]/50">
                    <span className="hover:text-white transition-colors duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300 ease-out">
                        Next.js
                    </span>

                    {/* Minimalist dot separator */}
                    <span className="w-[3px] h-[3px] rounded-full bg-white/20"></span>

                    <span className="hover:text-white transition-colors duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300 ease-out">
                        Tailwind
                    </span>
                </div>
            </nav>
        </>
    );
}