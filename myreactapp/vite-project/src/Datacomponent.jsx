import { useContext } from "react";
import { DataContext } from "./DataProvider";


function Datacomponent(){
    const {state,fetchData}=useContext(DataContext);


    return <div>


        <button onClick={fetchData}>fetch data</button>
      
      {state.loading && <p>Loading...</p>}

      {state.data && <p>Data Loaded! Count: {state.data.length}</p>}
   
      {state.data && state.data.map(post=><p key={post.id}>{post.title}</p>)}
    </div>
  


}
export default Datacomponent;