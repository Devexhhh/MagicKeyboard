export function Navbar() {
    return (
        <nav
            className="
      relative
      w-full
      h-20
      flex items-center justify-between
      px-15
      font-(--font-funnel)

      bg-zinc-900 text-zinc-300

      bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-size-[50px_50px]

      border-b border-white/10
      "
        >
            <div className="font-medium text-xl tracking-tighter">
                Magic Keyboard UI
            </div>

            <div className="text-sm opacity-80 tracking-tighter">
                Built with Next.js + Tailwind
            </div>
        </nav>
    );
}