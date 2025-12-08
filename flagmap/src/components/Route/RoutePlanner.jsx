import React, { useState, useCallback } from "react";
import { getRouteOSRM } from "../../api/routing";

export default function RoutePlanner({ from, to, onRoute }) {
  const [loading, setLoading] = useState(false);

  const computeRoute = useCallback(async () => {
    if (!from || !to) {
      alert("Please select both source & destination.");
      return;
    }

    setLoading(true);

    try {
      const route = await getRouteOSRM(from, to);
      if (!route) {
        alert("No route found!");
        return;
      }

      onRoute(route); // Send route back to App.jsx
    } catch (error) {
      console.error("Route error:", error);
      alert("Failed to compute route!");
    } finally {
      setLoading(false);
    }
  }, [from, to, onRoute]);

  return (
    <div style={{ marginTop: 10 }}>
      <button
        onClick={computeRoute}
        disabled={!from || !to || loading}
        style={{
          padding: "10px 14px",
          borderRadius: "8px",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          width: "100%",
          fontWeight: 600,
        }}
      >
        {loading ? "Calculating Route..." : "Get Route"}
      </button>
    </div>
  );
}
