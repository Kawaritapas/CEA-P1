import { ERRORS, USERS} from "../types";

const initialState = {
    users:"",
    error:""
}

export default function(state=initialState,action){
    switch (action.type) {
        case USERS:
           return{
               users:action.payload
           }
        case ERRORS:
            return{
                error:action.payload
            }
        default:
          return  state;
    }
}