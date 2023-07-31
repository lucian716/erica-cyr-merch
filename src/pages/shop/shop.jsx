import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import Modal from "react-modal";

export const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="shop">
      {PRODUCTS.map((product) => (
        <Product key={product.id} data={product} onOpenModal={openModal} />
      ))}

    <div className="wrapper"> 
      <Modal isOpen={selectedProduct !== null} onRequestClose={closeModal}>
        {selectedProduct && (
          <div className="modal-content">
            <h2>{selectedProduct.productName}</h2>
            <img
              src={selectedProduct.productImage}
              alt={selectedProduct.productName}
            />
            <p>${selectedProduct.price}</p>
            <button onClick={closeModal}>X</button>
          </div>
        )}
        </Modal>
        </div>
    </div>
  );
};
