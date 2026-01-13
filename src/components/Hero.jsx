import React, { useState, useEffect } from 'react';
import { Menu, X, Bug, LayoutDashboard, Code, BarChart2, Zap, Users } from 'lucide-react';

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

  const features = [
    { label: 'Zero-Defect QA', href: '#about', icon: Bug, color: '#60a5fa' },
    { label: 'Intuitive UI/UX', href: '#about', icon: LayoutDashboard, color: '#c084fc' },
    { label: 'Pixel-Perfect Code', href: '#projects', icon: Code, color: '#ec4899' },
    { label: 'Business Insight', href: '#about', icon: BarChart2, color: '#fb923c' },
    { label: 'Fast & Reliable', href: '#projects', icon: Zap, color: '#60a5fa' },
    { label: 'Team Player', href: '#about', icon: Users, color: '#c084fc' },
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
          background: 'rgba(30, 41, 59, 0.75)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(139,92,246,0.25)',
          transition: 'transform 0.4s ease, opacity 0.4s ease',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
          {/* Logo/Nama */}
          <div style={{ fontSize: '1.9rem', fontWeight: '900' }}>
            <span style={{
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Nokatri
            </span>
          </div>

          {/* Desktop Menu - Fitur unggulan */}
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-menu">
            {features.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#e0e7ff',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.05rem',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${item.color === '#60a5fa' ? '96,165,250' : item.color === '#c084fc' ? '192,132,252' : item.color === '#ec4899' ? '236,72,153' : '251,146,60'}, 0.15)`;
                  e.currentTarget.style.color = item.color;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#e0e7ff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <item.icon size={20} color={item.color} />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#e0e7ff',
              display: 'none',
            }}
            className="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15,23,42,0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          {features.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                color: '#e0e7ff',
                textDecoration: 'none',
                fontSize: '2.2rem',
                fontWeight: '700',
                padding: '16px 32px',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = item.color;
                e.currentTarget.style.background = `rgba(${item.color === '#60a5fa' ? '96,165,250' : item.color === '#c084fc' ? '192,132,252' : item.color === '#ec4899' ? '236,72,153' : '251,146,60'}, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#e0e7ff';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <item.icon size={36} color={item.color} />
              {item.label}
            </a>
          ))}
        </motion.div>
      )}

      {/* CSS Responsif */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
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