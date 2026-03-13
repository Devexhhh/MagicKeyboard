import { Keyboard } from "./components/keyboard/Keyboard";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-cyan-300 selection:text-black">
      <Navbar />
      <main
        className="relative
      min-h-screen
      flex items-center justify-center
      overflow-hidden

      bg-zinc-100
      bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)]
      bg-size-[32px_32px]

      before:content-['']
      before:absolute
      before:inset-0
      before:pointer-events-none
      before:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0.5)_100%)]
      "
      >
        <div className="w-full flex justify-center">
          <div
            className="
          origin-center
          scale-[0.45]
          sm:scale-[0.65]
          md:scale-[0.85]
          lg:scale-100
        "
          >
            <Keyboard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}