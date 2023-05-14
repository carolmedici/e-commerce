import React from "react";

const Card = ({ product }) => {
  const handleClickCard = (item) => {
    console.log(item);
  };

  return (
    <div className="flex flex-wrap">
      
    <div onClick={() => handleClickCard(product)}>
      <ul >  
        <li   key={product.tag}>
          <div className="shadow-lg shadow-pink-400/30 w-80 h-100 m-10 rounded-lg">
              <img className="p-3 rounded-lg w-50 h-30" src={product.photo} alt={product.productName} />
              <h1 className="text-2xl my-2 text-center">{product.productName}</h1>
              <p className="line-through text-base ml-5">$ {product.price}</p>
              <span className="text-xl ml-5 my-1">$ {product.price * 0.9}</span>
              <span className="text-xs ml-2">or 2x $ {product.price / 2}</span>
              <p className="text-xs ml-5 my-2 text-pink-400">Free Shipping</p>
              <button className="bg-pink-400 hover:bg-pink-800 rounded-lg py-1 px-5 my-1 text-white mx-auto" >BUY</button>
          </div>
        </li>
      </ul>
    </div>
    </div>
    
  );
};

export default Card;
