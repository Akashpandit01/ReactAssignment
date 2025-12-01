// src/pages/Home.jsx
import "../styles/home.css";
import myphoto from "../assets/myphoto.jpg";

function Home() {
  return (
    <section className="home container fade-in">
      <div className="home-hero card-3d">
        <div className="home-text">
          <p className="home-hello">Hi, I'm</p>
          <h1 className="home-title">Akash Pandit</h1>
          <p className="home-role">Aspiring Full-Stack / Java Developer</p>

          <p className="home-description">
           <p>
  I am an aspiring Full Stack Developer with hands-on experience in React.js, 
  JavaScript, Node.js, REST APIs, and modern frontend tools. I enjoy solving 
  real-world problems and building scalable, user-friendly applications.
</p>

<p>
  I hold a B.E. in Computer Engineering and have worked on multiple industry-level 
  projects involving full-stack development, analytics dashboards, authentication, 
  and database-driven systems.
</p>

<p>
  I am passionate about clean code, continuous learning, and designing smooth 
  user experiences using best development practices.
</p>
          </p>

          <div className="home-buttons">
            <a className="btn btn-primary me-2" href="/resume">
              Download Resume
            </a>
            <a className="btn btn-outline-light" href="/projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="image-glow">
          <img src={myphoto} alt="Akash Pandit" />

          </div>
        </div>
      </div>

      {/* <div className="about card-2d mt-4">
        <h2>About Me</h2>
       <p>
  I am an aspiring Full Stack Developer with hands-on experience in React.js, 
  JavaScript, Node.js, REST APIs, and modern frontend tools. I enjoy solving 
  real-world problems and building scalable, user-friendly applications.
</p>

<p>
  I hold a B.E. in Computer Engineering and have worked on multiple industry-level 
  projects involving full-stack development, analytics dashboards, authentication, 
  and database-driven systems.
</p>

<p>
  I am passionate about clean code, continuous learning, and designing smooth 
  user experiences using best development practices.
</p>

      </div> */}
    </section>
  );
}

export default Home;
