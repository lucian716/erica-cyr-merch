import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import Logo from "../assets/Logo.svg";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const { getTotalCartQuantity } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="navbarTitle">
        <h3>Erica Cyr Merch</h3>
      </div>
      <div className="navbarLogo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {getTotalCartQuantity() > 0 && (
            <span className="cart-item-count">{getTotalCartQuantity()}</span>
          )}
        </Link>
      </div>
    </div>
  );
};
