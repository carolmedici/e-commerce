import React from "react";
import "./CartModal.css";

const CartModal = ({ closeModal, selectedProducts, addToCart }) => {
  return (
    <div id="modal" className="modal-overlay z-40 bg-pink-400">
      <div className="modal">
        <h2 className="my-5 text-center text-white text-2xl font-bold">Cart</h2>
        <div className="product-list">
          <ul className="flex-column">
            {selectedProducts.map((product) => (
              <li key={product.tag} className="product-item">
                <div className="flex">
                  <img className="w-12 mr-4" src={product.photo} alt={product.productName} />
                  <div>
                    <h3 className="text-white text-lg">{product.productName}</h3>
                    <p className="text-white text-lg">$ {product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="modal-actions">
        <button className="buy-button" onClick={() => addToCart(selectedProducts)}>
         
        </button>
      </div>
    </div>
  );
};

export default CartModal;


