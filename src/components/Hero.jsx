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
          padding: '120px 20px 80px',
          background: 'rgba(139,92,246,0.15)',
        }}
      >
        <div style={{ maxWidth: '1600px', width: '100%', margin: '0 auto' }}>  {/* Container lebih lebar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* FOTO */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  padding: '12px',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                  borderRadius: '50%',
                  width: '100%',
                  maxWidth: '460px',
                  aspectRatio: '1/1',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.animation = 'rotate 20s linear infinite')}
                onMouseLeave={(e) => (e.currentTarget.style.animation = 'none')}
              >
                <div style={{ background: '#0f172a', borderRadius: '50%', padding: '8px', width: '100%', height: '100%' }}>
                  <img
                    src={myPhoto}
                    alt="Nokatri Sitinjak"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '6px solid rgba(139,92,246,0.3)',
                      boxShadow: '0 0 60px rgba(96,165,250,0.6)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CARD TEKS - PANJANG KE KANAN (LEBAR HORIZONTAL) */}
            <div>
              <div
                className="glass"
                style={{
                  padding: '48px 80px',  // horizontal padding BESAR biar panjang ke kanan
                  borderRadius: '20px',
                  backdropFilter: 'blur(20px)',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  maxWidth: '900px',     // <--- PANJANG KE KANAN, LEBAR MAKSIMAL
                  width: '100%',
                  margin: '0 auto',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p style={{ fontSize: '1.4rem', color: '#60a5fa', marginBottom: '18px', fontWeight: '600', letterSpacing: '2px' }}>
                  HEY THERE, I'M
                </p>

                <h1 style={{
                  fontSize: 'clamp(3.2rem, 7.5vw, 5.2rem)',
                  fontWeight: '900',
                  background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '32px',
                  lineHeight: '1.1',
                }}>
                  Nokatri Sitinjak
                </h1>

                {/* ROLE BADGES */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  <span style={{
                    background: 'rgba(59,130,246,0.2)',
                    color: '#60a5fa',
                    padding: '10px 22px',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    border: '1px solid rgba(59,130,246,0.3)',
                  }}>
                    Quality Assurance Engineer
                  </span>
                  <span style={{
                    background: 'rgba(167,139,250,0.2)',
                    color: '#c084fc',
                    padding: '10px 22px',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    border: '1px solid rgba(167,139,250,0.3)',
                  }}>
                    UI/UX Enthusiast
                  </span>
                  <span style={{
                    background: 'rgba(236,72,153,0.2)',
                    color: '#ec4899',
                    padding: '10px 22px',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    border: '1px solid rgba(236,72,153,0.3)',
                  }}>
                    Front End
                  </span>
                  <span style={{
                    background: 'rgba(249,115,22,0.2)',
                    color: '#fb923c',
                    padding: '10px 22px',
                    borderRadius: '14px',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    border: '1px solid rgba(249,115,22,0.3)',
                  }}>
                    Business Analyst
                  </span>
                </div>

                {/* DESKRIPSI */}
                <p style={{ fontSize: '1.3rem', color: '#e0e7ff', lineHeight: '1.8', marginBottom: '52px' }}>
                  I ensure that every product is high-quality, error-free, and designed with the user in mind.
                </p>

                {/* BUTTONS */}
                <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                  <a
                    href="/CVNokatri.pdf"
                    download
                    style={{
                      padding: '18px 48px',
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

                  <button
                    onClick={scrollToContact}
                    style={{
                      padding: '18px 48px',
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