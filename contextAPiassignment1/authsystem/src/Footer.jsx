import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

  

  function Footer(){
    const {isLoggedIn}=useContext(AuthContext);
    
    return (<footer style={{padding:"10px",background:"#eee"}}>
   {isLoggedIn?"Welcome,User":"Please log in"}
    </footer>)
  }
  export default Footer;