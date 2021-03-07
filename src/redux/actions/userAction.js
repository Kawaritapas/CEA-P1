import {USERS  , ERRORS} from "../types";
import axios from "axios";
export const fetchUsers = ()=>(dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        dispatch({
            type:USERS,
            payload: res
        })
    }).catch(err=>{
        dispatch({
            type:ERRORS,
            payload : err
        })
    })
}
