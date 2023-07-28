import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const PayPalButton = () => {
    return (
      <PayPalButtons
        createOrder={(data, actions) => {
        }}
        onApprove={(data, actions) => {
        }}
        onError={(error) => {
        }}
      />
    );
  };

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <div>
          <h1>Your Cart Items</h1>
          <div className="cart-items">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
              return null;
            })}
          </div>
          <div className="subtotal-container">
            <div className="checkout">
              <p>Subtotal: ${totalAmount}</p>
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <PayPalButton />
            </div>
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
