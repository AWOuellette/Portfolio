const projects = [
  {
    title: 'Ice Finder',
    description:
      'A hockey ice time aggregator that scrapes stick times, puck times, pick-up hockey, and public skates from PowerPlayHockey, StinkySocks, and individual rink websites — consolidating them into one searchable calendar. Enter an address + radius + session type and get a map/calendar view of all nearby ice.',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'React', 'Playwright', 'Docker', 'OpenStreetMap'],
    github: 'https://github.com/AWOuellette',
    status: 'In Progress',
    highlight: true,
  },
  {
    title: 'SoloSavings',
    description:
      'A full-featured personal budgeting and financial management application. Helps users create budgets, track expenses, and work toward financial goals. Fully deployed with live demo, complete database schema, use-case diagrams, and architecture documentation.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/AWOuellette/SoloSavings',
    live: 'https://solosavings.wanl.blue',
    status: 'Deployed',
  },
  {
    title: 'Java 2D Tile Game',
    description:
      'A 2D tile-based game built from the ground up in Java — complete with a custom lightweight game engine (BackboneEngine) to simplify future game scaffolding. Demonstrates core game loop mechanics, sprite rendering, tile maps, and collision detection.',
    tech: ['Java', 'Swing', 'OOP', 'Custom Game Engine'],
    github: 'https://github.com/wforte4/Java2dTileGame',
    status: 'Complete',
  },
  {
    title: 'Task Manager',
    description:
      'A task management application built with React featuring real-time state updates and an intuitive interface for productivity tracking. Demonstrates React component design, state management, and modern JavaScript patterns.',
    tech: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/AWOuellette',
    status: 'Complete',
  },
];

const statusStyles = {
  'In Progress': 'bg-amber-400/10 text-amber-400 border-amber-400/30',
  Deployed: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30',
  Complete: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
};

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900/30">
      <div className="section-container">
        <p className="section-subtitle">What I've Built</p>
        <h2 className="section-title mb-4">Projects</h2>
        <p className="text-gray-500 mb-12 text-lg">
          A mix of side projects that scratch real itches and experiments to learn new things.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card p-7 flex flex-col ${
                project.highlight ? 'border-teal-400/30 bg-teal-400/5' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-md border ml-3 shrink-0 ${statusStyles[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mb-5 flex-1 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 pt-2 border-t border-gray-800">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200 font-medium"
                >
                  GitHub <ArrowIcon />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-200 font-medium"
                  >
                    Live Demo <ArrowIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
