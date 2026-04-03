export function Footer() {
    return (
        <footer className="w-full h-12 sm:h-14 shrink-0 flex items-center justify-between px-6 sm:px-12 relative z-10 bg-[#161617]">

            {/* Elegant fading gradient top border adapted for the dark background */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="group cursor-pointer">
                <span className="font-['Outfit'] font-light text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#F5F5F7]/40 group-hover:text-[#F5F5F7]/90 transition-colors duration-500">
                    © {new Date().getFullYear()} Devex
                </span>
            </div>

            <div className="hidden sm:block group cursor-pointer">
                <span className="font-['Outfit'] font-light text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#F5F5F7]/40 group-hover:text-[#F5F5F7]/90 transition-colors duration-500">
                    Magic Keyboard UI
                </span>
            </div>

        </footer>
    );
}