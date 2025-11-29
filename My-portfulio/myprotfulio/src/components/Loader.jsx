// src/components/Loader.jsx
import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
      <p className="loader-text">Loading portfolio...</p>
    </div>
  );
}

export default Loader;
