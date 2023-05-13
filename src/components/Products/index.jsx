import Card from "./Card";
import products from "./products.json";
import React from "react";

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <div key={product.tag}>
          <Card product={product} />
        </div>
      ))}
    </>
  );
};

export default Products;
