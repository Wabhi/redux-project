import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../stores/cart-slice";

const CartItem = ({ name, quantity, totalPrice, price, id }) => {
  const dispatch = useDispatch()

  const increaseItem =()=>{
    dispatch(cartActions.addToCart({id,name,price}))
  }

  const decreaseItem =()=>{
    dispatch(cartActions.removeFromCart(id))
  }
  
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${totalPrice}</article>
      <button className="cart-actions" onClick={decreaseItem}>
        -
      </button>
      <button className="cart-actions" onClick={increaseItem}>
        +
      </button>
    </div>
  );
};

export default CartItem;
