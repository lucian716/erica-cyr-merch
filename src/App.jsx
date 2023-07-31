import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; 

function App() {
  return (
    <div className="App">
      <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
        {/* Replace "YOUR_PAYPAL_CLIENT_ID" with your actual PayPal client ID */}
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
