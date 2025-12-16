import React from 'react';
import myPhoto from '../assets/me.jpg';

// Fungsi scroll ke section Contact
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 0',
          background: 'rgba(139,92,246,0.15)',  // <--- UBAH JADI WARNA INI SESUAI PERMINTAAN
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* FOTO DENGAN GLOWING CIRCLE */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  padding: '12px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                  borderRadius: '50%',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.animation = 'rotate 20s linear infinite')}
                onMouseLeave={(e) => (e.currentTarget.style.animation = 'none')}
              >
                <div
                  style={{
                    background: '#0f172a',
                    borderRadius: '50%',
                    padding: '8px',
                  }}
                >
                  <img
                    src={myPhoto}
                    alt="Nokatri Sitinjak"
                    style={{
                      width: '340px',
                      height: '340px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '6px solid rgba(139,92,246,0.3)', // sedikit naikkin opacity border biar lebih keliatan
                      boxShadow: '0 0 60px rgba(96,165,250,0.6)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* TEKS & BUTTON */}
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.4rem', color: '#60a5fa', marginBottom: '20px', fontWeight: '600', letterSpacing: '2px' }}>
                HEY THERE, I'M
              </p>

              <h1 style={{
                fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                fontWeight: '900',
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
                lineHeight: '1.1',
              }}>
                Nokatri Sitinjak
              </h1>

              {/* ROLE BADGES */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <span style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', color: 'white', padding: '12px 28px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(59,130,246,0.4)' }}>
                  Quality Assurance Engineer
                </span>
                <span style={{ background: 'linear-gradient(135deg, #a78bfa, #c084fc)', color: 'white', padding: '12px 28px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(167,139,250,0.4)' }}>
                  UI/UX Enthusiast
                </span>
                <span style={{ background: 'linear-gradient(135deg, #ec4899, #f43f5e)', color: 'white', padding: '12px 28px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(236,72,153,0.4)' }}>
                  Front End
                </span>
                <span style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)', color: 'white', padding: '12px 28px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(249,115,22,0.4)' }}>
                  Business Analyst
                </span>
              </div>

              {/* DESKRIPSI GLASS CARD */}
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '32px 40px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                marginBottom: '50px',
              }}>
                <p style={{ fontSize: '1.3rem', color: '#e0e7ff', lineHeight: '1.8', margin: 0 }}>
                  I ensure that every product is high-quality, error-free, and designed with the user in mind.
                </p>
              </div>

              {/* BUTTONS */}
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <a href="/CVNokatri.pdf" download style={{
                  padding: '18px 44px',
                  background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 20px 50px rgba(96,165,250,0.5)',
                  transition: 'all 0.4s',
                  display: 'inline-block',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Download CV
                </a>

                <button onClick={scrollToContact} style={{
                  padding: '18px 44px',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#60a5fa',
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  borderRadius: '50px',
                  border: '2px solid #60a5fa',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animasi rotate */}
      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Hero;