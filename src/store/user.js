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

export const signIn = createAsyncThunk('user/signUp',
async ( {credential} )=>{
    //Async operation
    let response = await Axios.post( `${apiConfig.domain}/users/signin`, {
        user: credential
    } )
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
        },
        [signIn.pending]: (state, action)=>{
            state.status = 'pendin'
        },
        [signIn.fulfilled]: (state, action)=>{
            state.user = action.payload
            state.status = 'success'
        },
        [signIn.rejected]: (state, action)=>{
            state.status = 'fail'
        }
    }
} )

//Action creator
// ()=>{} retorna un objeto action
export const { logOut } = userSlice.actions;
export default userSlice.reducer