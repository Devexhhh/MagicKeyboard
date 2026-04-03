import { Keyboard } from "./components/keyboard/Keyboard";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <style>{`
        /* ── MAXIMIZED ZOOM LEVELS ── */
        .kb-zoom { zoom: 0.30; }
        @media (min-width: 380px)  { .kb-zoom { zoom: 0.40; } }
        @media (min-width: 480px)  { .kb-zoom { zoom: 0.55; } }
        @media (min-width: 640px)  { .kb-zoom { zoom: 0.70; } }
        @media (min-width: 768px)  { .kb-zoom { zoom: 0.90; } }
        @media (min-width: 1024px) { .kb-zoom { zoom: 1.20; } }
        @media (min-width: 1280px) { .kb-zoom { zoom: 1.45; } }
        @media (min-width: 1536px) { .kb-zoom { zoom: 1.70; } }

        /* Strict height fallbacks for laptops (wide but short screens) so the huge keyboard doesn't clip the footer */
        @media (max-height: 900px) and (min-width: 1280px) { .kb-zoom { zoom: 1.20 !important; } }
        @media (max-height: 800px) and (min-width: 1024px) { .kb-zoom { zoom: 0.95 !important; } }
        @media (max-height: 700px) and (min-width: 768px)  { .kb-zoom { zoom: 0.70 !important; } }
      `}</style>

      {/* 100dvh locks it to exactly one viewport height, overflow-hidden prevents all scrolling */}
      <div className="flex flex-col h-[100dvh] w-full overflow-hidden font-['Outfit'] bg-[#F9F8F6] text-neutral-900 selection:bg-neutral-200 relative">

        <Navbar />

        {/* ── Modern Dotted Background Pattern & Vignette ── */}
        <div className="absolute inset-0 top-12 sm:top-14 bg-[radial-gradient(#00000022_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-0" />
        <div className="absolute inset-0 top-12 sm:top-14 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,#F9F8F6_100%)] pointer-events-none z-0" />

        {/* Main content wrapper */}
        <main className="relative flex-1 flex flex-col items-center justify-between w-full h-full pt-4 sm:pt-6 pb-4 px-4 sm:px-6 z-10">

          {/* ── Typography (Top Section - Compressed to save space) ── */}
          <div className="shrink-0 flex flex-col items-center text-center animate-fade-in-up w-full">
            <p className="font-light text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-1">
              Apple Magic Keyboard
            </p>
            <h1 className="font-['Playfair_Display'] font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#111110] mb-1 max-w-3xl">
              Engineered for silence.
            </h1>
            <p className="font-['Playfair_Display'] italic text-base sm:text-lg md:text-xl text-neutral-500 mb-3 max-w-xl">
              Every keystroke, perfectly placed.
            </p>
            <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          {/* ── Keyboard Area (Middle Section) ── */}
          <div className="flex-1 flex items-center justify-center w-full min-h-0 relative group perspective-[1000px]">

            {/* Ambient Backlight / Glow - Expanded slightly to match bigger keyboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[55%] bg-white rounded-full blur-[70px] sm:blur-[100px] opacity-70 pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />

            {/* Ground Shadow */}
            <div className="absolute bottom-[2%] sm:bottom-[8%] left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-6 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(0,0,0,0.1)_0%,transparent_100%)] blur-md pointer-events-none" />

            {/* Keyboard Component */}
            <div className="kb-zoom origin-center relative transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
              <Keyboard />
            </div>
          </div>

          {/* ── Spec Strip (Bottom Section) ── */}
          <div className="shrink-0 flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-10 gap-y-2 mt-1 font-['Outfit'] font-light text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            {["Scissor Switch", "Backlit Keys", "Bluetooth 5.3", "USB-C"].map((spec, index, arr) => (
              <div key={spec} className="flex items-center gap-4 sm:gap-10">
                <span className="hover:text-neutral-600 transition-colors cursor-default">{spec}</span>
                {index < arr.length - 1 && (
                  <span className="hidden sm:inline text-neutral-300 text-[6px]">◆</span>
                )}
              </div>
            ))}
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}