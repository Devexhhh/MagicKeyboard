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
        <div className="w-full flex justify-center items-center px-2">
          <div
            className="
    origin-center
    [zoom:0.29]
    sm:[zoom:0.34]
    md:[zoom:0.39]
    lg:[zoom:0.69]
    xl:[zoom:0.85]
    2xl:[zoom:1]
    3xl:[zoom:1.1]
    4xl:[zoom:1.3]
    5xl:[zoom:1.6]
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