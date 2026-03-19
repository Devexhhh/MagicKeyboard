export function Footer() {
    return (
        <>
            <style>{`
        .ft-right { display: none; }
        @media (min-width: 480px) { .ft-right { display: block; } }
      `}</style>

            <footer
                style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 300,
                    height: "44px",
                    background: "#111110",
                    borderTop: "1px solid rgba(255,255,255,0.055)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 clamp(1rem, 4vw, 2.5rem)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.20)",
                }}
            >
                <span>© {new Date().getFullYear()} Devex</span>
                <span className="ft-right">Magic Keyboard UI</span>
            </footer>
        </>
    );
}