import React from "react";
import myPhoto from "../assets/me.jpg";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
  });
};

const Hero = () => {
  const roles = [
    {
      text: "Quality Assurance Engineer",
      color: "border-blue-400 text-blue-400",
    },
    {
      text: "UI/UX Enthusiast",
      color: "border-purple-400 text-purple-400",
    },
    {
      text: "Front-End Developer",
      color: "border-pink-400 text-pink-400",
    },
    {
      text: "Business Analyst",
      color: "border-orange-400 text-orange-400",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e1f] px-6 py-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-24">

        {/* FOTO */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-[0_0_40px_rgba(59,130,246,.4)]">
            <img
              src={myPhoto}
              alt="Nokatri Sitinjak"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-2xl text-center lg:text-left">

          <p className="text-blue-400 uppercase tracking-[4px] font-semibold text-sm md:text-lg">
            Hey There, I'm
          </p>

          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
            Nokatri <br /> Sitinjak
          </h1>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            {roles.map((role) => (
              <span
                key={role.text}
                className={`px-5 py-2 rounded-full border-2 font-semibold ${role.color} transition hover:scale-105`}
              >
                {role.text}
              </span>
            ))}
          </div>

          {/* DESCRIPTION */}
          <div className="mt-8 rounded-2xl border border-blue-400/20 bg-slate-900/60 backdrop-blur-md p-6 md:p-8">
            <p className="text-slate-300 leading-8 text-base md:text-lg">
              Delivering <strong>high-quality</strong>,
              <strong> user-centered</strong> digital products —
              from flawless functionality to intuitive and beautiful
              experiences.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">

            <a
              href="/CVNokatri.pdf"
              download
              className="px-8 py-4 rounded-xl bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600 transition"
            >
              Download CV
            </a>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl border-2 border-blue-400 text-blue-400 font-bold hover:bg-blue-400/10 transition"
            >
              Hire Me
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;