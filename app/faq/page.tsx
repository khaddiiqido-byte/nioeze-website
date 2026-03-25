const faqs = [
  { q: 'What services does NIOEZE offer?', a: 'Design, AI tools, branding, digital systems, and structured learning via NIOEZE Academy.' },
  { q: 'How do I book a consultation?', a: 'Use the Book a Session page to request a time, then we confirm via WhatsApp or email within 24 hours.' },
  { q: 'Can I reschedule my session?', a: 'Yes. Contact us at least 12 hours before the scheduled session to reschedule.' },
  { q: 'How does pricing work?', a: 'We provide transparent package options and custom quotes based on scope. WhatsApp for a fast quote.' },
  { q: 'How is data privacy handled?', a: 'We collect only what is required for support requests. Your info is never shared with third parties without consent.' },
  { q: 'What is NIOEZE Academy?', a: 'A learning program for people needing practical, accessible digital skills and workflow education.' },
];

export default function FAQPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '860px', margin: '0 auto', color: '#1E293B' }}>
      <h1 style={{ color: '#0B3D91', fontSize: '2.25rem', marginBottom: '0.75rem' }}>FAQ</h1>
      <p style={{ marginBottom: '1.5rem' }}>Find fast answers to common questions about services, pricing, onboarding, and support.</p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {faqs.map((faq) => (
          <article key={faq.q} style={{ borderRadius: '12px', border: '1px solid #CBD5E1', background: '#F8FAFC', padding: '1rem' }}>
            <h3 style={{ color: '#1D4ED8', marginBottom: '0.4rem' }}>{faq.q}</h3>
            <p style={{ color: '#475569', margin: 0 }}>{faq.a}</p>
          </article>
        ))}
      </section>
    </main>
  );
}