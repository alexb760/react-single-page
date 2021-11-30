import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, logOut } from "../store/user"

let SignIn = (props)=>{
    //Enviando acciones a los reducer.
    let dispatch = useDispatch();

    //Recolectando las propiedades de Redux usamos el hook de redux useSelector
    let user = useSelector( state => state.user.user);
    console.log(user)

    let doSignIn = ()=>{
        dispatch(
            signUp( {
                credential: {
                    mail: 'al@b.com',
                    jwtToken: 'jj334jñoi4ui'
                 }
            }  )
        )
    }

    let doLogOut = ()=>{
        dispatch(
            logOut()
        )
    }

    return ( 
        <div>
            {
                user ?
                <button onClick= { doLogOut }>Cerrar Session</button>
                :
                <button onClick= { doSignIn }>Ingresar</button>
            }
        </div>
    )
}

export default SignIn;