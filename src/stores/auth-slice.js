import {createSlice,configureStore} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState:{isLoggedin:false},
    reducers:{
        loggedIn:(state)=>{
          state.isLoggedin = true;
        },
        loggedOut:(state)=>{
          state.isLoggedin = false
        }
    },
})

export const authActions = authSlice.actions
export default authSlice;

