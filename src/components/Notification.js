import React from 'react'
import {Alert} from "@mui/material"
import { useSelector,useDispatch } from 'react-redux'
import { notificationActions } from '../stores/notification-slice'

const Notification = ({type, message}) => {
 const notify = useSelector((state) => state.ui.notification);
const dispatch = useDispatch()
const handleCloseNotification =()=>{
     dispatch(notificationActions.showNotifications({
        open: false
     }))
}
  return <>{notify && <Alert onClose={handleCloseNotification} severity={type}>{message}</Alert>}</>;
}

export default Notification