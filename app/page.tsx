export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      minHeight: '100vh', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Welcome to NIOEZE
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>
          Human-centered design, AI, education, branding, and digital solutions 
          built with clarity and long-term thinking
        </p>
      </div>
    </main>
  );
}
