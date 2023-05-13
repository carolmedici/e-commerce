import React from "react";

const Card = ({ product }) => {
  const handleClickCard = (item) => {
    console.log(item);
  };

  return (
    <div onClick={() => handleClickCard(product)}>
      <ul>
        <li key={product.tag}>
          <img src={product.photo} alt={product.productName} />
          <p>{product.descriptionShort}</p>
          <p>$ {product.price}</p>
          <p>$ {product.price * 0.9}</p>
          <p>or 2x $ {product.price / 2}</p>
          <p>Free Shipping</p>
          <button>BUY</button>
        </li>
      </ul>
    </div>
  );
};

export default Card;
