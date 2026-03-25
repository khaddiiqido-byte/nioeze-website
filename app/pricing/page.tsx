const tiers = [
  { name: 'Digital Tools & Automation', price: 'Custom', desc: 'Automate workflows and build efficient systems.' },
  { name: 'Branding & Creative Services', price: 'Starting at ₦120k', desc: 'Design systems and visuals that connect.' },
  { name: 'AI Guidance & Training', price: 'From ₦80k', desc: 'Hands-on sessions for practical AI adoption.' },
  { name: 'Business Setup & Systems', price: 'From ₦100k', desc: 'Process and operations strategy for remote teams.' },
  { name: 'Education & Resources', price: 'Membership model', desc: 'NIOEZE Academy courses and structured learning paths.' },
];

export default function PricingPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto', color: '#1E293B' }}>
      <h1 style={{ color: '#0B3D91', fontSize: '2.25rem', marginBottom: '0.75rem' }}>Pricing</h1>
      <p style={{ marginBottom: '1.5rem' }}>Transparent pricing with flexible tier options and custom project quotes.</p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {tiers.map((tier) => (
          <article key={tier.name} style={{ borderRadius: '14px', background: 'rgba(255,255,255,0.75)', border: '1px solid #CBD5E1', padding: '1rem' }}>
            <h3 style={{ color: '#0B3D91' }}>{tier.name}</h3>
            <p style={{ fontWeight: 'bold', margin: '0.25rem 0' }}>{tier.price}</p>
            <p style={{ color: '#475569' }}>{tier.desc}</p>
            <button style={{ marginTop: '0.8rem', background: '#0B3D91', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.55rem 0.8rem', cursor: 'pointer' }}>Contact on WhatsApp</button>
          </article>
        ))}
      </section>

      <p style={{ fontWeight: '600', color: '#0B3D91' }}>Verified Business Account</p>
    </main>
  );
}