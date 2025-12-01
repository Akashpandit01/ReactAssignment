// src/pages/Resume.jsx
import "../styles/resume.css";

function Resume() {
  return (
  <section className="resume container fade-in">
  <div className="resume-header">
    <h2>Resume</h2>
    <a href="https://drive.google.com/file/d/1tfM45LMYNU8y1EKTQ8IAkB4sDFx8DhVJ/view?usp=sharing" className="btn btn-primary" target="_blank">
      Download PDF
    </a>
  </div>

  <div className="resume-body card-2d">
    <h3>Akash Pandit</h3>
    <p>Pune, Maharashtra | +91-8550959295 | akashpandit3052@gmail.com</p>

    <h4 className="mt-3">Summary</h4>
    <p>
      Aspiring Full Stack Developer with strong skills in React.js, Node.js, 
      JavaScript, REST APIs and scalable web applications. Excellent teamwork, 
      adaptability and problem-solving abilities.
    </p>

    <h4 className="mt-3">Education</h4>
    <ul>
      <li><strong>Masai School</strong> — Full Stack Web Development (2024 – Present)</li>
      <li><strong>B.E. Computer Engineering</strong>, CGPA 7.41 — Shivajiraje College (2019–2023)</li>
    </ul>

    <h4 className="mt-3">Technical Skills</h4>
    <ul>
      <li>JavaScript, Java, REST API, HTML, CSS</li>
      <li>React.js, Node.js, Express.js, Tailwind CSS</li>
      <li>MongoDB, MySQL, Firebase</li>
      <li>Git, VS Code, Postman</li>
    </ul>

    <h4 className="mt-3">Projects</h4>
    <ul>
      <li>DailyPulse – Habit Tracking Application</li>
      <li>VolunteerHub – Volunteer Management System</li>
      <li>Academic Certificate Verification System</li>
    </ul>

    <h4 className="mt-3">Certifications</h4>
    <ul>
      <li>Java Full Stack – Giri's Tech Hub</li>
    </ul>

    <h4 className="mt-3">Achievements</h4>
    <ul>
      <li>Top 3 position in Masai Hackathon (in partnership with NoBroker)</li>
    </ul>
  </div>
</section>
  );
}

export default Resume;
