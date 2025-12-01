
const intialstate={isAuthinticated:false};

function authReducer(state=intialstate,action)
{
    switch(action.type){
        case 'LOGIN':
            return {isAuthinticated:true}
            case  "LOGOUT":
                return {isAuthinticated:false}

                default:
                  return state;
    }
}
export default authReducer;