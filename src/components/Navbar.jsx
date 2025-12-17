import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // icon hamburger & close

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 80) {
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

  const menuItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Sertifikat', href: '#certificates' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills & Tools', href: '#Tools' },
    { label: 'Hubungi', href: '#contact' },
  ];

  return (
    <>
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
          {/* NAMA DI KIRI */}
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

          {/* DESKTOP MENU */}
          <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-menu">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ color: '#e0e7ff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#e0e7ff'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#e0e7ff' }}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU FULL SCREEN */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(30, 41, 59, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)} // tutup menu setelah klik
              style={{
                color: '#e0e7ff',
                textDecoration: 'none',
                fontSize: '2.5rem',
                fontWeight: '700',
                transition: 'color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#60a5fa';
                e.target.style.transform = 'translateX(20px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#e0e7ff';
                e.target.style.transform = 'translateX(0)';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* CSS RESPONSIF - HIDDEN/SHOW MENU */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;