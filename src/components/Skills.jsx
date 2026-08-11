const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Java', 'Spring Boot', 'Spring Framework', 'REST APIs', 'Microservices', 'ABAP'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Data & Storage',
    icon: '🗄️',
    skills: ['PostgreSQL', 'SQL', 'PostGIS', 'Hibernate / JPA'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Docker', 'Git', 'Maven', 'Linux', 'Playwright', 'CI/CD'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <p className="section-subtitle">What I Know</p>
        <h2 className="section-title mb-4">Technical Skills</h2>
        <p className="text-gray-500 mb-12 text-lg">
          ~10 years of backend engineering with a growing full-stack toolkit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <div key={category.title} className="card p-6 flex flex-col gap-4">
              <div>
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-teal-400 font-semibold text-sm uppercase tracking-wider mt-2">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture & patterns callout */}
        <div className="mt-8 card p-6 border-teal-400/20">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-3">Also experienced with</p>
          <div className="flex flex-wrap gap-2">
            {[
              'API Gateways',
              'Service Discovery',
              'Container Orchestration',
              'Integration Architecture',
              'Event-Driven Systems',
              'OpenStreetMap / Overpass API',
              'Geocoding (Nominatim)',
            ].map((item) => (
              <span key={item} className="skill-badge text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
