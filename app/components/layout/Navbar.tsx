export function Navbar() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@300;400;500&display=swap');
            `}</style>

            {/* Standard full-width navbar, flush to the top */}
            <nav className="w-full shrink-0 flex items-center justify-between h-12 sm:h-14 px-6 sm:px-12 bg-[#111110] border-b border-white/10 z-50 relative">
                {/* Wordmark */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 transition-transform group-hover:scale-110">
                        <rect x="0" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.9" />
                        <rect x="8" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.3" />
                        <rect x="0" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.3" />
                        <rect x="8" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.1" />
                    </svg>
                    <span className="font-['Playfair_Display'] font-bold text-white/90 text-[14px] sm:text-[15px] tracking-wide mt-[2px]">
                        Magic Keyboard
                    </span>
                </div>

                {/* Right Side */}
                <div className="hidden sm:flex items-center gap-3 font-['Outfit'] font-light text-[10px] tracking-[0.16em] uppercase text-white/40">
                    <span className="hover:text-white/80 transition-colors cursor-pointer">Next.js</span>
                    <span className="opacity-30">·</span>
                    <span className="hover:text-white/80 transition-colors cursor-pointer">Tailwind</span>
                </div>
            </nav>
        </>
    );
}