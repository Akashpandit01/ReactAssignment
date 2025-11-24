// cd m

import Datacomponent from "./Datacomponent";
import DataProvider from "./DataProvider";

// import { useContext } from "react";
// import { createContext } from "react";
// import { useState } from "react";

//  const UserContext=createContext();
// function App(){
//   const [user,setUser]=useState("Tommy");

//   return (
//     <UserContext.Provider value={user}>
//    <Parent/>
//     </UserContext.Provider>
  
//   );
// }

// function Parent(){
//   return <Child/>
// }

// function Child(){
//   return <GrandChild/>
// }


// function GrandChild(){
//   const user=useContext(UserContext);
//   return <h1>Hello ,{user}</h1>
// }
// export default App;

// function Box({children}){
//   return <div style={{border:"2px solid red",padding:"10px", margin:"10px"}}>{children}</div>
// }

// function App(){
//  return( <>
//  <h1>Hellow from React</h1>
//   <Box>
//  <h1>Hellow from React</h1>
  
//    </Box>
//    <Box>
//   <p>This is inside a box</p>
//   </Box>
 
  
//   </>)
// }

// export default App;



function App(){
 
  return (<>
   
      <h1>Hellow From React</h1>
      <DataProvider>
     <Datacomponent/>
   </DataProvider>
  </>)
   
}
export default App