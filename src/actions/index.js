import {auth, provider} from "../firebase"

export const signinAPI = (props) =>{

   auth.signInWithPopup(provider).then((payload) =>{

        console.log(payload)

    }).catch((err) => alert(err.message))

}

