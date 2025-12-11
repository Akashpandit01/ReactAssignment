 
 
 const Products=()=>{
  
    const products=[{id:1,name:"laptop",price:50000},
        {id:2, name:"hardrive",price:10000},
    {id:3,name:"SSD",price:3500}];

    return (
        <div>

    <ul>
       

 { products.map((n)=>(
    <li key={n.id}>{n.name}   <p>{n.price}</p></li>

   
 ))}
 </ul>

        </div>
    )

 }
 export default  Products;