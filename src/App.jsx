import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact/contact";
import { Cart } from "./pages/cart/cart";
import AdminLogin from "./pages/admin/AdminLogin"; 
import AdminDashboard from "./pages/admin/AdminDashboard"; 
import "./App.css";
import { ShopContextProvider } from "./context/shop-context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />{" "}
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "YOUR_PAYPAL_CLIENT_ID", // Replace with your actual PayPal client ID
        // ... other PayPal options
      }}
    >
      <App />
    </PayPalScriptProvider>
  );
}

