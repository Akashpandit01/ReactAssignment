 
 function ProfileCard({name="unkonwn User",
    age="N/A",
    bio="No biography available"}){


    const shortBio=bio.length>100?bio.slice(0,100)+"...Read More":bio;

  return (
    <>
    <div style={{width:"300px",
        padding:"20px",
        borderRadius:"12px",
        background:"#ffff",
         margin: "20px auto",
        fontFamily: "Arial"
    }}>

<h2 style={{fontSize:"22px",marginBottom:"10px"}}>{name}</h2>
<p style={{fontSize:"16px",color:"gray",marginBottom:"10px"}} >
    Age:{age}
</p>
<p style={{fontSize:"14px",lineHeight:"1.4"}}>{shortBio}</p>
    </div>
    </>
  )

 }
 export default  ProfileCard;