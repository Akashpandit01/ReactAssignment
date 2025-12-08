import React, { useState, useEffect } from 'react'
import { insideCircle } from '../../utils/geoUtils'


export default function GeofenceManager({position, fences=[]}){
// fences: [{id, center:{lat,lng}, radiusMeters, label}]
const [status, setStatus] = useState({})


useEffect(()=>{
if (!position) return;
const updates = {}
for (const f of fences){
const inside = insideCircle(position, f.center, f.radiusMeters)
const prev = status[f.id]
if (prev !== inside){
// change detected
updates[f.id] = inside
// show a simple alert — replace with Notifications API for real apps
if (inside) alert(`Entered geofence: ${f.label || f.id}`)
else alert(`Exited geofence: ${f.label || f.id}`)
}
}
if (Object.keys(updates).length) setStatus(s=>({...s,...updates}))
}, [position, fences])


return null
}