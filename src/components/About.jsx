import photo from '../assets/photo.jpg';

const education = [
  {
    degree: 'M.S. Software Development',
    school: 'Boston University',
    year: '2024',
  },
  {
    degree: 'B.S. Physics, Minor: Applied Mathematics',
    school: 'University of Massachusetts Amherst',
    year: '2017',
  },
];

const interests = ['Hockey', 'Mandarin', 'System Design', 'Open Source', 'Game Dev'];

const About = () => {
  return (
    <section id="about" className="bg-gray-900/30">
      <div className="section-container">
        <p className="section-subtitle">Who I Am</p>
        <h2 className="section-title mb-12">About Me</h2>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-400/30 transition-colors duration-300">
              <img
                src={photo}
                alt="Andrew Ouellette"
                className="w-full aspect-[3/4] object-cover object-top"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-5 flex flex-col justify-center">
            <p className="text-gray-300 leading-relaxed text-lg">
              Senior Software Engineer with nearly a decade of experience building and modernizing
              enterprise applications and integrations. Strong background in{' '}
              <span className="text-teal-400 font-medium">Java</span>,{' '}
              <span className="text-teal-400 font-medium">Spring Boot</span>,{' '}
              <span className="text-teal-400 font-medium">SAP ecosystems</span>, APIs, and
              cloud-based integration platforms.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Proven ability to replace legacy architectures with scalable, secure, and future-ready
              solutions used by large global organizations. Outside of work I'm an avid hockey
              player and an aspiring Mandarin speaker.
            </p>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="skill-badge">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {education.map((edu) => (
                <div key={edu.degree} className="card p-4">
                  <p className="text-teal-400 font-semibold text-sm">{edu.degree}</p>
                  <p className="text-white mt-1 text-sm font-medium">{edu.school}</p>
                  <p className="text-gray-500 text-xs mt-1">{edu.year}</p>
                </div>
              ))}
              <div className="card p-4">
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">Based in</p>
                <p className="text-white font-medium text-sm">Greater Boston Area</p>
                <p className="text-gray-500 text-xs">Massachusetts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
