// src/pages/Projects.jsx
import "../styles/projects.css";
import dalypulse1 from "../assets/tech/dalypulse1.png";
import voluntirehub from "../assets/tech/voluntirehub.png";


function Projects() {
  return (
    <section className="projects container fade-in">
      <div className="section-heading text-center">
        <h2>Projects</h2>
        <p>Beautifully crafted full-stack & frontend projects based on real-world needs.</p>
      </div>

      <div className="row g-4">

        {/* PROJECT 1 — DailyPulse */}
        <div className="col-md-6">
          <article className="project-card card-3d">
            <img src={dalypulse1} className="project-img" alt="DailyPulse" />

            <span className="badge role">FRONTEND + FIREBASE</span>

            <h3>DailyPulse – Habit Tracking App</h3>

            <div className="tech-badges">
              <span>React</span>
              <span>TypeScript</span>
              <span>Firebase</span>
              <span>Tailwind CSS</span>
            </div>

            <p className="desc">
              A modern full-featured habit tracking app with mood analytics,
              streak counters, cloud sync & user authentication.
            </p>

            <div className="project-actions">
              <a
                href="https://github.com/mrpawarGit/DailyPulse-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light"
              >
                GitHub
              </a>
              <a
                href="https://daily-pulse-app.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>

        {/* PROJECT 2 — VolunteerHub */}
        <div className="col-md-6">
          <article className="project-card card-3d">
            <img src={voluntirehub} className="project-img" alt="VolunteerHub" />

            <span className="badge role">FULL STACK</span>

            <h3>VolunteerHub – Volunteer Management Platform</h3>

            <div className="tech-badges">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Firebase</span>
            </div>

            <p className="desc">
              A responsive platform connecting volunteers with NGOs, featuring
              real-time data sync, secure login, admin dashboards & activity management.
            </p>

            <div className="project-actions">
              <a
                href="https://github.com/Akashpandit01/Voluntier-Hub"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-light"
              >
                GitHub
              </a>

              <a
                href="https://prismatic-gumption-0874a1.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}

export default Projects;
