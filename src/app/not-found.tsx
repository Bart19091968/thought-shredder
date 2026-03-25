import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(175deg, #1a1e2e 0%, #262d3f 50%, #2a3328 100%)',
      color: 'rgba(255,255,255,0.85)',
      fontFamily: "'Nunito Sans', sans-serif",
      textAlign: 'center',
      padding: '20px',
    }}>
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>🕳️</div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(28px, 5vw, 48px)',
        fontWeight: 600,
        marginBottom: '16px',
      }}>
        This page has been destroyed.
      </h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', marginBottom: '32px' }}>
        It no longer exists. Just like your bad thoughts should.
      </p>
      <Link href="/" style={{
        padding: '14px 36px',
        borderRadius: '100px',
        background: 'linear-gradient(135deg, rgba(80,90,110,0.6), rgba(120,60,30,0.5))',
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 600,
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        Destroy a thought instead →
      </Link>
    </div>
  );
}
