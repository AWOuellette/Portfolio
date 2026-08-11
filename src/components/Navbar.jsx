import { useState, useEffect } from 'react';

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/95 backdrop-blur-md border-b border-gray-800/80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-teal-400 font-bold text-xl tracking-tight hover:text-teal-300 transition-colors">
          AO
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            download="Andrew_Ouellette_Resume"
            className="border border-gray-700 text-gray-300 text-sm font-semibold px-4 py-2 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-all duration-200"
          >
            Resume ↓
          </a>
          <a
            href="https://www.linkedin.com/in/awouellette/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 text-gray-950 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-teal-300 transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-teal-400 transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.html`}
            download="Andrew_Ouellette_Resume"
            className="border border-gray-700 text-gray-300 text-sm font-semibold px-4 py-2 rounded-lg text-center hover:border-teal-400 hover:text-teal-400 transition-all duration-200"
          >
            Resume ↓
          </a>
          <a
            href="https://www.linkedin.com/in/awouellette/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 text-gray-950 text-sm font-semibold px-4 py-2 rounded-lg text-center hover:bg-teal-300 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
