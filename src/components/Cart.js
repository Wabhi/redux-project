import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../stores/cart-slice";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalCartItems);
  const dispatch = useDispatch()
  const showTheCart = ()=>{
      dispatch(cartActions.showCart())
  }
  return (
    <>
      <div className="cartIcon" onClick={showTheCart}>
        <h3>Cart: {quantity} Items</h3>
      </div>
      
    </>
  );
};

export default Cart;
