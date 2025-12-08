// OSRM public demo server routing. For production, self-host or use a provider.
// Note: OSRM accepts lon,lat order in path. Returns polyline in geometry.
export async function getRouteOSRM(from, to) {
// from / to are [lat, lng]
const a = `${from[1]},${from[0]}`; // lon,lat
const b = `${to[1]},${to[0]}`;
const url = `https://router.project-osrm.org/route/v1/driving/${a};${b}?overview=full&geometries=geojson`;
const res = await fetch(url);
if (!res.ok) return null;
const data = await res.json();
if (!data.routes || !data.routes[0]) return null;
const r = data.routes[0];
return {
distance: r.distance, // meters
duration: r.duration, // seconds
geometry: r.geometry // GeoJSON LineString
}
}