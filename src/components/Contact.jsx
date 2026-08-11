const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container text-center">
        <p className="section-subtitle">Let's Connect</p>
        <h2 className="section-title mb-4">Get in Touch</h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-12 text-lg leading-relaxed">
          Whether you have an opportunity, a question, or just want to talk about hockey —
          my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:andrewouellette1993@gmail.com"
            className="bg-teal-400 text-gray-950 font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-300 transition-colors duration-200"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/awouellette/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400/60 text-teal-400 font-semibold px-8 py-3.5 rounded-lg hover:bg-teal-400/10 hover:border-teal-400 transition-all duration-200"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/awouellette"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-400 font-semibold px-8 py-3.5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
          >
            GitHub
          </a>
        </div>

        {/* Quick links footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© 2026 Andrew Ouellette</p>
          <div className="flex gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-gray-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <p>Built with React + Vite + Tailwind</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
