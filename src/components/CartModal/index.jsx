import React from "react";

const CartModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Cart Modal</h2>
       
        <button className="modal-close" onClick={closeModal}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CartModal;

