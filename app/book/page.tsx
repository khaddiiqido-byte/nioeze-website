export default function BookPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '920px', margin: '0 auto', color: '#1E293B' }}>
      <h1 style={{ color: '#0B3D91', fontSize: '2.25rem', marginBottom: '0.5rem' }}>Reserve Your Digital Support Session</h1>
      <p style={{ marginBottom: '1.5rem' }}>Select your preferred session type and share a date/time that works for you. We will follow up via WhatsApp or email.</p>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ borderRadius: '14px', background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h3>Quick Tech Setup</h3>
          <p>15 mins - fast onboarding to tools and account setup</p>
        </div>
        <div style={{ borderRadius: '14px', background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h3>Professional CV Review</h3>
          <p>30 mins - CV optimization and feedback for current job market</p>
        </div>
        <div style={{ borderRadius: '14px', background: '#F8FAFC', border: '1px solid #CBD5E1', padding: '1rem' }}>
          <h3>Full Digital Consultation</h3>
          <p>60 mins - strategy, planning, and execution roadmap</p>
        </div>
      </section>

      <form style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Preferred session type
          <select style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #CBD5E1' }}>
            <option>Quick Tech Setup (15 mins)</option>
            <option>Professional CV Review (30 mins)</option>
            <option>Full Digital Consultation (60 mins)</option>
          </select>
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Preferred date/time
          <input type="datetime-local" style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          Contact details (WhatsApp/email)
          <input type="text" placeholder="e.g. +234 80XXXX or name@example.com" style={{ padding: '0.6rem', borderRadius: '8px', border: '1px solid #CBD5E1' }} />
        </label>
        <button type="button" style={{ background: '#0B3D91', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.75rem 1rem', cursor: 'pointer' }}>Send Booking Request</button>
      </form>

      <aside style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '1rem' }}>
        <p style={{ fontWeight: '600' }}>Verified Business Account</p>
        <img src="/3d-mascot-placeholder.png" alt="3D mascot" style={{ maxWidth: '180px' }} />
      </aside>
    </main>
  );
}