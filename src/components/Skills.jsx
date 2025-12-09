import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "ReactJS", icon: "/icons/react.png" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    { name: "Minitab", icon: "/icons/minitab.png" },
    { name: "SQL", icon: "/icons/sql.png" },
  ];

  return (
    <section id="skills" style={{ padding: "140px 0" }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="gradient-text"
          style={{ fontSize: "3.2rem", textAlign: "center", marginBottom: "70px" }}
        >
          Skills
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "28px",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                padding: "32px",
                borderRadius: "18px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
              }}
            >
              <img src={skill.icon} alt={skill.name} style={{ width: "70px", marginBottom: "12px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
