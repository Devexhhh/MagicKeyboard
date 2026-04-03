export function Footer() {
    return (
        <footer className="w-full h-10 sm:h-12 shrink-0 flex items-center justify-between px-6 sm:px-12 border-t border-neutral-200/60 bg-transparent relative z-10">
            <span className="font-['Outfit'] font-light text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-neutral-400">
                © {new Date().getFullYear()} Devex
            </span>
            <span className="hidden sm:block font-['Outfit'] font-light text-[10px] tracking-[0.14em] uppercase text-neutral-400">
                Magic Keyboard UI
            </span>
        </footer>
    );
}