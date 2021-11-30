import React from "react";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { signIn } from "../store/user";

let SignIn = (props)=>{
    let dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    let onSubmit = (data)=>{
        dispatch(
            signIn( {credential: data} )
        )
    }

    return (
        <div>
        <form onSubmit={ handleSubmit( onSubmit) }>
            <label htmlFor="inputEmal">Email </label>
            <input 
                type="email" 
                name="inputEmal" 
                {...register("email")} 
                placeholder="Su email"></input>

            <label htmlFor="inputPw">Password </label>
            <input 
                type="password" 
                name="inputPw" 
                placeholder="Su contraseña" 
                {...register("password") }></input>
            <input type="submit" value="enviar" />
        </form>
        </div> 
    )
}

export default SignIn;