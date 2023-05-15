import Card from "./Card";
import products from "./products.json";
import React from "react";

const Products = () => {
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <div key={product.tag} className="w-full md:w-1/4 p-0">
          <Card product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
