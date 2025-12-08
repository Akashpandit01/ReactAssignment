import React from 'react'
import { Marker, Popup } from 'react-leaflet'


const Markers = ({pois, onMarkerClick}) => {
return (
<>
{pois.map(p => (
<Marker key={p.id} position={[p.lat,p.lng]} eventHandlers={{click:()=> onMarkerClick(p)}}>
<Popup>
<div style={{minWidth:200}}>
<strong>{p.name}</strong>
<div className="small">lat: {p.lat.toFixed(4)}, lng: {p.lng.toFixed(4)}</div>
</div>
</Popup>
</Marker>
))}
</>
)
}
function areEqual(prev, next){
if (prev.pois === next.pois) return true;
if (prev.pois.length !== next.pois.length) return false;
// cheap heuristic: compare first and last id
const a = prev.pois[0]?.id; const b = next.pois[0]?.id;
const c = prev.pois[prev.pois.length-1]?.id; const d = next.pois[next.pois.length-1]?.id;
return a === b && c === d;
}


export default React.memo(Markers, areEqual)