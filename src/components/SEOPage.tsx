import Link from 'next/link';

interface SEOPageProps {
  title: string;
  intro: string;
  sections: { heading: string; content: string }[];
  faqs: { q: string; a: string }[];
}

export default function SEOPage({ title, intro, sections, faqs }: SEOPageProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(175deg, #1a1e2e 0%, #262d3f 40%, #2a3328 100%)',
      color: 'rgba(255,255,255,0.85)',
      fontFamily: "'Nunito Sans', sans-serif",
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '60px 20px' }}>
        <nav style={{ marginBottom: '40px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px' }}>
            ← Back to ThoughtShredder
          </Link>
        </nav>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 600,
          lineHeight: 1.2,
          marginBottom: '20px',
          color: 'rgba(255,255,255,0.92)',
        }}>
          {title}
        </h1>

        <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '48px' }}>
          {intro}
        </p>

        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: 600,
              marginBottom: '14px',
              color: 'rgba(255,255,255,0.85)',
            }}>
              {s.heading}
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)' }}>
              {s.content}
            </p>
          </section>
        ))}

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', margin: '40px 0' }}>
          <p style={{ fontSize: '20px', fontFamily: "'Cormorant Garamond', serif", marginBottom: '20px', color: 'rgba(255,255,255,0.7)' }}>
            Ready to let go?
          </p>
          <Link href="/" style={{
            display: 'inline-block', padding: '14px 36px', borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(80,90,110,0.6), rgba(120,60,30,0.5))',
            color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 600,
            border: '1px solid rgba(255,255,255,0.1)',
          }}>
            Destroy a thought now →
          </Link>
        </div>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section style={{ marginTop: '48px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(22px, 3.5vw, 32px)',
              fontWeight: 600,
              marginBottom: '28px',
              color: 'rgba(255,255,255,0.85)',
            }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: 'rgba(255,255,255,0.8)' }}>
                  {f.q}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                  {f.a}
                </p>
              </div>
            ))}
          </section>
        )}

        <footer style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
          <p>ThoughtShredder · No data stored. Ever.</p>
        </footer>
      </div>
    </div>
  );
}
