import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const CartIcon = () => {
  const { getTotalCartQuantity } = useContext(ShopContext);

  return (
    <Link to="/cart">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-item-count">{getTotalCartQuantity()}</span>
      </div>
    </Link>
  );
};

export default CartIcon;
