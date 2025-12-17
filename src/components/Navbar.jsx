import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        gap: 28, // sedikit lebih lebar biar nyaman
        alignItems: "center",
        fontSize: "1.1rem",
      }}
    >
      <a
        href="#about"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        About Me
      </a>
      <a
        href="#education"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Education
      </a>
      <a
        href="#certificates"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Sertifikat
      </a>
      <a
        href="#projects"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Projects
      </a>
      <a
        href="#Tools"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Skills & Tools
      </a>
      <a
        href="#contact"
        style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
      >
        Hubungi
      </a>
    </nav>
  );
}

export default Navbar;