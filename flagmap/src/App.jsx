import React, { useState, useCallback, useMemo } from 'react'
import MapView from './components/Map/MapView'
import SearchBar from './components/Search/SearchBar'
import RoutePlanner from './components/Route/RoutePlanner'
import GeofenceManager from './components/Geofence/GeofenceManager'
import useGeolocation from './hooks/useGeolocation'


export default function App(){
const { position } = useGeolocation({enableHighAccuracy:true})
const [center, setCenter] = useState(position ? [position.lat, position.lng] : [20.5937,78.9629])
const [zoom, setZoom] = useState(5)


const [pois, setPois] = useState([])
const [selectedPoi, setSelectedPoi] = useState(null)


const [route, setRoute] = useState(null)


// when position updates, recentre map (throttling could be added)
React.useEffect(()=>{
if (position) setCenter([position.lat, position.lng])
}, [position])


// memoize POIs by category example
const restaurants = useMemo(()=> pois.filter(p=> p.raw && p.raw.type === 'restaurant'), [pois])


const onMarkerClick = useCallback((poi)=>{
setSelectedPoi(poi)
}, [])


// sample geofence(s)
const fences = useMemo(()=>[
{id:'home', center: {lat:center[0], lng:center[1]}, radiusMeters:300, label:'You are near home (demo)'}
], [center])
return (
<div className="app-shell">
<div className="header">
<h3 style={{margin:0}}>React Map App — Demo</h3>
</div>
<div className="container">
<div className="sidebar">
<SearchBar onSearchResults={setPois} onCenter={c=> setCenter(c)} />


<div className="poi-list">
<h4>Search Results</h4>
{pois.map(p=> (
<div key={p.id} className="poi-item" onClick={()=> setCenter([p.lat,p.lng])}>
<div><strong>{p.name}</strong></div>
<div className="small">{p.raw?.type || 'place'}</div>
</div>
))}
</div>


<div style={{marginTop:12}}>
<h4>Routing</h4>
<div className="small">Selected start: {position ? `${position.lat.toFixed(4)}, ${position.lng.toFixed(4)}` : 'No position'}</div>
<div className="small">Selected dest: {selectedPoi?.name || 'None'}</div>
<RoutePlanner from={position ? [position.lat, position.lng] : null} to={selectedPoi ? [selectedPoi.lat, selectedPoi.lng] : null} onRoute={setRoute} />
{route && (
<div className="small" style={{marginTop:8}}>Distance: {(route.distance/1000).toFixed(2)} km • Duration: {(route.duration/60).toFixed(0)} min</div>
)}


</div>


</div>


<div className="map-wrap">
<MapView center={center} zoom={zoom} pois={pois} onMarkerClick={onMarkerClick} routeGeoJSON={route?.geometry}>
{/* geofence manager placed as child to react update cycle */}
<GeofenceManager position={position} fences={fences} />
</MapView>
</div>
</div>
</div>
)
}