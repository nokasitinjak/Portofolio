import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scroll down → hide
      } else {
        setIsVisible(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 80) { // mouse di atas layar
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 40px',
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
        transition: 'transform 0.4s ease, opacity 0.4s ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* NAMA DI PALING KIRI UJUNG */}
        <div style={{ fontSize: '1.9rem', fontWeight: '900' }}>
          <span style={{
            background: 'linear-gradient(90deg, #60a5fa, #a78bfa, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Nokatri
          </span>
        </div>

        {/* MENU DI PALING KANAN UJUNG */}
        <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          <a
            href="#about"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            About Me
          </a>
          <a
            href="#education"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            Education
          </a>
          <a
            href="#certificates"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            Sertifikat
          </a>
          <a
            href="#projects"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            Projects
          </a>
          <a
            href="#Tools"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            Skills & Tools
          </a>
          <a
            href="#contact"
            style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
            onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
          >
            Hubungi
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;