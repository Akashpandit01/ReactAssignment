const intialstate={loadiing:false,data:null,error:null};

const dataResucer =(state=intialstate,action)=>{
    switch(action.type){
        case "FETCH_START":
            return {...state,loadiing:true}

            case 'FETCH_SUCCESS':

            return {loadiing:false,data:action.payload,error:null};

            case  "FETCH_ERROR":
                return {loadiing:false,data:null,error:action.error};

                default:
                    return state;

    }
}
export default dataResucer;