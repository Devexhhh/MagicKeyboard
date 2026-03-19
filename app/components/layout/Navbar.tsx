export function Navbar() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@300;400&display=swap');
        .nb-right { display: none; }
        @media (min-width: 480px) { .nb-right { display: flex; } }
        .nb-wordmark-text { font-size: 13px; }
        @media (min-width: 640px) { .nb-wordmark-text { font-size: 15px; } }
      `}</style>

            <nav
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    height: "50px",
                    background: "#111110",
                    borderBottom: "1px solid rgba(255,255,255,0.055)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(1rem, 4vw, 2.5rem)",
                }}
            >
                {/* Wordmark */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                        <rect x="0" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.88" />
                        <rect x="8" y="0" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.28" />
                        <rect x="0" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.28" />
                        <rect x="8" y="8" width="6" height="6" rx="1.4" fill="white" fillOpacity="0.09" />
                    </svg>
                    <span
                        className="nb-wordmark-text"
                        style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.90)",
                            letterSpacing: "0.01em",
                        }}
                    >
                        Magic Keyboard
                    </span>
                </div>

                {/* Right — hidden on tiny screens */}
                <div
                    className="nb-right"
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 300,
                        fontSize: "10px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.20)",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <span>Next.js</span>
                    <span style={{ opacity: 0.4 }}>·</span>
                    <span>Tailwind</span>
                </div>
            </nav>
        </>
    );
}