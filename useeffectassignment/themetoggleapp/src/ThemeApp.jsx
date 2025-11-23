import React, { useState, useEffect } from "react";
import ThemedBox from "./ThemedBox";

function ThemeApp() {
  // Load from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Store theme on every change
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const appStyle = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#121212",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    transition: "0.4s",
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      <div style={{ marginTop: "20px" }}>
        <ThemedBox theme={theme} text="Box 1" />
        <ThemedBox theme={theme} text="Box 2" />
        <ThemedBox theme={theme} text="Box 3" />
      </div>
    </div>
  );
}

export default ThemeApp;
