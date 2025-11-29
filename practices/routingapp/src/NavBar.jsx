import { Link } from "react-router-dom";

 

 const Navbar=()=>{
   return (
    <>
    {/* <a href="/home">Home</a>
    <a href="/about">ABout</a>
    <a href="/contact">contact</a>
    */}


    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to='/contact'>Contact</Link>
     </> 
    
   )
 }
 export default  Navbar;