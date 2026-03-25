'use client';

import { useState, useEffect, useRef } from 'react';
import { getStormBgUrl, getPeaceBgUrl } from './backgrounds';

const METHODS: Record<string, { id: string; name: string; icon: string; msg: string }> = {
  shredder: { id: 'shredder', name: 'Shred It', icon: '✂️', msg: 'Your thought has been shredded into nothing.' },
  fire: { id: 'fire', name: 'Burn It', icon: '🔥', msg: 'Gone with the fire. Only air remains.' },
  flush: { id: 'flush', name: 'Flush It', icon: '🚽', msg: 'Flushed away. It no longer exists.' },
};

const QUOTES = [
  'Some thoughts don\'t deserve storage.',
  'Let it pass.',
  'Nothing is saved. Everything is released.',
  'Destroy it gently.',
  'Watch it disappear.',
  'You are not your thoughts.',
  'Breathe in. Let go.',
  'Lighter already.',
];

const FAQ_ITEMS = [
  { q: 'Is my data stored anywhere?', a: 'Absolutely not. Your text, documents and photos are processed entirely in your browser. Nothing is ever sent to a server or saved. Once destroyed, it\'s truly gone.' },
  { q: 'What happens to uploaded files?', a: 'Files exist only temporarily in your browser\'s memory for the animation. They are never uploaded to any server and are discarded immediately after the destruction animation completes.' },
  { q: 'Is this a therapy tool?', a: 'No. This is a symbolic, playful ritual for releasing frustration. If you\'re struggling with persistent negative thoughts, please reach out to a mental health professional.' },
  { q: 'How does the counter work?', a: 'The counter tracks total destructions across all visitors. It\'s completely anonymous — we only store the number, nothing about what was destroyed or who destroyed it.' },
  { q: 'Can I use this on mobile?', a: 'Yes! The site is fully responsive and works beautifully on phones, tablets and desktops.' },
  { q: 'Why does destroying thoughts feel good?', a: 'Symbolic acts of release have been used in rituals across cultures for thousands of years. Writing something down and then destroying it can create a powerful sense of closure and lightness.' },
];

/* ── Sub-components ── */
function OdometerDigit({ digit }: { digit: number }) {
  const nums = [0,1,2,3,4,5,6,7,8,9];
  return (
    <div className="odometer-digit">
      <div className="odometer-digit-inner" style={{ transform: `translateY(${-digit * 52}px)` }}>
        {nums.map(n => <div key={n} className="odometer-num">{n}</div>)}
      </div>
    </div>
  );
}

function OdometerCounter({ count, bumping, dark }: { count: number; bumping: boolean; dark: boolean }) {
  const formatted = count.toLocaleString('en-US');
  const chars = formatted.split('');
  return (
    <div className="odometer-wrap fade-up">
      <div>
        <div className="odometer-label" style={{ color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(60,80,60,0.5)' }}>
          Thoughts destroyed
        </div>
        <div className={`odometer-digits ${bumping ? 'counter-bump' : ''}`}>
          {chars.map((ch, i) =>
            ch === ','
              ? <div key={`c-${i}`} className="odometer-comma" style={{ color: dark ? 'rgba(255,255,255,0.3)' : 'rgba(60,80,60,0.35)' }}>,</div>
              : <OdometerDigit key={`d-${i}`} digit={parseInt(ch, 10)} />
          )}
        </div>
      </div>
    </div>
  );
}

function AdZone({ label, dark }: { label: string; dark: boolean }) {
  return (
    <div className="ad-zone" style={{
      borderColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(60,80,60,0.15)',
      color: dark ? 'rgba(255,255,255,0.2)' : 'rgba(60,80,60,0.3)',
      background: dark ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.25)',
    }}>
      {/* Replace with real AdSense ad unit */}
      Ad Space · {label}
    </div>
  );
}

function TrustBadge({ dark }: { dark: boolean }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
      padding: '10px 20px', borderRadius: '100px',
      background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.4)',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(100,160,100,0.3)'}`,
      fontSize: '13px', color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(60,90,60,0.7)',
      maxWidth: 'fit-content', margin: '0 auto',
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      Nothing is stored. Everything is released.
    </div>
  );
}

function FAQSection({ dark }: { dark: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  const txt = dark ? 'rgba(255,255,255,0.85)' : '#3A5040';
  const sub = dark ? 'rgba(255,255,255,0.55)' : 'rgba(60,80,60,0.65)';
  const faint = dark ? 'rgba(255,255,255,0.25)' : 'rgba(60,80,60,0.3)';
  return (
    <div style={{ maxWidth: '680px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: 'clamp(24px,4vw,36px)', marginBottom: '32px', color: txt }}>
        Questions & Answers
      </h2>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${faint}`, padding: '18px 0' }}>
          <button onClick={() => setOpen(open === i ? null : i)} style={{
            background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: "'Nunito Sans', sans-serif", fontSize: '15px', fontWeight: 500, color: txt, padding: 0,
          }} aria-expanded={open === i}>
            {item.q}
            <span style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s', fontSize: '20px', color: faint }}>+</span>
          </button>
          {open === i && <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.7, color: sub }}>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

/* ── Main component ── */
export default function ThoughtDestroyer() {
  const [phase, setPhase] = useState<'input' | 'destroying' | 'done'>('input');
  const [inputType, setInputType] = useState<'text' | 'document' | 'photo' | null>(null);
  const [textVal, setTextVal] = useState('');
  const [fileName, setFileName] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [method, setMethod] = useState<typeof METHODS[string] | null>(null);
  const [counter, setCounter] = useState(0);
  const [bumping, setBumping] = useState(false);
  const [doneQuote, setDoneQuote] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load counter from API
  useEffect(() => {
    fetch('/api/counter').then(r => r.json()).then(d => setCounter(d.count)).catch(() => setCounter(8412));
  }, []);

  const dark = phase === 'input' || phase === 'destroying';
  const hasInput = inputType === 'text' ? textVal.trim().length > 0 : inputType != null;

  const displayContent = () => {
    if (inputType === 'text') return textVal.length > 120 ? textVal.slice(0, 120) + '…' : textVal;
    if (inputType === 'document') return `📄 ${fileName}`;
    return '';
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if (!f) return;
    setFileName(f.name); setInputType('document'); setPhotoPreview(null);
  };
  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]; if (!f) return;
    setPhotoPreview(URL.createObjectURL(f)); setInputType('photo'); setFileName('');
  };

  const destroy = (key: string) => {
    if (!hasInput) return;
    const m = METHODS[key];
    setMethod(m); setPhase('destroying');
    const dur: Record<string, number> = { shredder: 2800, fire: 3000, flush: 2500 };
    timerRef.current = setTimeout(async () => {
      try {
        const res = await fetch('/api/counter', { method: 'POST' });
        const data = await res.json();
        setCounter(data.count);
      } catch {
        setCounter(c => c + 1);
      }
      setBumping(true);
      setTimeout(() => setBumping(false), 500);
      setDoneQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
      setPhase('done');
    }, (dur[key] || 3000) + 400);
  };

  const reset = () => {
    setPhase('input'); setInputType(null); setTextVal(''); setFileName('');
    if (photoPreview) URL.revokeObjectURL(photoPreview);
    setPhotoPreview(null); setMethod(null);
  };

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (photoPreview) URL.revokeObjectURL(photoPreview);
  }, []);

  const txt = dark ? 'rgba(255,255,255,0.9)' : '#2D4A30';
  const sub = dark ? 'rgba(255,255,255,0.5)' : 'rgba(50,80,50,0.6)';
  const faint = dark ? 'rgba(255,255,255,0.25)' : 'rgba(50,80,50,0.35)';

  const renderInput = () => (
    <div className="fade-up" style={{ maxWidth: '740px', margin: '0 auto' }}>
      <div style={{ marginBottom: '16px' }}>
        <textarea value={textVal}
          onChange={(e) => { setTextVal(e.target.value); setInputType('text'); setFileName(''); setPhotoPreview(null); }}
          placeholder="Type what you want to destroy…" rows={3} maxLength={2000}
          style={{
            width: '100%', padding: '18px 20px', borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(12px)', fontSize: '16px', lineHeight: 1.6,
            fontFamily: "'Nunito Sans', sans-serif", color: 'rgba(255,255,255,0.9)',
            resize: 'vertical', minHeight: '100px', transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,255,255,0.06)'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
        />
        {textVal && <div style={{ textAlign: 'right', fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>{textVal.length}/2000</div>}
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '8px' }}>
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.txt,.rtf" onChange={handleFile} hidden />
        <button onClick={() => fileRef.current?.click()} style={{
          padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
          background: inputType === 'document' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
          cursor: 'pointer', fontSize: '13px', fontFamily: "'Nunito Sans', sans-serif",
          color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px',
        }}>📄 Upload a document</button>
        <input ref={photoRef} type="file" accept="image/*" onChange={handlePhoto} hidden />
        <button onClick={() => photoRef.current?.click()} style={{
          padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)',
          background: inputType === 'photo' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
          cursor: 'pointer', fontSize: '13px', fontFamily: "'Nunito Sans', sans-serif",
          color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: '8px',
        }}>📷 Upload a photo</button>
      </div>

      {inputType === 'document' && fileName && (
        <div className="fade-up" style={{ textAlign: 'center', padding: '8px', color: 'rgba(255,255,255,0.55)', fontSize: '14px' }}>📄 {fileName}</div>
      )}
      {inputType === 'photo' && photoPreview && (
        <div className="fade-up" style={{ textAlign: 'center', padding: '8px' }}>
          <img src={photoPreview} alt="Preview" style={{ maxWidth: '180px', maxHeight: '120px', borderRadius: '12px', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>
      )}

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px', flexWrap: 'wrap' }}>
        <button className="destroy-btn btn-shredder fade-up-d1" disabled={!hasInput} onClick={() => destroy('shredder')}
          style={{ background: 'linear-gradient(145deg, rgba(80,90,110,0.5), rgba(50,60,80,0.6))', backdropFilter: 'blur(8px)',
            boxShadow: hasInput ? '0 6px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)' : 'none',
            border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="btn-icon" style={{ fontSize: '52px', marginBottom: '10px' }}>✂️</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Shred It</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>Cut it to ribbons</div>
        </button>

        <button className="destroy-btn btn-fire fade-up-d2" disabled={!hasInput} onClick={() => destroy('fire')}
          style={{ background: 'linear-gradient(145deg, rgba(120,60,30,0.45), rgba(80,35,20,0.55))', backdropFilter: 'blur(8px)',
            boxShadow: hasInput ? '0 6px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,200,100,0.1)' : 'none',
            border: '1px solid rgba(255,150,50,0.12)' }}>
          <div className="btn-icon" style={{ fontSize: '52px', marginBottom: '10px' }}>🔥</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Burn It</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,200,150,0.45)', marginTop: '6px' }}>Watch it turn to ash</div>
        </button>

        <button className="destroy-btn btn-flush fade-up-d3" disabled={!hasInput} onClick={() => destroy('flush')}
          style={{ background: 'linear-gradient(145deg, rgba(40,80,90,0.45), rgba(25,55,65,0.55))', backdropFilter: 'blur(8px)',
            boxShadow: hasInput ? '0 6px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(100,200,220,0.08)' : 'none',
            border: '1px solid rgba(100,200,220,0.1)' }}>
          <div className="btn-icon" style={{ fontSize: '52px', marginBottom: '10px' }}>🚽</div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>Flush It</div>
          <div style={{ fontSize: '12px', color: 'rgba(150,220,230,0.45)', marginTop: '6px' }}>Swirl it down the drain</div>
        </button>
      </div>

      {!hasInput && (
        <p className="fade-up-d3" style={{ textAlign: 'center', marginTop: '18px', fontSize: '13px', color: 'rgba(255,255,255,0.25)', fontStyle: 'italic' }}>
          Type something or upload a file to unlock destruction
        </p>
      )}
    </div>
  );

  const renderDestroying = () => (
    <div style={{ textAlign: 'center', padding: '60px 20px', minHeight: '320px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className={`destroy-${method?.id}`} style={{
        maxWidth: '480px', width: '100%', padding: '32px', borderRadius: '16px',
        background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.08)', fontSize: '18px', lineHeight: 1.6,
        color: 'rgba(255,255,255,0.9)', wordBreak: 'break-word',
      }}>
        {inputType === 'photo' && photoPreview
          ? <img src={photoPreview} alt="" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', objectFit: 'cover' }} />
          : <span>{displayContent()}</span>}
      </div>
    </div>
  );

  const renderDone = () => (
    <div className="fade-up" style={{ textAlign: 'center', padding: '48px 20px' }}>
      <div style={{ fontSize: '52px', marginBottom: '20px' }}>{method?.icon}</div>
      <h2 style={{ fontSize: 'clamp(24px,4.5vw,36px)', marginBottom: '14px', color: '#2D4A30' }}>{method?.msg}</h2>
      <p className="fade-up-d1" style={{ color: 'rgba(50,80,50,0.6)', fontSize: '16px', fontStyle: 'italic', marginBottom: '40px' }}>
        &ldquo;{doneQuote}&rdquo;
      </p>
      <div className="fade-up-d2" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={reset} style={{
          padding: '14px 32px', borderRadius: '100px', border: 'none',
          background: 'linear-gradient(135deg, #5A9042, #78B060)',
          color: '#fff', fontSize: '15px', fontWeight: 600, cursor: 'pointer',
          fontFamily: "'Nunito Sans', sans-serif", boxShadow: '0 4px 20px rgba(90,144,66,0.35)',
        }}>Destroy another one</button>
        <button onClick={reset} style={{
          padding: '14px 32px', borderRadius: '100px',
          border: '1px solid rgba(90,144,66,0.25)', background: 'rgba(255,255,255,0.5)',
          color: 'rgba(50,80,50,0.7)', fontSize: '15px', cursor: 'pointer',
          fontFamily: "'Nunito Sans', sans-serif",
        }}>Take a breath ✨</button>
      </div>
    </div>
  );

  const stormBg = getStormBgUrl();
  const peaceBg = getPeaceBgUrl();

  return (
    <>
      {/* Backgrounds */}
      <div className="bg-layer bg-storm" style={{ backgroundImage: stormBg, opacity: dark ? 1 : 0 }} />
      <div className="bg-layer bg-peace" style={{ backgroundImage: peaceBg, opacity: dark ? 0 : 1 }} />
      {dark && <div className="rain" />}
      {dark && <div className="lightning-flash" />}
      {dark && <div className="storm-fog" />}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ padding: '16px 0 0' }}><AdZone label="Leaderboard · 728×90" dark={dark} /></div>

        <header style={{ padding: 'clamp(20px,4vh,40px) 0 16px' }}>
          <OdometerCounter count={counter} bumping={bumping} dark={dark} />
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 className="fade-up-d1" style={{
              fontSize: 'clamp(28px,5.5vw,52px)', lineHeight: 1.15, fontWeight: 600, letterSpacing: '-0.3px',
              color: dark ? 'rgba(255,255,255,0.92)' : '#2D4A30',
              textShadow: dark ? '0 2px 20px rgba(0,0,0,0.5)' : '0 1px 8px rgba(255,255,255,0.3)',
              marginBottom: '12px', transition: 'color 1.5s ease, text-shadow 1.5s ease',
              fontFamily: "'Cormorant Garamond', serif",
            }}>
              Destroy a bad thought.
            </h1>
            <p className="fade-up-d2" style={{
              fontSize: 'clamp(13px,2vw,16px)', marginBottom: '14px', transition: 'color 1.5s ease',
              color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(50,80,50,0.55)',
            }}>
              Type it, upload it, erase it. Nothing is saved.
            </p>
            <div className="fade-up-d3"><TrustBadge dark={dark} /></div>
          </div>
        </header>

        <main style={{ padding: '8px 0 40px' }} role="main">
          {phase === 'input' && renderInput()}
          {phase === 'destroying' && renderDestroying()}
          {phase === 'done' && renderDone()}
        </main>

        <div style={{ padding: '8px 0 32px' }}><AdZone label="In-content · Responsive" dark={dark} /></div>

        {phase === 'input' && (
          <section style={{ padding: '32px 0 48px' }}>
            <h2 className="fade-up" style={{ textAlign: 'center', fontSize: 'clamp(22px,4vw,32px)', marginBottom: '32px', color: txt }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '700px', margin: '0 auto' }}>
              {[
                { n: '1', t: 'Write or upload', d: 'Type your frustration, or upload a document or photo.' },
                { n: '2', t: 'Pick your weapon', d: 'Shred it, burn it, or flush it. Your choice.' },
                { n: '3', t: 'Watch it vanish', d: 'See it destroyed. Nothing is saved, ever.' },
              ].map((s, i) => (
                <div key={i} className="fade-up" style={{ animationDelay: `${i * 0.1}s`, textAlign: 'center', padding: '28px 20px', borderRadius: '16px',
                  background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px',
                    fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>{s.n}</div>
                  <h3 style={{ fontSize: '16px', marginBottom: '6px', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{s.t}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {phase === 'input' && <section style={{ padding: '24px 0 48px' }}><FAQSection dark={dark} /></section>}

        {phase === 'input' && (
          <section style={{ padding: '24px 0 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(20px,3.5vw,28px)', marginBottom: '16px', color: txt }}>A Ritual of Release</h2>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '15px', lineHeight: 1.8, color: sub }}>
              Across cultures, people have written their worries on paper and burned them, thrown stones into the sea, or released lanterns into the sky. This is the digital version of that ancient instinct. No accounts, no data, no judgment — just letting go.
            </p>
          </section>
        )}

        <div style={{ padding: '16px 0 24px' }}><AdZone label="Bottom banner · 728×90" dark={dark} /></div>

        <footer style={{ textAlign: 'center', padding: '32px 0', borderTop: `1px solid ${faint}`, fontSize: '13px', color: faint, transition: 'all 1s ease' }}>
          <p style={{ marginBottom: '8px' }}>ThoughtShredder · A symbolic release tool</p>
          <p>No data is stored. No accounts needed. Just let go.</p>
          <div style={{ marginTop: '16px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Privacy', 'Terms', 'About', 'Contact'].map(l => (
              <a key={l} href="#" style={{ color: faint, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
