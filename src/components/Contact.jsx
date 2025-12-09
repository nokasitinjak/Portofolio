import React from 'react';
import { Mail, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
 const tools = [
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Canva", img: "/canva.jpg" },
  { name: "Katalon", img: "/Katalon.jpg" },
  { name: "Selenium", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Bootstrap", img: "/boostrap.jpg" },
  { name: "Minitab", img: "/minitab.jpg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
];


  return (
    <footer id="contact" style={{
      padding: '180px 0 100px',
      background: 'linear-gradient(to top, #0a0e1a 0%, transparent 100%)',
      borderTop: '1px solid rgba(139,92,246,0.15)'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>

        {/* JUDUL — SEKARANG UKURAN NORMAL & ELEGANT */}
        <h2 className="gradient-text" style={{
          fontSize: '4.2rem',
          marginBottom: '80px',
          fontWeight: '800'
        }}>
          Let's Connect!
        </h2>

        <p style={{ color: '#cbd5e1', fontSize: '1.5rem', marginBottom: '100px', lineHeight: '1.7' }}>
          Punya project keren? Butuh QA atau UI/UX Designer? <br />
          <strong>Ayo ngobrol bareng!</strong>
        </p>

        {/* TOMBOL EMAIL & WA — DIPERKECIL TAPI MASIH KEREN */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '140px' }}>
          <a href="mailto:nokatrisitinjak@gmail.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              padding: '20px 40px',
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: '700',
              boxShadow: '0 20px 50px rgba(96,165,250,0.4)',
              transition: 'all 0.5s',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-12px) scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
            <Mail size={36} />
            Kirim Email
          </a>

          <a href="https://wa.me/6285370532722" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '16px',
              padding: '20px 40px',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              borderRadius: '50px',
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: '700',
              boxShadow: '0 20px 50px rgba(37,211,102,0.4)',
              transition: 'all 0.5s',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-12px) scale(1.08)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
            <MessageCircle size={36} />
            Chat WhatsApp
          </a>
        </div>

        {/* TOOLS — UKURAN PAS BANGET */}
        <div style={{ marginBottom: '140px' }}>
          <p style={{ color: '#94a3b8', marginBottom: '60px', fontSize: '1.8rem', fontWeight: '700' }}>
            Tools & Technologies
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{ transition: 'all 0.5s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-16px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto 20px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
                }}>
                  <img src={tool.img} alt={tool.name} style={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }} />
                </div>
                <p style={{ color: '#e0e7ff', fontSize: '1.3rem', fontWeight: '600' }}>
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SOSIAL MEDIA — DIPERKECIL JUGA */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
            <a href="https://linkedin.com/in/nokatri-sitinjak-b2032a288" target="_blank" rel="noopener noreferrer"
              style={{ padding: '24px', background: 'rgba(10,102,194,0.18)', borderRadius: '50px', transition: '0.5s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-16px) scale(1.15)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <Linkedin size={50} color="#0a66c2" />
            </a>

            <a href="https://github.com/nokasitinjak" target="_blank" rel="noopener noreferrer"
              style={{ padding: '24px', background: 'rgba(255,255,255,0.12)', borderRadius: '50px', transition: '0.5s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-16px) scale(1.15)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <Github size={50} color="#fff" />
            </a>

            <a href="https://instagram.com/trii_.sitinjak" target="_blank" rel="noopener noreferrer"
              style={{ padding: '24px', background: 'rgba(236,72,153,0.18)', borderRadius: '50px', transition: '0.5s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-16px) scale(1.15)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <Instagram size={50} color="#ec4899" />
            </a>
          </div>
        </div>

        <p style={{ color: '#64748b', fontSize: '1.3rem', fontWeight: '500' }}>
          © 2025 Nokatri Sitinjak • Built with React & Passion
        </p>

      </div>
    </footer>
  );
};

export default Contact;
