import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice"
import cartSlice from "./cart-slice";
import notificationSlice from "./notification-slice";

const authStore = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: notificationSlice.reducer
  },
});

export default authStore;