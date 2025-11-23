import React from "react";

function ThemedBox({ theme, text }) {
  const boxStyle = {
    backgroundColor: theme === "light" ? "white" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow:
      theme === "light"
        ? "0 0 10px rgba(0,0,0,0.1)"
        : "0 0 10px rgba(255,255,255,0.1)",
    transition: "0.3s",
  };

  return <div style={boxStyle}>{text}</div>;
}

export default ThemedBox;
