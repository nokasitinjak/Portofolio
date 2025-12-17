import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll ke bawah → sembunyikan navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll ke atas → tampilkan navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseEnterTop = (e) => {
      if (e.clientY <= 100) {  // Mouse di area atas layar (100px dari top)
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseEnterTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseEnterTop);
    };
  }, [lastScrollY]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        display: 'flex',
        gap: 32,
        alignItems: 'center',
        fontSize: '1.1rem',
        fontWeight: '600',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        pointerEvents: isVisible ? 'auto' : 'none',  // biar tidak bisa diklik saat hidden
      }}
    >
      <a href="#about" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        About Me
      </a>
      <a href="#education" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        Education
      </a>
      <a href="#certificates" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        Sertifikat
      </a>
      <a href="#projects" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        Projects
      </a>
      <a href="#Tools" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        Skills & Tools
      </a>
      <a href="#contact" style={{ color: '#e0e7ff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.target.style.color = '#60a5fa'} onMouseLeave={e => e.target.style.color = '#e0e7ff'}>
        Hubungi
      </a>
    </nav>
  );
};

export default Navbar;