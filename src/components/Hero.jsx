const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(45,212,191,0.08),transparent)]" />

      <div className="section-container relative z-10 text-center max-w-4xl">
        <p className="section-subtitle animate-fade-in-up opacity-0-start" style={{ opacity: 1 }}>
          Senior Software Engineer
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          <span className="gradient-text">Andrew</span>
          <br />
          <span className="text-white">Ouellette</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed animate-fade-in-up-delay">
          Backend engineer with ~10 years of experience building scalable systems, APIs,
          and enterprise integrations. Java &amp; Spring Boot at the core — full-stack when needed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <a
            href="#projects"
            className="bg-teal-400 text-gray-950 font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-300 transition-colors duration-200 text-sm md:text-base"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="border border-teal-400/60 text-teal-400 font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-400/10 hover:border-teal-400 transition-all duration-200 text-sm md:text-base"
          >
            Get in Touch
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            download="Andrew_Ouellette_Resume"
            className="border border-gray-700 text-gray-300 font-semibold px-8 py-3.5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 text-sm md:text-base"
          >
            Resume ↓
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
