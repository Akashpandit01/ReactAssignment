import React, { useState, useMemo, useCallback } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import MemoizedMarkers from './Markers'
import 'leaflet/dist/leaflet.css'



// fix default icon paths (for Vite)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


export default function MapView({center, zoom, pois, onMarkerClick, routeGeoJSON, children}){
// memoize bounds/markers derived data
const markerPositions = useMemo(()=> pois.map(p=>[p.lat,p.lng]), [pois]);


// stable callback
const handleMarkerClick = useCallback((poi) => {
onMarkerClick && onMarkerClick(poi);
}, [onMarkerClick]);


return (
<MapContainer center={center} zoom={zoom} style={{height:'100%', width:'100%'}}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />


<MemoizedMarkers pois={pois} onMarkerClick={handleMarkerClick} />


{routeGeoJSON && (
<Polyline positions={routeGeoJSON.coordinates.map(c=>[c[1],c[0]])} />
)}


{children}
</MapContainer>
)
}