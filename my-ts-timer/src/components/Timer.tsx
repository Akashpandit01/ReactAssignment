import React, { useEffect, useRef, useState } from "react";

/**
 * TimerProps demonstrates declaring a props interface (reusable)
 * `initialSeconds` is optional and defaults to 0.
 */
export interface TimerProps {
  initialSeconds?: number; // optional prop
  tickIntervalMs?: number; // optional: interval in ms (default 1000)
}

const DEFAULT_TICK_MS = 1000;

export const Timer: React.FC<TimerProps> = ({
  initialSeconds = 0,
  tickIntervalMs = DEFAULT_TICK_MS,
}) => {
  // typed state: number
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  // typed state: whether timer is running
  const [running, setRunning] = useState<boolean>(false);

  // keep a ref for interval id to avoid stale closures and to ensure proper cleanup
  const intervalRef = useRef<number | null>(null);

  // Start timer: use functional updater to avoid dependency on stale `seconds`
  const start = () => {
    if (running) return;
    setRunning(true);

    // setInterval returns number in browser; clearInterval expects that id
    intervalRef.current = window.setInterval(() => {
      // functional updater is safest when updating based on previous state
      setSeconds((prev) => prev + 1);
    }, tickIntervalMs);
  };

  // Stop timer and cleanup interval
  const stop = () => {
    setRunning(false);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Reset timer to 0 (or initialSeconds) — keep running state intact (here we stop)
  const reset = (to: number = initialSeconds) => {
    setSeconds(to);
  };

  // cleanup on unmount (defensive)
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Display formatting helper (pure function)
  const format = (s: number) => {
    return `${s} s`;
  };

  return (
    <div className="timer-card">
      <h2>Timer</h2>
      <div className="timer-display">{format(seconds)}</div>

      <div className="timer-controls">
        <button onClick={start} disabled={running}>
          Start
        </button>
        <button onClick={stop} disabled={!running}>
          Stop
        </button>
        <button
          onClick={() => {
            reset(0);
            // optionally stop when resetting:
            stop();
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ marginTop: 8 }}>
        <small>Tick: {tickIntervalMs} ms • Running: {running ? "Yes" : "No"}</small>
      </div>
    </div>
  );
};
