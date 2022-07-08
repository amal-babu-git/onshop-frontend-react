import React from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchProducts,
  getProductsError,
  getProductsStatus,
  selectAllProducts,
} from "../features/prodcuts/productSlice";
import { useEffect } from "react";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectAllProducts);
  const productsFetchStatus = useSelector(getProductsStatus);
  const productsFetchError = useSelector(getProductsError);

  useEffect(() => {
    if (productsFetchStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsFetchStatus, dispatch]);

  let content = "";

  if (productsFetchStatus === "loading") {

    content = <p>"Loading"</p>;

  } else if (productsFetchStatus === "succeeded") {

    content = products.results.map((product, index) => (

      <ProductCard key={index} data={product} />
    ));

    console.log(products)

  } else if (productsFetchStatus === "failed") {
    content = <p className="fs-1">{productsFetchError}</p>;
  }
  return (
    <div className="container">
      <div className="row justify-content-center">{content}</div>
    </div>
  );
};

export default ProductsPage;
