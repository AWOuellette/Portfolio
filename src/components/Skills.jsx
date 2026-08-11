const skillCategories = [
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Java', 'Spring Boot', 'ABAP', 'REST APIs', 'OData', 'SAP Gateway', 'RAP'],
  },
  {
    title: 'SAP & Integration',
    icon: '🔗',
    skills: ['SAP SuccessFactors', 'SAP CPI', 'SAP PI/XI', 'SAP API Management', 'CDS Views', 'webMethods'],
  },
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: ['SAPUI5', 'React', 'JavaScript', 'HTML', 'CSS', 'JSP'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['SAP HANA', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠️',
    skills: ['Git', 'Kong (API Gateway)', 'Cloud Integrations', 'Agile / Scrum', 'Docker', 'Playwright'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <p className="section-subtitle">What I Know</p>
        <h2 className="section-title mb-4">Technical Skills</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Nearly a decade of backend and integration engineering across enterprise and cloud environments.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
};

export default Skills;
