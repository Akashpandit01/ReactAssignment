



export default function NameList (){
    const name=["AKash","ROhan","Sita"];
    

    return (
        <ul>

            {name.map((n,index)=>(
                <li key={index} >{n}</li>
            ))}
        </ul>
    )
}