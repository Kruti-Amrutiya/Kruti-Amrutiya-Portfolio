const skillCategories = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Material UI",
    "Ant Design",
    "Bootstrap",
  ],
  Backend: ["Django", "Node.js", "Python", "Express.js"],
  Database: ["PostgreSQL", "MySQL", "FaunaDB", "MongoDB"],
  "DevOps / Tools": ["AWS", "Docker", "GitHub", "GitLab"],
};

export default function Skills() {
  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <p className="section-subtitle">
        A snapshot of the tools and technologies I use to build modern,
        efficient, and scalable web applications.
      </p>

      {Object.entries(skillCategories).map(([category, skills], i) => (
        <div key={i} className="skill-category">
          <h3>{category}</h3>
          <div className="skills">
            {skills.map((skill, index) => (
              <div
                className="skill-tag"
                key={index}
                title={`I enjoy working with ${skill}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
