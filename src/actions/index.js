
import { SET_USER } from "./actionType"
import {auth, provider} from "../firebase"



export const setuser = (payload) =>({

    type: SET_USER,
    user: payload,
})

export const getUserauth =() =>{

    return (dispatch) =>{

        auth.onAuthStateChanged(async (user) =>{
            if(user) {
                dispatch(setuser(user))
            }
        })
        
    }

}
 
export const signoutAPI = () =>{
    return (dispatch) =>{
        auth.signOut().then(() =>{
            dispatch(setuser(null))
        }).catch(error =>{
            console.log(error.message)
        }) 
    }
}
 