import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import Logo from "../assets/Logo.svg";
import CartIcon from "../pages/cart/cart-icon";

export const Navbar = () => {
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
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <CartIcon />
      </div>
    </div>
  );
};
