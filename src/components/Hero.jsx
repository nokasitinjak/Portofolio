import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px',
      position: 'relative'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(96,165,250,0.15) 0%, transparent 60%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        <h1 className="gradient-text" style={{
          fontSize: '4.5rem',
          marginBottom: '20px',
          fontWeight: '800',
          lineHeight: '1.1'
        }}>
          Hi, I’m Nokatri Sitinjak
        </h1>

        <p style={{
          fontSize: '1.5rem',
          marginBottom: '16px',
          color: '#94a3b8'
        }}>
          Quality Assurance Engineer & UI/UX Enthusiast
        </p>

        <p style={{
          fontSize: '1.2rem',
          marginBottom: '50px',
          color: '#64748b'
        }}>
        I ensure that every product is high-quality, error-free, and designed with the user in mind.
        </p>

        <a href="#about" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;