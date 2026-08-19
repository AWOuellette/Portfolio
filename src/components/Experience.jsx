const jobs = [
  {
    title: 'SAP Developer',
    company: 'MassMutual',
    location: 'Boston, MA (Hybrid)',
    period: 'Feb 2025 – Present',
    current: true,
    bullets: [
      'Design and implement modern integration solutions across SAP environments in collaboration with cross-functional teams.',
      'Migrate from SAP PI/XI to SAP Cloud Platform Integration (CPI), owning the migration process and end to end implementation.',
      'Lead modernization efforts replacing legacy SOAP services with RESTful APIs and scalable integration patterns.',
      'Contribute to technical architecture decisions, ensuring security, performance, and long-term maintainability.',
    ],
  },
  {
    title: 'Software Engineer II',
    company: 'Enterprise Information Resources (EIR)',
    location: 'Waltham, MA',
    period: '2019 – Jan 2025',
    bullets: [
      'Developed and maintained COMPstream, a cloud-based SAP SuccessFactors extension for enterprise compensation management.',
      'Implemented Java- and SQL-based processes integrating SAP SuccessFactors via OData APIs.',
      'Led development of a global payroll reporting solution supporting 30,000+ employees across 40+ countries.',
      'Full-stack contributor to analytics applications across SAPUI5, Spring Boot, and SAP HANA.',
      'Served as lead developer for SAP Cloud Platform Integration (CPI) solutions.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'MEDITECH',
    location: 'Westwood, MA',
    period: '2018 – 2019',
    bullets: [
      'Enhanced and maintained front-end charting features in the EXPANSE healthcare web application.',
      'Implemented secure access features for patient chart pages.',
      'Debugged, reviewed, and resolved application issues within Agile development cycles.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-container">
        <p className="section-subtitle">Where I've Worked</p>
        <h2 className="section-title mb-12">Experience</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 ml-3 hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job) => (
              <div key={job.title + job.company} className="md:pl-12 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-2 hidden md:flex items-center justify-center
                    ${job.current ? 'border-teal-400 bg-teal-400/20' : 'border-gray-600 bg-gray-900'}`}
                >
                  {job.current && <div className="w-2 h-2 rounded-full bg-teal-400" />}
                </div>

                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.title}</h3>
                      <p className="text-teal-400 font-medium">{job.company}</p>
                      <p className="text-gray-500 text-sm">{job.location}</p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1.5 rounded-full border shrink-0 self-start
                        ${job.current
                          ? 'bg-teal-400/10 text-teal-400 border-teal-400/30'
                          : 'bg-gray-800 text-gray-400 border-gray-700'}`}
                    >
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-teal-400 mt-1.5 shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
