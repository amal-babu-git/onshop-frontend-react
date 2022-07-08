import React from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-around">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPage;
