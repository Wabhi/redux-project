import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItemsList);
  
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((cartItem) => {
          return (
            <li key={cartItem.id}>
              <CartItem
                id={cartItem.id}
                quantity={cartItem.quantity}
                price={cartItem.price}
                name={cartItem.name}
                totalPrice={cartItem.totalPrice}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
