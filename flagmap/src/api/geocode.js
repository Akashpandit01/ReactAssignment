// Nominatim-based search (no API key). Rate-limited for public use.
export async function nominatimSearch(q, limit = 8) {
if (!q) return [];
const url = new URL('https://nominatim.openstreetmap.org/search');
url.searchParams.set('q', q);
url.searchParams.set('format', 'json');
url.searchParams.set('addressdetails', '1');
url.searchParams.set('limit', String(limit));


const res = await fetch(url.toString(), { headers: { 'Accept': 'application/json', 'User-Agent': 'react-map-app-demo' } });
if (!res.ok) return [];
const data = await res.json();
return data.map(item => ({
id: item.place_id,
name: item.display_name,
lat: parseFloat(item.lat),
lng: parseFloat(item.lon),
raw: item
}));
}