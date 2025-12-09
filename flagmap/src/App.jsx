import React, { useState, useCallback, useMemo } from "react";
import MapView from "./components/Map/MapView";
import SearchBar from "./components/Search/SearchBar";
import RoutePlanner from "./components/Route/RoutePlanner";
import GeofenceManager from "./components/Geofence/GeofenceManager";
import useGeolocation from "./hooks/useGeolocation";

export default function App() {
  // Get live location + geolocation error
  const { position, error } = useGeolocation({
    enableHighAccuracy: true,
    maximumAge: 5000,
    timeout: 10000,
  });

  // Default center = India (in case geolocation is blocked)
  const defaultCenter = [20.5937, 78.9629];

  const [center, setCenter] = useState(defaultCenter);
  const [zoom] = useState(5);

  const [pois, setPois] = useState([]);
  const [selectedPoi, setSelectedPoi] = useState(null);
  const [route, setRoute] = useState(null);

  // If user grants location permission, recenter map ONCE
  React.useEffect(() => {
    if (position) {
      setCenter([position.lat, position.lng]);
    }
  }, [position]);

  const onMarkerClick = useCallback((poi) => {
    setSelectedPoi(poi);
  }, []);

  // Example dynamic geofence (center around current map center)
  const fences = useMemo(
    () => [
      {
        id: "home-zone",
        center: { lat: center[0], lng: center[1] },
        radiusMeters: 300,
        label: "Center Zone",
      },
    ],
    [center]
  );

  return (
    <div className="app-shell">
      {/* HEADER */}
      <div className="header">
        <h3 style={{ margin: 0 }}>React Map App — Demo</h3>
      </div>

      <div className="container">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          {/* Search */}
          <SearchBar onSearchResults={setPois} onCenter={setCenter} />

          {/* Geolocation status */}
          {error && (
            <div style={{ color: "#f87171", fontSize: 13, marginTop: 10 }}>
              ⚠️ {error}
            </div>
          )}

          {/* POI List */}
          <div className="poi-list">
            <h4>Search Results</h4>
            {pois.length === 0 && (
              <div className="small">No results. Try a different search.</div>
            )}

            {pois.map((p) => (
              <div
                key={p.id}
                className="poi-item"
                onClick={() => setCenter([p.lat, p.lng])}
              >
                <div><strong>{p.name}</strong></div>
                <div className="small">{p.raw?.type || "place"}</div>
              </div>
            ))}
          </div>

          {/* Routing UI */}
          <div style={{ marginTop: 12 }}>
            <h4>Routing</h4>

            <div className="small">
              Start:
              {position
                ? ` ${position.lat.toFixed(4)}, ${position.lng.toFixed(4)}`
                : " Location unavailable"}
            </div>

            <div className="small">
              Destination: {selectedPoi?.name || "None selected"}
            </div>

            <RoutePlanner
              from={position ? [position.lat, position.lng] : null}
              to={selectedPoi ? [selectedPoi.lat, selectedPoi.lng] : null}
              onRoute={setRoute}
            />

            {route && (
              <div className="small" style={{ marginTop: 8 }}>
                Distance: {(route.distance / 1000).toFixed(2)} km • Duration:{" "}
                {(route.duration / 60).toFixed(0)} min
              </div>
            )}
          </div>
        </div>

        {/* RIGHT MAP PANEL */}
        <div className="map-wrap">
          <MapView
            center={center}
            zoom={zoom}
            pois={pois}
            onMarkerClick={onMarkerClick}
            routeGeoJSON={route?.geometry}
          >
            {/* Geofencing system */}
            <GeofenceManager position={position} fences={fences} />
          </MapView>
        </div>
      </div>
    </div>
  );
}
