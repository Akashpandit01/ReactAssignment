import React, { useState, useEffect, useCallback } from 'react'
import useDebounce from '../../hooks/useDebounce'
import { nominatimSearch } from '../../api/geocode'


export default function SearchBar({onSearchResults, onCenter}){
const [q, setQ] = useState('')
const debouncedQ = useDebounce(q, 350)
const [loading, setLoading] = useState(false)


const runSearch = useCallback(async (text)=>{
if (!text) return onSearchResults([])
setLoading(true)
try{
const items = await nominatimSearch(text, 8)
onSearchResults(items)
if (items[0]) onCenter([items[0].lat, items[0].lng])
}catch(e){
console.warn('search failed', e)
}finally{ setLoading(false) }
}, [onSearchResults, onCenter])


useEffect(()=>{
if (debouncedQ) runSearch(debouncedQ)
else onSearchResults([])
}, [debouncedQ, runSearch, onSearchResults])


return (
<div>
<input className="search-input" placeholder="Search address or place" value={q} onChange={(e)=>setQ(e.target.value)} />
<div className="small">{loading ? 'Searching...' : ''}</div>
</div>
)
}