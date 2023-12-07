import { useSelector, useDispatch } from "react-redux";

import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useEffect } from "react";
import Notification from "./components/Notification";
import { notificationActions } from "./stores/notification-slice";

let firstRender = true;
function App() {
   const isLoggedin = useSelector(state =>state.auth.isLoggedin);
   const notify = useSelector(state => state.ui.notification);
   const cart = useSelector(state => state.cart)
   const dispatch = useDispatch()

   useEffect(()=>{
    if(firstRender){
      firstRender = false
      return
    }
     const newRequest = async ()=>{
      dispatch(notificationActions.showNotifications({
        message:"sending request to database.....",
        type:"warning",
        open:true
      }))
      const res = await fetch(
        "https://redux-with-firebase-b8172-default-rtdb.firebaseio.com/cartItem.json",{
          method: 'PUT',
          body: JSON.stringify(cart)
        }
      );
      const data = await res.json();
      dispatch(
        notificationActions.showNotifications({
          message: "sending request to database successfull.....",
          type: "success",
          open: true,
        })
      );
     }

     newRequest().catch(()=>{
      dispatch(
        notificationActions.showNotifications({
          message: "sending request to database failed.....",
          type: "error",
          open: true,
        })
      );
     })
   },[cart,dispatch])

  return (
    <>
      <div className="App">
        <Notification type={notify?.type} message={notify?.message} />
        {!isLoggedin && <Auth />}
        {isLoggedin && <Layout />}
        {/* <Layout /> */}
      </div>
    </>
  );
}

export default App;
