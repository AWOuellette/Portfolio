const projects = [
  {
    title: 'BU Course Inquiry',
    description:
      'Full-stack web app that helps Boston University students browse courses, read peer reviews, and discover tips for succeeding in specific classes. Admins manage course listings through a secured API.',
    tech: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Spring Security', 'Docker', 'Material UI'],
    github: 'https://github.com/AWOuellette/BU-CS633-Team-5',
    live: 'https://bu-course-inquiry.onrender.com/',
    status: 'Deployed',
  },
  {
    title: 'SoloSavings',
    description:
      'Personal budgeting and financial management application. Helps users create budgets, track expenses, and work toward financial goals. Includes full architecture documentation, database schema, and use-case diagrams.',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/AWOuellette/SoloSavings',
    live: 'https://solosavings.wanl.blue',
    status: 'Deployed',
  },
  {
    title: 'AXIOM.MARKETS',
    description:
      'Fully client-side stock intelligence dashboard that fetches live price data from Yahoo Finance and runs 7 technical indicators (RSI, SMA, EMA, MACD, Bollinger Bands, ATR, Volatility) entirely in the browser. Produces a weighted STRONG BUY → STRONG SELL recommendation with dynamic price targets.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Yahoo Finance API'],
    github: 'https://github.com/AWOuellette/Stock-Analyzer',
    live: 'https://awouellette.github.io/Stock-Analyzer/',
    status: 'Deployed',
  },
  {
    title: 'Spring React Todo App',
    description:
      'Full-stack todo management application with JWT authentication. Users can log in then create, view, update, and delete personal todo items with descriptions and target dates.',
    tech: ['Java', 'Spring Boot', 'React', 'JWT', 'Spring Security', 'H2', 'Bootstrap'],
    github: 'https://github.com/AWOuellette/Spring-React-Web-App',
    status: 'Complete',
  },
  {
    title: 'Homies',
    description:
      'Android app that helps roommates coordinate and manage everything related to living together. Create homes, track reminders, manage roommate info, swipe to delete, and mark favorites — all stored locally via Room.',
    tech: ['Kotlin', 'Android', 'MVVM', 'Room', 'Material Design', 'Espresso'],
    github: 'https://github.com/AWOuellette/Kotlin',
    live: 'https://www.youtube.com/watch?v=JN6Vcm-0h_s',
    liveLabel: 'Demo',
    status: 'Complete',
  },
  {
    title: 'League of Legends Analytics DB',
    description:
      'Relational database design project modeling player match statistics for a LoL analytics site. Tracks players, champions, items, purchases, and historical price changes via stored procedures, triggers, and views.',
    tech: ['Oracle SQL', 'PL/SQL', 'DDL/DML', 'Stored Procedures', 'Triggers'],
    github: 'https://github.com/AWOuellette/DatabaseDesign',
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
            <div key={project.title} className="card p-7 flex flex-col">
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
                    {project.liveLabel ?? 'Live Demo'} <ArrowIcon />
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
