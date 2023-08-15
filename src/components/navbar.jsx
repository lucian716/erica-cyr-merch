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
      <Link to="/" className="navbarTitle">
        <h3>Erica Cyr Merch</h3>
      </Link>
      <div className="navbarLogo">
        <Link to="/">
          {" "}
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
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
