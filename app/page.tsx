import { Keyboard } from "./components/keyboard/Keyboard";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

        .kb-zoom { zoom: 0.22; }
        @media (min-width: 380px)  { .kb-zoom { zoom: 0.27; } }
        @media (min-width: 480px)  { .kb-zoom { zoom: 0.34; } }
        @media (min-width: 640px)  { .kb-zoom { zoom: 0.40; } }
        @media (min-width: 768px)  { .kb-zoom { zoom: 0.50; } }
        @media (min-width: 1024px) { .kb-zoom { zoom: 0.68; } }
        @media (min-width: 1280px) { .kb-zoom { zoom: 0.80; } }
        @media (min-width: 1536px) { .kb-zoom { zoom: 0.94; } }

        .spec-strip { flex-wrap: wrap; justify-content: center; gap: 10px 18px; }
        @media (min-width: 640px) { .spec-strip { gap: 0 20px; flex-wrap: nowrap; } }

        .spec-diamond { display: none; }
        @media (min-width: 640px) { .spec-diamond { display: inline; } }

        .hero-main { padding: 48px 16px 40px; }
        @media (min-width: 640px) { .hero-main { padding: 56px 24px 48px; } }
        @media (min-width: 1024px) { .hero-main { padding: 72px 32px 64px; } }
      `}</style>

      <div style={{ fontFamily: "'Outfit', sans-serif" }} className="flex flex-col min-h-screen">
        <Navbar />

        <main
          className="hero-main relative flex-1 flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "#F4F2ED",
            backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.16) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          {/* Vignette */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 40%, #F4F2ED 100%)",
            }}
          />

          {/* ── Eyebrow ── */}
          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#a09b91",
              marginBottom: "clamp(12px, 2vw, 20px)",
            }}
          >
            Apple Magic Keyboard
          </p>

          {/* ── Headline ── */}
          <h1
            className="relative z-10 text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.65rem, 5vw, 3rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.015em",
              color: "#18170f",
              marginBottom: "clamp(8px, 1.2vw, 14px)",
              maxWidth: "min(560px, 90vw)",
            }}
          >
            Engineered for silence.
          </h1>

          {/* ── Italic subline ── */}
          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(0.9rem, 2.2vw, 1.4rem)",
              lineHeight: 1.4,
              color: "#7c776d",
              marginBottom: "clamp(20px, 3vw, 36px)",
              maxWidth: "min(440px, 88vw)",
            }}
          >
            Every keystroke, perfectly placed.
          </p>

          {/* ── Hairline ── */}
          <div
            className="relative z-10"
            style={{
              width: "36px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #c4bfb6, transparent)",
              marginBottom: "clamp(24px, 4vw, 44px)",
            }}
          />

          {/* ── Keyboard ── */}
          <div className="relative z-10 w-full flex justify-center items-center">
            {/* Ground shadow */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "min(680px, 88vw)",
                height: "28px",
                background:
                  "radial-gradient(ellipse 75% 100% at 50% 50%, rgba(0,0,0,0.12) 0%, transparent 100%)",
                filter: "blur(10px)",
              }}
            />
            <div className="kb-zoom origin-center">
              <Keyboard />
            </div>
          </div>

          {/* ── Spec strip ── */}
          <div
            className="spec-strip relative z-10 flex items-center"
            style={{
              marginTop: "clamp(24px, 4vw, 48px)",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: "9px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b0aca4",
            }}
          >
            {["Scissor Switch", "Backlit Keys", "Bluetooth 5.3", "USB-C"].map((s, i, arr) => (
              <span key={s} style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <span>{s}</span>
                {i < arr.length - 1 && (
                  <span className="spec-diamond" style={{ color: "#ccc9c2", fontSize: "7px" }}>
                    ◆
                  </span>
                )}
              </span>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}