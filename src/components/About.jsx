import React from 'react';
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
  return (
    <>
      {/* BACKGROUND SELURUH HALAMAN = DEEP PURPLE SOLID #2d1b69 */}
      <div style={{ background: '#291148ff', minHeight: '100vh' }}>

        {/* ABOUT ME SECTION - SEKARANG ADA CARD GLASS BESAR */}
        <section id="about" style={{ padding: '120px 0' }}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-text"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', textAlign: 'center', marginBottom: '80px', fontWeight: '800' }}
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass"
              style={{
                padding: '50px',
                borderRadius: '32px',
                maxWidth: '1000px',
                margin: '0 auto',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', textAlign: 'center' }}>
                <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', lineHeight: '1.9', color: '#e0e7ff' }}>
                  Hello! I'm <strong>Nokatri Sitinjak</strong>, an Information Technology student with a strong interest in <strong>Quality Assurance</strong>, <strong>UI/UX Design</strong>, and <strong>Business Analysis</strong>.
                </p>
                <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: '1.9', color: '#cbd5e1' }}>
                  I believe the best applications not only work without bugs but also deliver a comfortable, intuitive, and enjoyable user experience.
                </p>
                <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', lineHeight: '1.9', color: '#cbd5e1' }}>
                  I love learning new things and am not afraid to face different challenges, whether working independently or as part of a team.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION SECTION - ADA CARD GLASS BESAR */}
        <section id="education" style={{ padding: '80px 0' }}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-text"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 3.8rem)', textAlign: 'center', marginBottom: '80px' }}
            >
              Education
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', maxWidth: '1000px', margin: '0 auto' }}>
              {/* CARD IT Del */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass"
                style={{ padding: '40px', borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                  <img src="/logo del.jpg" alt="IT Del" style={{ width: '140px', height: '140px', objectFit: 'contain', borderRadius: '20px' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white', marginBottom: '12px' }}>Institut Teknologi Del</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1.3rem', marginBottom: '20px' }}>Laguboti, Toba, Sumatera Utara</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                      <span style={{ background: 'rgba(139,92,246,0.3)', padding: '10px 20px', borderRadius: '16px', color: '#e0e7ff', fontWeight: '600' }}>
                        Diploma III — Teknologi Informasi
                      </span>
                      <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#c084fc)', padding: '10px 20px', borderRadius: '50px', color: 'white', fontWeight: '600' }}>
                        2023 – 2026
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                      <div style={{ background: 'rgba(96,165,250,0.15)', padding: '16px 20px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#60a5fa' }}>UI/UX Design</div>
                        <span style={{ fontSize: '1.1rem', color: '#a5b4fc' }}>Design & User Research</span>
                      </div>
                      <div style={{ background: 'rgba(139,92,246,0.15)', padding: '16px 20px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#c084fc' }}>Quality Assurance</div>
                        <span style={{ fontSize: '1.1rem', color: '#e0c0ff' }}>Manual & Automation Testing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CARD SMA */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass"
                style={{ padding: '40px', borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
                  <img src="/sma 1 laguboti.jpg" alt="SMA" style={{ width: '140px', height: '140px', objectFit: 'contain', borderRadius: '20px' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white', marginBottom: '12px' }}>SMA Negeri 1 Laguboti</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1.3rem', marginBottom: '20px' }}>Toba, Sumatera Utara • Jurusan IPA</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <span style={{ background: 'linear-gradient(90deg,#60a5fa,#3b82f6)', padding: '12px 24px', borderRadius: '50px', color: 'white', fontWeight: '600', alignSelf: 'flex-start' }}>
                        2019 – 2022
                      </span>
                      <div style={{ background: 'rgba(139,92,246,0.2)', padding: '20px 28px', borderRadius: '20px', border: '1px solid rgba(139,92,246,0.5)', alignSelf: 'flex-start' }}>
                        <p style={{ color: '#e0aaff', fontWeight: '800', fontSize: '1.4rem', margin: 0 }}>Sekretaris OSIS</p>
                        <p style={{ color: '#c084fc', fontSize: '1.1rem', margin: '8px 0 0' }}>2020 – 2022 • 2 tahun berturut-turut</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION - CARD TETAP ADA */}
        <section id="certificates" style={{ padding: '80px 0' }}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-text"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 3.8rem)', textAlign: 'center', marginBottom: '60px' }}
            >
              Certificates & Awards
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
              {certificates.map((c, i) => (
                <motion.a
                  key={i}
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass"
                  style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}
                >
                  <img src={c.thumb} alt={c.title} style={{ width: '100%', height: '190px', objectFit: 'cover' }} />
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#e0e7ff', fontWeight: '600', marginBottom: '8px' }}>{c.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '1rem' }}>{c.issuer} • {c.date}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION - CARD TETAP ADA */}
        <section id="projects" style={{ padding: '80px 0 120px' }}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="gradient-text"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 3.8rem)', textAlign: 'center', marginBottom: '60px' }}
            >
              Projects
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px', maxWidth: '1200px', margin: '0 auto' }}>
              {projects.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass"
                  style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                  whileHover={{ y: -12 }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                    onError={(e) => e.target.src = "https://via.placeholder.com/600x400/1e293b/e0e7ff?text=Project"}
                  />
                  <div style={{ padding: '28px' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#60a5fa', fontWeight: '800', marginBottom: '12px' }}>{p.title}</h3>
                    <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '14px' }}>{p.desc}</p>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px', fontWeight: '600' }}>{p.tech}</p>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.12)', padding: '10px 18px', borderRadius: '14px', color: 'white', fontSize: '0.95rem' }}>
                          <Github size={18} /> Source Code
                        </a>
                      )}
                      {p.figma && (
                        <a href={p.figma} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(236,72,153,0.2)', padding: '10px 18px', borderRadius: '14px', color: '#ec4899', fontSize: '0.95rem' }}>
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
      </div>
    </>
  );
};

export default About;