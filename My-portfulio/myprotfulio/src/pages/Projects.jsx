// src/pages/Projects.jsx
import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects container fade-in">
      <div className="section-heading text-center">
        <h2>Projects</h2>
        <p>Beautifully crafted full-stack & frontend projects based on real-world needs.</p>
      </div>

      <div className="row g-4">

        {/* PROJECT 1 — DailyPulse */}
        <div className="col-md-4">
          <article className="project-card card-3d">
            {/* <img src="/projects/dailypulse.png" className="project-img" alt="DailyPulse" /> */}

            <span className="badge role">FRONTEND + FIREBASE</span>

            <h3>DailyPulse – Habit Tracking App</h3>

            {/* Tech badges */}
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
              <a href="#" className="btn btn-sm btn-outline-light">GitHub</a>
              <a href="#" className="btn btn-sm btn-primary">Live Demo</a>
            </div>
          </article>
        </div>

        {/* PROJECT 2 — VolunteerHub */}
        <div className="col-md-4">
          <article className="project-card card-3d">
            {/* <img src="/projects/volunteerhub.png" className="project-img" alt="VolunteerHub" /> */}

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
              A responsive platform connecting volunteers with NGOs with real-time
              data sync, secure login, admin dashboards & activity management.
            </p>

            <div className="project-actions">
              <a href="#" className="btn btn-sm btn-outline-light">GitHub</a>
            </div>
          </article>
        </div>

        {/* PROJECT 3 — Certificate Verification */}
        <div className="col-md-4">
          <article className="project-card card-3d">
            {/* <img src="/projects/certificate.png" className="project-img" alt="Certificate Verification" /> */}

            <span className="badge role">BACKEND + DB</span>

            <h3>Academic Certificate Verification</h3>

            <div className="tech-badges">
              <span>JSP</span>
              <span>Servlets</span>
              <span>Java</span>
              <span>MySQL</span>
            </div>

            <p className="desc">
              A secure web portal to generate & verify student certificates
              using unique IDs with admin-controlled uploading.
            </p>

            <div className="project-actions">
              <a href="#" className="btn btn-sm btn-outline-light">GitHub</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
