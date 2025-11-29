import { useEffect, useState } from "react";


function ProductApp(){

 const[product,setProduct]=useState([]); 


async function fetchData(){
    const response=await fetch('https://fakestoreapi.com/products');
    const result=await response.json();

   setProduct(result);
 }
 useEffect(()=>{
   fetchData();
 },[]);
  return (<>
  <h1>Products</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr),",gap:"20px"}}>
        {product.map(product=>(
            <div key={product.id}>
                <img src={product.image} width="150px" alt="" />
                </div>
        ))}
      </div>
    </>);
}
export default ProductApp
