import { useEffect, useState, useRef, useCallback } from "react";

export default function useGeolocation(
  options = {
    enableHighAccuracy: true,
    maximumAge: 5000,
    timeout: 10000,
  }
) {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const watchId = useRef(null);

  const start = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    watchId.current = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setError(null); // clear old errors
      },
      (err) => {
        let message = "";

        switch (err.code) {
          case 1:
            message = "Permission denied. Please allow location access.";
            break;
          case 2:
            message = "Position unavailable.";
            break;
          case 3:
            message = "Location request timed out.";
            break;
          default:
            message = "Unknown geolocation error.";
        }

        setError(message);
        console.warn("Geolocation error:", message);
      },
      options
    );
  }, [options]);

  const stop = useCallback(() => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
    }
  }, []);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  return { position, error, start, stop };
}
