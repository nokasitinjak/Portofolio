import React from 'react';
import myPhoto from '../assets/me.jpg';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
  { title: "AI Foundations Associate", issuer: "Oracle", date: "23 September 2024", pdf: "/AI FOUNDATION.pdf", thumb: "/serti1.jpg" },
  { title: "Belajar Dasar AWS Cloud", issuer: "Dicoding Indonesia", date: "06 Juli 2024", pdf: "/aws cloud.pdf", thumb: "/serti2.jpg" },
  { title: "QA Automation Katalon", issuer: "After Office Academy", date: "10 November 2025", pdf: "/katalon.pdf", thumb: "/serti7.jpg" },
  { title: "Data Science Professional Certificate", issuer: "Oracle", date: "26 September 2025", pdf: "/data science.pdf", thumb: "/serti3.jpg" },
  { title: "Belajar Dasar AI", issuer: "Dicoding", date: "04 Juli 2024", pdf: "/dasar AI.pdf", thumb: "/serti4.jpg" },
  { title: "Belajar Dasar Visualisasi Data", issuer: "Dicoding", date: "06 Juli 2024", pdf: "/visualisasi data.pdf", thumb: "/serti5.jpg" },
  { title: "UI/UX Design Bootcamp", issuer: "Sanbercode", date: "30 Juni - 25 Juli 2025", pdf: "/sanbercode.pdf", thumb: "/serti6.jpg" },
];

const projects = [
  { title: "Sistem Informasi Kemahasiswaan IT Del", desc: "Terlibat langsung dalam usability testing & redesign UI/UX aplikasi kemahasiswaan IT Del menjadi lebih modern, nyaman, dan mudah dipahami.", tech: "Figma • Katalon • Selenium • HTML/CSS • JavaScript", github: "https://github.com/felixnatanaelbutarbutar/PA-II-07-Sistem-Informasi-Kemahasiswaan-IT-DEL", img: "/project1.jpg" },
  { title: "Sistem Basis Data Wisata Sumatera Utara", desc: "Proyek database pariwisata Sumut dengan fokus pengujian otomatis menggunakan MySQL & Postman untuk memastikan kualitas dan keandalan data.", tech: "MySQL • Postman • GitHub Actions", github: "https://github.com/AdrianoRafaelo/proyek_SBD", img: "/project2.jpg" },
  { title: "Manjara — Platform Event & Travel", desc: "Startup platform yang membantu traveler menemukan berbagai event serta memudahkan Event Organizer dalam mengelola dan mempromosikan acara mereka.", tech: "Figma • UI/UX Design • User Research • Prototyping", figma: "https://www.figma.com/design/2ZZsCDhOHEHlvkpXRHDDHX/Tekno_09?node-id=0-1&t=IRrRF8LzY9TMMmQt-1", img: "/project3.jpg" },
  { title: "Prototype Pemesanan Makanan dan Minuman Pada Restoran", desc: "Merancang antarmuka (UI/UX) dan alur pengguna untuk sistem pemesanan restoran, mulai dari melihat menu, memilih pesanan, pembayaran, dengan tujuan menghadirkan pengalaman pemesanan yang lebih praktis, intuitif, dan nyaman.", tech: "Figma • UI/UX Design • User Research • Prototyping", figma: "https://www.figma.com/design/VCHfvkJWuqxDAjDkKheyQQ/Untitled?node-id=0-1&t=Jgx15RTzmSbI40g0-1", img: "/project6.jpg" },
  { title: "Pengembangan Model U-Net dengan ResNet18 untuk Deteksi Penyakit Mata", desc: "Proyek ini mengembangkan model U-Net dengan ResNet18 sebagai backbone untuk melakukan segmentasi dan klasifikasi penyakit mata secara otomatis dari citra mata. Model telah diintegrasikan ke dalam platform website.", tech: "Python • TensorFlow • React • Figma", github: "https://github.com/jmsrzk14/Eye-Disease-Detection", img: "/project4.jpg" },
  { title: "Website Apotik Nauli Farma", desc: "Berperan sebagai UI/UX Designer dengan fokus pada penyusunan alur pengguna, wireframe, dan desain antarmuka yang user-friendly untuk memudahkan pengunjung mencari informasi obat dan layanan kesehatan.", tech: "Figma • HTML/CSS • JavaScript • Manual Testing", github: "https://github.com/kristiansitinjak/Final-Project-1-Nauli-Farma", img: "/project5.jpg" },
];

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
   {/* ABOUT ME SECTION – HANYA TEKS SAJA */}
<section id="about" style={{ padding: '120px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
  <div className="container">
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="gradient-text"
      style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', textAlign: 'center', marginBottom: '60px', fontWeight: '800' }}
    >
      About Me
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="glass"
      style={{
        padding: 'clamp(40px, 6vw, 80px)',
        borderRadius: '30px',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: '1.9', maxWidth: '800px', margin: '0 auto' }}>
          Hello! I'm <strong>Nokatri Sitinjak</strong>, an Information Technology student with a strong interest in <strong>Quality Assurance</strong>, <strong>UI/UX Design</strong>, and <strong>Business Analysis</strong>.
        </p>
        
        <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.15rem)', lineHeight: '1.85', maxWidth: '800px', margin: '0 auto' }}>
          I believe the best applications not only work without bugs but also deliver a comfortable, intuitive, and enjoyable user experience.
        </p>
        
        <p style={{ fontSize: 'clamp(1rem, 2.8vw, 1.15rem)', lineHeight: '1.85', maxWidth: '800px', margin: '0 auto' }}>
          I love learning new things and am not afraid to face different challenges, whether working independently or as part of a team.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      {/* EDUCATION SECTION */}
      <section id="education" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-text"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4rem)', textAlign: 'left', marginBottom: '70px' }}
          >
            Education
          </motion.h2>

          {/* IT Del */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '50px',
              padding: '50px',
              borderRadius: '32px',
              marginBottom: '60px',
              alignItems: 'center'
            }}
          >
            <img src="/logo del.jpg" alt="IT Del" style={{ width: 'clamp(120px, 25vw, 180px)', height: 'auto', borderRadius: '24px', border: '3px solid rgba(139,92,246,0.4)' }} />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '800', color: 'white', marginBottom: '10px' }}>Institut Teknologi Del</h3>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '20px' }}>Laguboti, Toba, Sumatera Utara</p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <span style={{ background: 'rgba(139,92,246,0.2)', padding: '8px 20px', borderRadius: '16px', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#e0aaff' }}>Diploma III — Teknologi Informasi</span>
                <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#c084fc)', padding: '8px 20px', borderRadius: '50px', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: 'white' }}>2023 – 2026</span>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{ background: 'rgba(96,165,250,0.1)', padding: '12px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ fontSize: '1.4rem' }}>UI/UX Design</div>
                  <span style={{ fontSize: '0.95rem', color: '#a5b4fc' }}>Design & User Research</span>
                </div>
                <div style={{ background: 'rgba(139,92,246,0.1)', padding: '12px 20px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ fontSize: '1.4rem' }}>Quality Assurance</div>
                  <span style={{ fontSize: '0.95rem', color: '#e0c0ff' }}>Manual & Automation Testing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SMA */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass"
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: '50px',
              padding: '50px',
              borderRadius: '32px',
              alignItems: 'center'
            }}
          >
            <img src="/sma 1 laguboti.jpg" alt="SMA" style={{ width: 'clamp(120px, 25vw, 180px)', height: 'auto', borderRadius: '24px', border: '3px solid rgba(139,92,246,0.4)' }} />
            <div style={{ flex: 1, minWidth: '280px' }}>
              <h3 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)', fontWeight: '800', color: 'white', marginBottom: '10px' }}>SMA Negeri 1 Laguboti</h3>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(1rem, 3vw, 1.3rem)', marginBottom: '20px' }}>Toba, Sumatera Utara • Jurusan IPA</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ background: 'linear-gradient(90deg,#60a5fa,#3b82f6)', padding: '10px 24px', borderRadius: '50px', fontSize: '1.1rem', color: 'white', alignSelf: 'flex-start' }}>2019 – 2022</span>
                <div style={{ background: 'rgba(139,92,246,0.15)', padding: '20px 28px', borderRadius: '20px', border: '1px solid rgba(139,92,246,0.4)', alignSelf: 'flex-start' }}>
                  <p style={{ color: '#e0aaff', fontWeight: '800', fontSize: '1.4rem', margin: 0 }}>Sekretaris OSIS</p>
                  <p style={{ color: '#c084fc', fontSize: '1.1rem', margin: '4px 0 0' }}>2020 – 2022 • 2 tahun berturut-turut</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATES SECTION */}
      <section id="certificates" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-text"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 3.8rem)', textAlign: 'center', marginBottom: '70px' }}
          >
            Certificates & Awards
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {certificates.map((c, i) => (
              <motion.a
                key={i}
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <img src={c.thumb} alt={c.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '24px', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#e0e7ff', fontWeight: '600', marginBottom: '8px' }}>{c.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{c.issuer} • {c.date}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ padding: '120px 0' }}>
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-text"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 4rem)', textAlign: 'center', marginBottom: '80px' }}
          >
            Projects
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass"
                style={{ borderRadius: '28px', overflow: 'hidden', transition: 'transform 0.3s ease' }}
                whileHover={{ y: -16 }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  onError={(e) => e.target.src = "https://via.placeholder.com/600x400/1e293b/e0e7ff?text=Project"}
                />
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', fontWeight: '800', marginBottom: '12px' }}>{p.title}</h3>
                  <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6', marginBottom: '16px' }}>{p.desc}</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px', fontWeight: '600' }}>{p.tech}</p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '12px', color: 'white', fontSize: '0.95rem' }}>
                        <Github size={18} /> Source Code
                      </a>
                    )}
                    {p.figma && (
                      <a href={p.figma} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(236,72,153,0.15)', padding: '10px 20px', borderRadius: '12px', color: '#ec4899', fontSize: '0.95rem' }}>
                        <ExternalLink size={18} /> View on Figma
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;