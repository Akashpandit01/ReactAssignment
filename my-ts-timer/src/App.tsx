import React from "react";
import { Timer } from "./components/Timer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>TypeScript + React — Timer App</h1>

      {/* using optional prop initialSeconds and custom tick interval */}
      <Timer initialSeconds={5} tickIntervalMs={1000} />

      {/* Timer with defaults */}
      <Timer />
    </div>
  );
}

export default App;
