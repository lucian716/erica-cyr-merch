import React from "react";
import { PRODUCTS } from "../../products";
import { ProductItem } from "./product"; // Rename to ProductItem
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle"></div>

      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
