import axios from "axios";
import { SIGN_IN } from "../Types";
export const login=(useInfo,nav)=>async(dispatch)=>{
    try {
        const response=await axios.post("http://localhost:2000/auth/sign-in",useInfo)
        console.log(response)
        dispatch({type:SIGN_IN,payload:"sss"})
    } catch (error) {
        error.errors.map((elt)=>alert(elt))
        
    }
}
export const register=async()=>(dispatch)=>{
    try {
        
    } catch (error) {
        
    }
}
export const logOut=()=>{

}

