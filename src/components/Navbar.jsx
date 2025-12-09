import React from "react";
import { Sun, Moon } from "lucide-react";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        display: 'flex',
        gap: 20,
        alignItems: 'center'
      }}
    >
      <a href="#about" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>About Me</a>
      <a href="#education" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>Education</a>
      <a href="#certificates" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>Sertifikat</a>
      <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>Projects</a>
      <a href="#Tools" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>Skills</a>
      <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600 }}>Hubungi</a>

      {/* tombol theme berada DI DALAM function */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
}

export default Navbar;
