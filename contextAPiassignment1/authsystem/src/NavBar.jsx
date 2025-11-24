import { useCallback } from "react";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

 

 function Navbar(){
    const{isLoggedIn,toggleAuth}=useContext(AuthContext);

    return(
        <nav style={{padding:"10px",background:"#ddd"}}>

            <button onClick={toggleAuth}>
                {isLoggedIn?"Logout":"Login"}

            </button>
        </nav>
    )
 }
 export default Navbar;