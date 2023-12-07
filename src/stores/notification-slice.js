import {createSlice} from "@reduxjs/toolkit"


const notificationSlice = createSlice({
    name: 'ui',
    initialState:{notification:null},
    reducers:{
        showNotifications: (state,action) =>{
           state.notification = {
            message: action.payload.message,
            type: action.payload.type,
            open:action.payload.open
           }
        }
    }
})

export const notificationActions = notificationSlice.actions;

export default notificationSlice; 
