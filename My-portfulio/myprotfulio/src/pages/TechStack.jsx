// src/pages/TechStack.jsx
import "../styles/tech.css";

function TechStack() {
  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Java", "Spring Boot", "Node.js", "Express.js"],
    "Database": ["MySQL", "MongoDB", "Firebase"],
    "Tools": ["Git & GitHub", "Postman", "VS Code"],
  };

  return (
    <section className="tech container fade-in">
      <div className="section-heading text-center">
        <h2>Technical Skills</h2>
        <p>A clean list of all technologies I work with.</p>
      </div>

      <div className="row g-4 mt-3">

        {Object.keys(skills).map((category) => (
          <div key={category} className="col-md-6">
            <div className="skill-card card-2d">
              <h3>{category}</h3>
              <ul className="skill-list">
                {skills[category].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default TechStack;
