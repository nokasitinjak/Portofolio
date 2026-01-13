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

const hardSkills = [
  { name: "UI/UX Design & Prototyping", icon: "🎨" },
  { name: "Quality Assurance (Manual + Automation)", icon: "🧪" },
  { name: "Front-End Development (ReactJS, JS, HTML/CSS)", icon: "💻" },
  { name: "Katalon & Selenium", icon: "🔍" },
  { name: "SQL / MySQL", icon: "🗄️" },
  { name: "Figma & Canva", icon: "✏️" },
  { name: "Git & Version Control", icon: "🔄" },
  { name: "Bootstrap & Responsive Design", icon: "📱" },
];

const softSkills = [
  { name: "Problem Solving", icon: "🧠" },
  { name: "Attention to Detail", icon: "🔎" },
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Fast Learner & Adaptability", icon: "🚀" },
  { name: "Effective Communication", icon: "💬" },
  { name: "Time Management", icon: "⏰" },
  { name: "User-Centered Thinking", icon: "👥" },
];

const About = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
      minHeight: '100vh',
      color: '#e0e7ff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 60%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(236,72,153,0.10) 0%, transparent 70%)', borderRadius: '50%' }} />
      </div>

      {/* ABOUT ME */}
      <section id="about" style={{ padding: '140px 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(4rem, 10vw, 7rem)',
              fontWeight: '900',
              textAlign: 'center',
              marginBottom: '60px',
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              padding: '60px 48px',
              borderRadius: '40px',
              backdropFilter: 'blur(24px)',
              background: 'rgba(30,27,75,0.55)',
              border: '1px solid rgba(96,165,250,0.3)',
              boxShadow: '0 30px 90px rgba(0,0,0,0.6)',
              maxWidth: '920px',
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-50%',
                background: 'linear-gradient(45deg, transparent, rgba(96,165,250,0.08), transparent)',
                transform: 'rotate(45deg)',
                animation: 'shine 14s infinite linear',
                pointerEvents: 'none',
              }}
            />

            <p style={{ fontSize: 'clamp(1.4rem, 4.5vw, 1.8rem)', lineHeight: '1.9', marginBottom: '32px', color: '#e0e7ff', fontWeight: '500' }}>
              Hello! I'm <strong>Nokatri Sitinjak</strong>, an IT student obsessed with creating digital experiences that are <strong>flawless</strong>, <strong>beautiful</strong>, and genuinely <strong>user-friendly</strong>.
            </p>

            <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '32px' }}>
              I live at the crossroads of <strong>Quality Assurance</strong>, <strong>UI/UX Design</strong>, <strong>Front-End Development</strong>, and <strong>Business Analysis</strong>. My mission: build products that don't just work — they <strong>delight</strong> and <strong>perform</strong> perfectly.
            </p>

            <p style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.45rem)', lineHeight: '1.8', color: '#cbd5e1' }}>
              Curious by nature, I embrace challenges, learn fast, and love collaborating (or going solo) to turn ideas into polished, impactful solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS CARDS */}
      <section style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              textAlign: 'center',
            }}
          >
            {[
              { number: "5+", label: "Featured Projects", color: "#60a5fa" },
              { number: "10+", label: "Skills", color: "#c084fc" },
              { number: "2+", label: "Years", sublabel: "Real Experience", color: "#fb923c" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ scale: 1.05, y: -10 }}
                style={{
                  padding: '40px 24px',
                  borderRadius: '24px',
                  background: 'rgba(30,27,75,0.55)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(96,165,250,0.25)',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                    fontWeight: '900',
                    background: `linear-gradient(90deg, ${stat.color}, #ec4899)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '12px',
                  }}
                >
                  {stat.number}
                </div>
                <p style={{ fontSize: '1.4rem', fontWeight: '700', color: '#e0e7ff', marginBottom: '8px' }}>
                  {stat.label}
                </p>
                {stat.sublabel && (
                  <p style={{ fontSize: '1.1rem', color: '#93c5fd' }}>
                    {stat.sublabel}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HARD SKILLS & SOFT SKILLS */}
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            {/* HARD SKILLS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                fontWeight: '800',
                textAlign: 'center',
                marginBottom: '40px',
                background: 'linear-gradient(90deg, #60a5fa, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Hard Skills
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}>
                {hardSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    style={{
                      padding: '20px 16px',
                      borderRadius: '16px',
                      background: 'rgba(30,27,75,0.5)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(96,165,250,0.25)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{skill.icon}</div>
                    <p style={{ fontSize: '1.15rem', fontWeight: '600', color: '#e0e7ff' }}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* SOFT SKILLS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{
                fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                fontWeight: '800',
                textAlign: 'center',
                marginBottom: '40px',
                background: 'linear-gradient(90deg, #ec4899, #fb923c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Soft Skills
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
              }}>
                {softSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    style={{
                      padding: '20px 16px',
                      borderRadius: '16px',
                      background: 'rgba(30,27,75,0.5)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(236,72,153,0.25)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>{skill.icon}</div>
                    <p style={{ fontSize: '1.15rem', fontWeight: '600', color: '#e0e7ff' }}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '40px' }}>
            {/* IT Del Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 35px 90px rgba(96,165,250,0.4)' }}
              style={{
                padding: '40px',
                borderRadius: '32px',
                backdropFilter: 'blur(20px)',
                background: 'rgba(30,27,75,0.5)',
                border: '1px solid rgba(96,165,250,0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                <img src="/logo del.jpg" alt="IT Del" style={{ width: '120px', height: '120px', borderRadius: '24px', objectFit: 'contain' }} />
                <div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '8px' }}>Institut Teknologi Del</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1.25rem' }}>Laguboti, Toba, Sumatera Utara</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <span style={{ padding: '12px 24px', background: 'rgba(96,165,250,0.2)', borderRadius: '999px', fontWeight: '600', color: '#60a5fa' }}>
                  D-III Teknologi Informasi
                </span>
                <span style={{ padding: '12px 24px', background: 'linear-gradient(90deg, #60a5fa, #3b82f6)', borderRadius: '999px', color: 'white', fontWeight: '700' }}>
                  2023 – 2026
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ padding: '16px 20px', background: 'rgba(96,165,250,0.2)', borderRadius: '16px', minWidth: '180px' }}>
                  <div style={{ fontWeight: '700', color: '#60a5fa' }}>UI/UX Design</div>
                  <div style={{ color: '#93c5fd' }}>Design & User Research</div>
                </div>
                <div style={{ padding: '16px 20px', background: 'rgba(139,92,246,0.2)', borderRadius: '16px', minWidth: '180px' }}>
                  <div style={{ fontWeight: '700', color: '#c084fc' }}>Quality Assurance</div>
                  <div style={{ color: '#e0c0ff' }}>Manual & Automation Testing</div>
                </div>
              </div>
            </motion.div>

            {/* SMA Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: '0 35px 90px rgba(236,72,153,0.4)' }}
              style={{
                padding: '40px',
                borderRadius: '32px',
                backdropFilter: 'blur(20px)',
                background: 'rgba(30,27,75,0.5)',
                border: '1px solid rgba(96,165,250,0.35)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <img src="/sma 1 laguboti.jpg" alt="SMA" style={{ width: '120px', height: '120px', borderRadius: '24px', objectFit: 'contain' }} />
                <div>
                  <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '8px' }}>SMA Negeri 1 Laguboti</h3>
                  <p style={{ color: '#94a3b8', fontSize: '1.25rem' }}>Toba, Sumatera Utara • Jurusan IPA</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <span style={{ padding: '12px 28px', background: 'linear-gradient(90deg, #60a5fa, #3b82f6)', borderRadius: '999px', color: 'white', fontWeight: '700', alignSelf: 'flex-start' }}>
                  2019 – 2022
                </span>
                <div style={{ padding: '20px 28px', background: 'rgba(139,92,246,0.25)', borderRadius: '20px', border: '1px solid rgba(139,92,246,0.4)', alignSelf: 'flex-start' }}>
                  <p style={{ fontWeight: '800', fontSize: '1.45rem', margin: 0, color: '#e0aaff' }}>Sekretaris OSIS</p>
                  <p style={{ color: '#c084fc', margin: '8px 0 0' }}>2020 – 2022 • 2 tahun berturut-turut</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Certificates & Awards
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {certificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.07, y: -14 }}
                style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', display: 'block' }}
              >
                <div style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 50px rgba(0,0,0,0.5)',
                  background: 'rgba(30,27,75,0.55)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(96,165,250,0.3)',
                }}>
                  <div style={{ position: 'relative' }}>
                    <img
                      src={cert.thumb}
                      alt={cert.title}
                      style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(30,27,75,0.8), transparent)',
                      opacity: 0,
                      transition: 'opacity 0.5s',
                    }}
                      className="overlay"
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '8px', color: '#e0e7ff' }}>{cert.title}</h3>
                    <p style={{ color: '#93c5fd', fontSize: '1rem' }}>{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                <style jsx>{`
                  div:hover .overlay { opacity: 1; }
                  div:hover img { transform: scale(1.1); }
                `}</style>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: '100px 24px 140px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 4.5rem)',
              textAlign: 'center',
              marginBottom: '80px',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #60a5fa, #c084fc, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -18, boxShadow: '0 45px 110px rgba(96,165,250,0.4)' }}
                style={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: 'rgba(30,27,75,0.55)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(96,165,250,0.3)',
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onError={e => e.target.src = "https://via.placeholder.com/600x400/1e293b/e0e7ff?text=Project"}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent, rgba(30,27,75,0.85))',
                    opacity: 0,
                    transition: 'opacity 0.5s',
                  }}
                    className="proj-overlay"
                  />
                </div>

                <div style={{ padding: '32px' }}>
                  <h3 style={{
                    fontSize: '1.65rem',
                    fontWeight: '900',
                    background: 'linear-gradient(90deg, #60a5fa, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '16px',
                  }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '20px', color: '#cbd5e1' }}>
                    {proj.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                    {proj.tech.split(' • ').map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '8px 16px',
                          background: 'rgba(96,165,250,0.18)',
                          borderRadius: '999px',
                          fontSize: '0.95rem',
                          color: '#93c5fd',
                          border: '1px solid rgba(96,165,250,0.35)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 24px',
                          background: 'rgba(96,165,250,0.18)',
                          borderRadius: '999px',
                          color: '#60a5fa',
                          fontWeight: '600',
                          border: '1px solid rgba(96,165,250,0.4)',
                          transition: 'all 0.35s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(96,165,250,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(96,165,250,0.18)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                      >
                        <Github size={18} /> Source Code
                      </a>
                    )}
                    {proj.figma && (
                      <a
                        href={proj.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 24px',
                          background: 'rgba(236,72,153,0.18)',
                          borderRadius: '999px',
                          color: '#ec4899',
                          fontWeight: '600',
                          border: '1px solid rgba(236,72,153,0.4)',
                          transition: 'all 0.35s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(236,72,153,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(236,72,153,0.18)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                      >
                        <ExternalLink size={18} /> View Figma
                      </a>
                    )}
                  </div>
                </div>

                <style jsx>{`
                  div:hover img { transform: scale(1.12); }
                  div:hover .proj-overlay { opacity: 1; }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animasi shine global */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>
    </div>
  );
};

export default About;