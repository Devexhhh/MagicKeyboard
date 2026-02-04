import { Keyboard } from "./components/keyboard/Keyboard";

export default function Home() {
  return (
    <main className="relative
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
    before:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10)_55%,rgba(0,0,0,0.5)_100%)]">
      <Keyboard />
    </main>
  );
}

