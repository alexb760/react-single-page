import {
    createAsyncThunk,
    createSlice
} from '@reduxjs/toolkit';

import Axios from "axios"
import apiConfig from "../config/api"

export const signUp = createAsyncThunk('user/signUp',
async ( {credential} )=>{
    //Async operation
    let response = await Axios.post( `${apiConfig.domain}/users`, {
        user: credential
    } )
    console.log(response)
    return response.data.user
} 
)

let userSlice = createSlice( {
    name: 'user',
    initialState: {
        user: null,
        status: ''
    },
    reducers: {
        signIn: (state, action)=>{
            state.user = action.payload
        },
        logOut: (state)=>{state.user = null}
    },
    extraReducers: {
        [signUp.pending]: (state, action)=>{
            state.status = 'pendin'
        },
        [signUp.fulfilled]: (state, action)=>{
            state.user = action.payload
            state.status = 'success'
        },
        [signUp.rejected]: (state, action)=>{
            state.status = 'fail'
        }
    }
} )

//Action creator
// ()=>{} retorna un objeto action
export const { signIn, logOut } = userSlice.actions;
export default userSlice.reducer