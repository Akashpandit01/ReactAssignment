import React from "react";
import { useTimer } from "./useTimer";

export default function TimerComponent() {
  const { timer, isRunning, startTimer, stopTimer, resetTimer } = useTimer();

  return (
    <div>
      <h2>Timer: {timer} seconds</h2>
      <p>Running: {isRunning ? "Yes" : "No"}</p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
