import {auth, provider} from "../firebase"
import { SET_USER } from "./actionType"
import { useDispatch } from "react-redux"



export const setuser = (payload) =>({

    type: SET_USER,
    user: payload,
})

export const signinAPI = (props) =>{


   auth.signInWithPopup(provider).then((payload) =>{ 
      
       console.log(payload.user)

        let dispatch = useDispatch()
        dispatch(setuser(payload.user))

    }).catch((err) => alert(err.message))

}

 