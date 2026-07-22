import React from 'react';
import myPhoto from '../assets/me.jpg';

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        background: '#0a0e1f', // dark navy seperti contoh
        color: '#e0e7ff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 40%, rgba(59,130,246,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 70% 60%, rgba(139,92,246,0.10) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', width: '100%', zIndex: 2 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '80px 120px',
          }}
        >
          {/* FOTO - Lingkaran dengan glow biru subtle */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: '-30px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
                filter: 'blur(25px)',
                opacity: 0.7,
                animation: 'pulseGlow 6s ease-in-out infinite',
              }}
            />
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '6px solid rgba(59,130,246,0.5)',
                boxShadow: '0 0 40px rgba(59,130,246,0.3)',
              }}
            >
              <img
                src={myPhoto}
                alt="Nokatri Sitinjak"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* Kanan: Teks & Badge */}
          <div style={{ maxWidth: '620px' }}>
            <p
              style={{
                fontSize: '1.5rem',
                color: '#60a5fa',
                fontWeight: '600',
                letterSpacing: '3px',
                marginBottom: '12px',
                textTransform: 'uppercase',
              }}
            >
              HEY THERE, I'M
            </p>

            <h1
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 5.2rem)',
                fontWeight: '900',
                lineHeight: '1.05',
                marginBottom: '32px',
                color: '#ffffff',
              }}
            >
              Nokatri <br /> Sitinjak
            </h1>

            {/* Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '40px',
              }}
            >
              {[
                { text: 'Quality Assurance Engineer', color: '#60a5fa', border: '#60a5fa' },
                { text: 'UI/UX Enthusiast', color: '#c084fc', border: '#c084fc' },
                { text: 'Front-End Developer', color: '#ec4899', border: '#ec4899' },
                { text: 'Business Analyst', color: '#fb923c', border: '#fb923c' },
              ].map((role, i) => (
                <span
                  key={i}
                  style={{
                    padding: '10px 24px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    borderRadius: '999px',
                    background: 'transparent',
                    color: role.color,
                    border: `2px solid ${role.border}`,
                    boxShadow: `0 0 12px rgba(${role.color === '#60a5fa' ? '96,165,250' : role.color === '#c084fc' ? '192,132,252' : role.color === '#ec4899' ? '236,72,153' : '251,146,60'}, 0.4)`,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `rgba(${role.color === '#60a5fa' ? '96,165,250' : role.color === '#c084fc' ? '192,132,252' : role.color === '#ec4899' ? '236,72,153' : '251,146,60'}, 0.12)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {role.text}
                </span>
              ))}
            </div>

            {/* Deskripsi di dalam kotak */}
            <div
              style={{
                padding: '28px 36px',
                borderRadius: '16px',
                background: 'rgba(30, 41, 59, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(96,165,250,0.25)',
                marginBottom: '48px',
                fontSize: '1.25rem',
                lineHeight: '1.7',
                color: '#cbd5e1',
              }}
            >
              Delivering <strong>high-quality</strong>, <strong>user-centered</strong> digital products — from flawless functionality to intuitive and beautiful experiences.
            </div>

            {/* Tombol */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <a
                href="/CVNokatri.pdf"
                download
                style={{
                  padding: '16px 40px',
                  background: '#3b82f6',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(59,130,246,0.4)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(59,130,246,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(59,130,246,0.4)';
                }}
              >
                Download CV
              </a>

              <button
                onClick={scrollToContact}
                style={{
                  padding: '16px 40px',
                  background: 'transparent',
                  color: '#60a5fa',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  border: '2px solid #60a5fa',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(96,165,250,0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 0.9; transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
};

export default Hero;