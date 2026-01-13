import React, { useState } from 'react';
import { Mail, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('nokatrisitinjak@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <footer
      id="contact"
      style={{
        padding: '160px 24px 100px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(96,165,250,0.25)',
      }}
    >
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '12%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '12%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <h2
          style={{
            fontSize: 'clamp(3.5rem, 9vw, 6rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '60px',
            background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899, #fb923c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Connect!
        </h2>

        <p
          style={{
            color: '#cbd5e1',
            fontSize: 'clamp(1.3rem, 4vw, 1.6rem)',
            textAlign: 'center',
            marginBottom: '70px',
            lineHeight: '1.7',
            maxWidth: '780px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Looking for a Quality Assurance Engineer, UI/UX Designer, Front-End Developer, or Business Analyst?  
          <br />
          <strong>Let's collaborate and create something exceptional together.</strong>
        </p>

        {/* Social Media Icons */}
        <div style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
            {[
              { href: "https://linkedin.com/in/nokatri-sitinjak-b2032a288", icon: Linkedin, color: "#60a5fa", label: "LinkedIn" },
              { href: "https://github.com/nokasitinjak", icon: Github, color: "#ffffff", label: "GitHub" },
              { href: "https://instagram.com/trii_.sitinjak", icon: Instagram, color: "#ec4899", label: "Instagram" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  padding: '24px',
                  background: 'rgba(30,27,75,0.5)',
                  borderRadius: '50%',
                  border: `1px solid rgba(${social.color === "#60a5fa" ? "96,165,250" : social.color === "#ffffff" ? "255,255,255" : "236,72,153"}, 0.35)`,
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.12)';
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(${social.color === "#60a5fa" ? "96,165,250" : social.color === "#ffffff" ? "255,255,255" : "236,72,153"}, 0.4)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }}
              >
                <social.icon size={44} color={social.color} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Buttons - Sekarang ada Copy + Kirim Email + WA */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '120px' }}>
          {/* Tombol Copy Email */}
          <button
            onClick={copyEmail}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 48px',
              background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              borderRadius: '999px',
              color: 'white',
              fontSize: '1.35rem',
              fontWeight: '700',
              boxShadow: '0 15px 40px rgba(96,165,250,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(96,165,250,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(96,165,250,0.4)';
            }}
          >
            <Mail size={32} />
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>

          {/* Tombol Kirim Email (mailto) */}
          <a
            href="mailto:nokatrisitinjak@gmail.com?subject=Hello%20Nokatri%20-%20Let's%20Collaborate&body=Halo%20Nokatri,%0A%0ASaya%20tertarik%20untuk%20berkolaborasi%20atau%20membahas%20peluang%20kerja%20/ %20proyek.%0A%0ASilakan%20hubungi%20saya%20kembali.%0A%0ASalam,%0A[Nama%20Anda]"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 48px',
              background: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
              borderRadius: '999px',
              color: 'white',
              fontSize: '1.35rem',
              fontWeight: '700',
              boxShadow: '0 15px 40px rgba(139,92,246,0.4)',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(139,92,246,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(139,92,246,0.4)';
            }}
          >
            <Mail size={32} />
            Kirim Email
          </a>

          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6285370532722"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '20px 48px',
              background: 'linear-gradient(135deg, #25d366, #128c7e)',
              borderRadius: '999px',
              color: 'white',
              fontSize: '1.35rem',
              fontWeight: '700',
              boxShadow: '0 15px 40px rgba(37,211,102,0.4)',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(37,211,102,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(37,211,102,0.4)';
            }}
          >
            <MessageCircle size={32} />
            Chat WhatsApp
          </a>
        </div>

        {/* Tools & Technologies */}
        <div style={{ marginBottom: '140px' }}>
          <h3
            style={{
              textAlign: 'center',
              color: '#93c5fd',
              fontSize: 'clamp(2.2rem, 5.5vw, 3rem)',
              fontWeight: '700',
              marginBottom: '60px',
            }}
          >
            Tools & Technologies
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '40px 30px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-12px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    margin: '0 auto 16px',
                    background: 'rgba(30,27,75,0.55)',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(96,165,250,0.3)',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.35)',
                  }}
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                    }}
                    onError={e => e.target.src = "https://via.placeholder.com/80?text=" + tool.name}
                  />
                </div>
                <p style={{ color: '#e0e7ff', fontSize: '1.15rem', fontWeight: '600' }}>
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p
          style={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: '1.25rem',
            fontWeight: '500',
          }}
        >
          © {new Date().getFullYear()} Nokatri Sitinjak • Built with React & Passion
        </p>
      </div>

      {/* Ripple animation */}
      <style jsx global>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Contact;