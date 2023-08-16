import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import "./cart.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const handleSuccessfulPayment = async (order) => {
    try {
      // Here you can make a server request to update the order status in your system
      // You might want to send the `order` object to your server along with other necessary data
      const response = await fetch("/api/updateOrderStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        // Payment was successful and order status was updated
        console.log("Payment was successful and order status updated");
        checkout(); // Clear the cart after successful payment
      } else {
        // Handle error if updating order status failed
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
              <button
                onClick={() => navigate("/")}
                className="continue-shopping-button"
              >
                Continue Shopping
              </button>
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: totalAmount.toFixed(2), // Total amount to charge
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  const order = await actions.order.capture();
                  handleSuccessfulPayment(order); // Call the custom handler
                }}
                onError={(error) => {
                  console.error("An error occurred during payment:", error);
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
