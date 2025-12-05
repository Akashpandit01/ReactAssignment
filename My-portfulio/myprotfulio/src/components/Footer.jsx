// src/components/Footer.jsx
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          © {new Date().getFullYear()} Akash Pandit. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://github.com/Akashpandit01" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akash-pandit-aa987b1aa/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
         <a href="mailto:akashpandit3052@gmail.com">Email</a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
