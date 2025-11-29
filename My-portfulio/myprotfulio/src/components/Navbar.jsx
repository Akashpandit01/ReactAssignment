// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-main shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* LOGO */}
        <div
          className="d-flex align-items-center nav-logo"
          onClick={() => setOpen(false)}
        >
          <span className="nav-logo-circle">AP</span>
          <span className="nav-logo-text">Akash Pandit</span>
        </div>

        {/* HAMBURGER */}
        <button
          className="nav-toggle d-md-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* LINKS */}
        <div className={`nav-links d-md-flex ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/tech" onClick={() => setOpen(false)}>Skills</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <NavLink
            to="/resume"
            onClick={() => setOpen(false)}
            className="resume-btn"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
