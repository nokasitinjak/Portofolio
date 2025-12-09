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
  { title: "UI/UX Design Bootcamp", issuer: "Sanbercode", date: "30 Juni - 25 Juli 2025", pdf: "/uiux-sanbercode.pdf", thumb: "/serti6.jpg" },
];

const projects = [
  {
    title: "Sistem Informasi Kemahasiswaan IT Del",
    desc: "Terlibat langsung dalam usability testing & redesign UI/UX aplikasi kemahasiswaan IT Del menjadi lebih modern, nyaman, dan mudah dipahami.",
    tech: "Figma • Katalon • Selenium • HTML/CSS • JavaScript",
    github: "https://github.com/felixnatanaelbutarbutar/PA-II-07-Sistem-Informasi-Kemahasiswaan-IT-DEL",
    img: "/project1.jpg"
  },
  {
    title: "Sistem Basis Data Wisata Sumatera Utara",
    desc: "Proyek database pariwisata Sumut dengan fokus pengujian otomatis menggunakan MySQL & Postman untuk memastikan kualitas dan keandalan data.",
    tech: "MySQL • Postman • GitHub Actions",
    github: "https://github.com/AdrianoRafaelo/proyek_SBD",
    img: "/project2.jpg"
  },
  {
    title: "Manjara — Platform Event & Travel",
    desc: "Startup platform yang membantu traveler menemukan berbagai event serta memudahkan Event Organizer dalam mengelola dan mempromosikan acara mereka.",
    tech: "Figma • UI/UX Design • User Research • Prototyping",
    figma: "https://www.figma.com/design/2ZZsCDhOHEHlvkpXRHDDHX/Tekno_09?node-id=0-1&t=IRrRF8LzY9TMMmQt-1",
    img: "/project3.jpg"
  },
  {
    title: "Prototype Pemesanan Makanan dan Minuman Pada Restoran",
    desc: "Merancang antarmuka (UI/UX) dan alur pengguna untuk sistem pemesanan restoran, mulai dari melihat menu, memilih pesanan, pembayaran, dengan tujuan menghadirkan pengalaman pemesanan yang lebih praktis, intuitif, dan nyaman.",
    tech: "Figma • UI/UX Design • User Research • Prototyping",
    figma: "https://www.figma.com/design/VCHfvkJWuqxDAjDkKheyQQ/Untitled?node-id=0-1&t=Jgx15RTzmSbI40g0-1",
    img: "/project6.jpg"
  },
  {
    title: "Pengembangan Model U-Net dengan ResNet18 untuk Deteksi Penyakit Mata",
    desc: "Proyek ini mengembangkan model U-Net dengan ResNet18 sebagai backbone untuk melakukan segmentasi dan klasifikasi penyakit mata secara otomatis dari citra mata. Model telah diintegrasikan ke dalam platform website.",
    tech: "Python • TensorFlow • React • Figma",
    github: "https://github.com/jmsrzk14/Eye-Disease-Detection",
    img: "/project4.jpg"
  },
  {
    title: "Website Apotik Nauli Farma",
    desc: "Berperan sebagai UI/UX Designer dengan fokus pada penyusunan alur pengguna, wireframe, dan desain antarmuka yang user-friendly untuk memudahkan pengunjung mencari informasi obat dan layanan kesehatan.",
    tech: "Figma • HTML/CSS • JavaScript • Manual Testing",
    github: "https://github.com/kristiansitinjak/Final-Project-1-Nauli-Farma",
    img: "/project5.jpg"
  },
];

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* ABOUT SECTION */}
<section
  id="about"
  style={{
    height: '100vh',                 // FULL SCREEN DESKTOP
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif"
  }}
>
  <div className="container" style={{ width: '100%', padding: '80px 0' }}>
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="gradient-text"
      style={{
        fontSize: '3.8rem',
        textAlign: 'center',
        marginBottom: '60px',
        fontWeight: '800',
        letterSpacing: '2px'
      }}
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
        display: 'grid',
        gridTemplateColumns: '420px 1fr',
        gap: '80px',
        padding: '60px',
        alignItems: 'center',
        borderRadius: '30px'
      }}
    >
<motion.img
  whileHover={{ scale: 1.05, rotate: 1 }}
  animate={{
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }}
  src={myPhoto}
  alt="Nokatri Sitinjak"
  style={{
    width: '360px',
    height: '360px',     // ukuran sama agar bulat sempurna
    borderRadius: '50%', // menjadikan foto bulat
    objectFit: 'cover',
    border: '6px solid #60a5fa',
    boxShadow: '0 30px 60px rgba(96,165,250,0.4)',
    cursor: 'pointer',
    margin: '0 auto'
  }}
/>


      <div>
        <p style={{ fontSize: '1.3rem', lineHeight: '1.9', marginBottom: '28px' }}>
          Halo! Saya <strong>Nokatri Sitinjak</strong>, seorang mahasiswa Teknologi Informasi dengan
          fokus pada <strong>Quality Assurance</strong> dan <strong>UI/UX Design</strong>.
        </p>

        <p style={{ fontSize: '1.15rem', marginBottom: '28px', lineHeight: '1.85' }}>
          Saya percaya aplikasi terbaik bukan hanya bekerja tanpa bug, tapi juga memberikan
          pengalaman penggunaan yang nyaman, intuitif, dan menyenangkan.
        </p>

        <p style={{ fontSize: '1.15rem', marginBottom: '50px', lineHeight: '1.85' }}>
          Saat ini saya aktif mengerjakan project QA sistem kampus, memperbaiki tampilan UX startup,
          dan berbagi pengetahuan seputar QA & UI/UX di LinkedIn.
        </p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <button
            onClick={scrollToContact}
            className="btn"
            style={{
              padding: '18px 44px',
              fontSize: '1.2rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899)',
              boxShadow: '0 20px 40px rgba(96,165,250,0.45)',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Contact Me
          </button>

          <a
            href="/CVNokatri.pdf"
            download
            className="btn btn-outline"
            style={{
              padding: '18px 44px',
              fontSize: '1.2rem',
              fontWeight: '700',
              borderRadius: '20px'
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.div>
  </div>
</section>


{/* EDUCATION SECTION – RAPI, KECIL, & ELEGANT */}
<section id="education" style={{ padding: '140px 0' }}>
  <div className="container">

    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="gradient-text"
      style={{ fontSize: '4rem', textAlign: 'left', marginBottom: '90px', fontWeight: '800' }}
    >
      Education
    </motion.h2>

    {/* CARD KULIAH */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="glass"
      style={{
        width: '100%',
        maxWidth: '1400px',
        padding: '60px 80px',
        borderRadius: '36px',
        display: 'flex',
        alignItems: 'center',
        gap: '70px',
        marginBottom: '70px',
        background: 'rgba(255,255,255,0.05)',
      }}
    >
      <img
        src="/logo del.jpg"
        alt="IT Del"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '28px',
          objectFit: 'contain',
          flexShrink: 0,
          border: '3px solid rgba(139,92,246,0.4)'
        }}
      />

      <div>
        <h3 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
          Institut Teknologi Del
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '1.4rem', marginBottom: '32px' }}>
          Laguboti, Toba, Sumatera Utara
        </p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '36px' }}>
          <span style={{
            background: 'rgba(139,92,246,0.18)',
            padding: '12px 28px',
            borderRadius: '20px',
            color: '#e0aaff',
            fontWeight: '700',
            fontSize: '1.25rem',
            border: '1px solid rgba(139,92,246,0.4)'
          }}>
            Diploma III — Teknologi Informasi
          </span>
          <span style={{
            background: 'linear-gradient(90deg,#8b5cf6,#c084fc)',
            color: 'white',
            padding: '12px 28px',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.2rem'
          }}>
            2023 – 2026 (Sedang Berjalan)
          </span>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{
            background: 'rgba(96,165,250,0.1)',
            padding: '16px 28px',
            borderRadius: '18px',
            border: '1px solid rgba(96,165,250,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <div style={{ fontSize: '1.8rem' }}>UI/UX Design</div>
            <span style={{ color: '#a5b4fc', fontSize: '1.05rem' }}>Design & User Research</span>
          </div>

          <div style={{
            background: 'rgba(139,92,246,0.1)',
            padding: '16px 28px',
            borderRadius: '18px',
            border: '1px solid rgba(139,92,246,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <div style={{ fontSize: '1.8rem' }}>Quality Assurance</div>
            <span style={{ color: '#e0c0ff', fontSize: '1.05rem' }}>Manual & Automation Testing</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* CARD SMA – SEKRETARIS OSIS DI BAWAH TAHUN */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="glass"
      style={{
        width: '100%',
        maxWidth: '1400px',
        padding: '60px 80px',
        borderRadius: '36px',
        display: 'flex',
        alignItems: 'center',
        gap: '70px',
        background: 'rgba(255,255,255,0.05)'
      }}
    >
      <img
        src="/sma 1 laguboti.jpg"
        alt="SMA Negeri 1 Laguboti"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '28px',
          objectFit: 'contain',
          flexShrink: 0,
          border: '3px solid rgba(139,92,246,0.4)'
        }}
      />

      <div>
        <h3 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'white', marginBottom: '12px' }}>
          SMA Negeri 1 Laguboti
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '1.4rem', marginBottom: '32px' }}>
          Toba, Sumatera Utara • Jurusan IPA
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{
            background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.25rem',
            alignSelf: 'flex-start'
          }}>
            2020 – 2023
          </span>

          <div style={{
            background: 'rgba(139,92,246,0.15)',
            padding: '24px 36px',
            borderRadius: '24px',
            border: '1px solid rgba(139,92,246,0.4)',
            alignSelf: 'flex-start'
          }}>
            <p style={{ color: '#e0aaff', fontWeight: '800', fontSize: '1.6rem', margin: 0 }}>
              Sekretaris OSIS
            </p>
            <p style={{ color: '#c084fc', fontSize: '1.2rem', margin: '6px 0 0 0' }}>
              2020 – 2022 • 2 Periode
            </p>
          </div>
        </div>
      </div>
    </motion.div>

  </div>
</section>

      

      {/* SERTIFIKAT */}
<section
  id="certificates"
  style={{
    minHeight: '100vh',
    paddingTop: '160px',   // beri ruang untuk navbar
    paddingBottom: '60px',
    display: 'flex',
    flexDirection: 'column',
     // otomatis di tengah vertikal
  }}
>
  <div className="container">
    <motion.h2 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="gradient-text"
      style={{ fontSize: '3.4rem', textAlign: 'center', marginBottom: '80px' }}
    >
      Sertifikat & Penghargaan
    </motion.h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '36px'
      }}
    >
      {certificates.map((c, i) => (
        <motion.a 
          key={i}
          href={c.pdf}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          style={{ textDecoration: 'none' }}
        >
          <div className="glass" style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <img
              src={c.thumb}
              alt={c.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                borderRadius: '20px 20px 0 0'
              }}
            />
            <div style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', color: '#e0e7ff', fontWeight: '600' }}>
                {c.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                {c.issuer} • {c.date}
              </p>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</section>


      {/* PROJECT — 3 KOLOM RAPAT */}
      <section
  id="projects"
  style={{
    minHeight: '100vh',     // ✔ tinggi memenuhi layar
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',  // konten ke tengah
    padding: '100px 0',
  }}
>

        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="gradient-text"
            style={{ fontSize: '3.6rem', textAlign: 'center', marginBottom: '100px' }}
          >
            Project
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '50px',
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                className="glass"
                style={{
                  overflow: 'hidden',
                  borderRadius: '32px',
                  transition: 'all 0.6s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-20px) scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
              >
                <img 
                  src={p.img} 
                  alt={p.title} 
                  style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '28px 28px 0 0' }}
                  onError={(e) => e.target.src = "https://via.placeholder.com/600x400/1e293b/e0e7ff?text=Project"}
                />
                
                <div style={{ padding: '36px' }}>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '18px', color: '#60a5fa', fontWeight: '800', lineHeight: '1.3' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.7', fontSize: '1.05rem' }}>
                    {p.desc}
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '32px', fontWeight: '600' }}>
                    {p.tech}
                  </p>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', padding: '14px 28px', borderRadius: '16px', color: 'white', fontWeight: '700', transition: '0.4s' }}>
                        <Github size={22} />
                        Source Code
                      </a>
                    )}
                    {p.figma && (
                      <a href={p.figma} target="_blank" rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(236,72,153,0.15)', padding: '14px 28px', borderRadius: '16px', color: '#ec4899', fontWeight: '700', transition: '0.4s' }}>
                        <ExternalLink size={22} />
                        Lihat di Figma
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