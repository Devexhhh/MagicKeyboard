export function Footer() {
    return (
        <footer
            className="
      relative
      w-full
      h-25
      flex items-center justify-center
      text-sm
      font-(--font-funnel)
      

      bg-zinc-900 text-white

      bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
      bg-size-[50px_50px]

      border-t border-white/10
      "
        >
            <p className="text-xl tracking-tighter text-zinc-300">
                © {new Date().getFullYear()} Devex — Magic Keyboard UI
            </p>
        </footer >
    );
}