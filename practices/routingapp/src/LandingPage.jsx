import { useNavigate } from "react-router-dom";

 const LandingPage=()=>{
  


    const navigate=useNavigate();
    const hamdleLogin=()=>{
        alert("Log in sucsess");
         navigate('/home');
        
    }
    return (
        <>

        <h1>Landig Page</h1>
        <button onClick={hamdleLogin}> Login</button>
        </>
    )
 }
 export default LandingPage;