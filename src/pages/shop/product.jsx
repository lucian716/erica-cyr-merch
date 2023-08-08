import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const ProductItem = (props) => {
  // Rename to ProductItem
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} onClick={toggleModal} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      {isModalOpen && (
        <div className="overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={productImage} alt={productName} />
            <div className="description">
              <p>
                <b>{productName}</b>
              </p>
              <p> ${price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
