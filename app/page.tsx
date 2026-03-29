export default function Home() {
  return (
    <main style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif",
      background: "#0a0a0a",
      color: "#ffffff"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        NIOEZE
      </h1>

      <p style={{ maxWidth: "500px", textAlign: "center", opacity: 0.7 }}>
        Human-centered design, AI, education, branding, and digital systems built with clarity and long-term thinking.
      </p>
    </main>
  );
}
