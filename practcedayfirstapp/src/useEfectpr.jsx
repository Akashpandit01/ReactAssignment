 import { useState,useEffect } from "react";

 export default function Posts(){

    const [posts,setposts]=useState([]);

    const [loading,setLoading]=useState(true);

    const [search,setSearch]=useState("");
    useEffect(()=>{
    async function loadData() {
        const res= await fetch("https://jsonplaceholder.typicode.com/posts");
        const data=await res.json();
        setposts(data);
        setLoading(false);

   
    }
loadData();
    },[])
      const filteredPost=posts.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()));
        
 

   if(loading) return <h2>Loading....</h2>;
    return (<>
    <h1>Posts</h1>



    <input type="text" placeholder="search posts..."  value={search} onChange={e=>setSearch(e.target.value)}/>
{filteredPost.map(p=>(
    <h3 key={p.id}>{p.title}</h3>
))}

    {/* {
        
        posts.slice(0,10).map(p=>(
            <div key={p.id}>
            <h3>{p.title}</h3>

            <p>{p.body}</p>
            </div>
        ))
    } */}
    
    </>)
 }
