export default function AboutPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '960px', margin: '0 auto', color: '#1E293B' }}>
      <h1 style={{ color: '#0B3D91', fontSize: '2.25rem', marginBottom: '1rem' }}>About NIOEZE</h1>
      <section style={{ marginBottom: '2rem', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)', padding: '1.4rem' }}>
        <h2 style={{ color: '#102A43' }}>Our Story</h2>
        <p>
          NIOEZE began with a simple belief: digital products should feel human, clear, and purposeful. We design
          with empathy, build with discipline, and support creators and founders who want bold ideas executed
          without the noise.
        </p>
      </section>

      <section style={{ marginBottom: '2rem', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(15, 23, 42, 0.12)', borderRadius: '16px', padding: '1.25rem' }}>
        <h3 style={{ color: '#0B3D91' }}>Mission</h3>
        <p>Empower thoughtful digital transformation through human-centered design, responsible AI, and practical education.</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        <article style={{ borderRadius: '14px', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h4>Empowerment</h4>
          <p>We make technology accessible for everyday creators and ambitious teams.</p>
        </article>
        <article style={{ borderRadius: '14px', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h4>Ethical Technology</h4>
          <p>Transparent processes and responsible data use are core to our work.</p>
        </article>
        <article style={{ borderRadius: '14px', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h4>Personal Agency</h4>
          <p>Clients get tools they can own and evolve long-term.</p>
        </article>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Who We Serve</h3>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.1rem' }}>
          <li>Entrepreneurs building impact-focused digital products</li>
          <li>Small businesses needing approachable systems and automation</li>
          <li>Creators seeking growth-focused brand design and education</li>
        </ul>
      </section>

      <section style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
        <h3>Call to Action</h3>
        <p>Ready to move from idea to momentum? <strong>Contact us via WhatsApp</strong> or book a session from the Services page.</p>
      </section>
    </main>
  );
}