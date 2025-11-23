import React, { useEffect, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Free sound URL (public domain)
  const soundUrl = "https://www.soundjay.com/buttons/sounds/beep-07.mp3";

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup to avoid memory leaks
    return () => clearInterval(timer);
  }, [isRunning]);

  // Play sound after 10 seconds
  useEffect(() => {
    if (seconds === 10) {
      const audio = new Audio(soundUrl);
      audio.play();

      console.log("⏰ Alarm! 10 seconds reached.");
    }
  }, [seconds]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    time: {
      fontSize: "40px",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      margin: "5px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    startBtn: { backgroundColor: "green", color: "white" },
    stopBtn: { backgroundColor: "red", color: "white" },
  };

  return (
    <div style={styles.container}>
      <h1>Stopwatch</h1>

      <h2 style={styles.time}>{seconds}s</h2>

      <button
        style={{ ...styles.button, ...styles.startBtn }}
        onClick={start}
        disabled={isRunning}
      >
        Start
      </button>

      <button
        style={{ ...styles.button, ...styles.stopBtn }}
        onClick={stop}
        disabled={!isRunning}
      >
        Stop
      </button>
    </div>
  );
}

export default Stopwatch;
