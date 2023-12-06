import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItemsList:[],
        totalCartItems:0,
        isShowCart:false,
    },
    reducers:{
        addToCart:(state,action) => {
            const newItem = action.payload
            const existingItem = state.cartItemsList.find(item=>item.id ===newItem.id);
            if(existingItem){
                existingItem.quantity ++;
                existingItem.totalPrice += newItem.price
            }else{
                state.cartItemsList.push({
                    id:newItem.id,
                    quantity:1,
                    name:newItem.name,
                    price:newItem.price,
                    totalPrice : newItem.price
                })
                state.totalCartItems++;
            }

        },
        removeFromCart:(state,action) => {
           const id = action.payload
           const existingItem = state.cartItemsList.find(item=>item.id === id);
           if(existingItem.quantity===1){
              state.cartItemsList = state.cartItemsList.filter(item=>item.id !== id)
              state.totalCartItems--;
           }else{
            existingItem.quantity--;
            existingItem.totalPrice -= existingItem.price
           }

        },
        showCart:(state)=>{
           state.isShowCart= !state.isShowCart;
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice;