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
import Pagination from "./subComponents/Pagination";

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
    content = <div className="spinner-border text-primary mt-4" />;

  } else if (productsFetchStatus === "succeeded") {

    content = products.results.map((product, index) => (

      <ProductCard key={index} data={product} />
    ));

    console.log(products);
  } else if (productsFetchStatus === "failed") {

    content = <p className="fs-1">{productsFetchError}</p>;
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        {content}
        
      </div>
      <div className="row justify-content-center">
       
        <div className="col-sm-12 col-md-4  col-xl-3 mt-2">
          <Pagination page={1} />
        </div>
      </div>

    </div>
  );
};

export default ProductsPage;
