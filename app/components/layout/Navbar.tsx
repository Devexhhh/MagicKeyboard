export function Navbar() {
    return (
        <nav
            className="
      relative
      w-full
      h-14
      flex items-center justify-between
      px-2 md:px-6
      font-(--font-funnel)

      bg-zinc-900 text-zinc-300

      bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-size-[20px_20px]

      border-b border-white/10
      "
        >
            <div className="font-medium sm:text-xl tracking-tighter">
                Magic Keyboard UI
            </div>

            <div className="text-sm opacity-80 tracking-tighter">
                Built with Next.js + Tailwind
            </div>
        </nav>
    );
}