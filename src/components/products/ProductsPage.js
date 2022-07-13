import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchProducts,
  getNextProductPageLink,
  getProductsError,
  getProductsStatus,
  selectAllProducts,
} from "../../features/prodcuts/productSlice";
import { useEffect } from "react";
import Pagination from "../subComponents/Pagination";
import FilterByPrice from "./filter/FilterByPrice";
import FilterCard from "./filter/FilterCard"
import { ToastContainer, toast } from 'react-toastify';

const ProductsPage = () => {
  const dispatch = useDispatch();

  const nextPageApi = useSelector(getNextProductPageLink);

  const products = useSelector(selectAllProducts);
  const productsFetchStatus = useSelector(getProductsStatus);
  const productsFetchError = useSelector(getProductsError);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (productsFetchStatus === "idle") {

      dispatch(fetchProducts({ page: nextPageApi }));
    }
  }, [productsFetchStatus, dispatch]);

  

  let content = "";


  switch (productsFetchStatus) {
    case "loading":
                      content = <div className="spinner-border text-primary mt-4" />;
                      break;
    case "succeeded": 
                      if (products.count == 0) {
                        toast.error("No data found",{autoClose:1000})
                      }else{

                        content = products.results.map((product, index) => (
                          <ProductCard key={index} data={product} />
                        ));

                      }
                      console.log(products)
                      break;

    case "failed":    content = <p className="fs-1">{productsFetchError}</p>;

      break;
    default: content = <p className="fs-1">{productsFetchError}</p>;
      break;
  }

  // if (productsFetchStatus === "loading") {
  //   content = <div className="spinner-border text-primary mt-4" />;
  // } else if (productsFetchStatus === "succeeded" ) {

  //   if(products.count==0){
  //     toast("no data")
  //   }
  //   content = products.results.map((product, index) => (
  //     <ProductCard key={index} data={product} />
  //   ));

  //   console.log(products);
  // } else if (productsFetchStatus === "failed") {

  //   content = <p className="fs-1">{productsFetchError}</p>;
  // }
  return (
    <div className="container">
      <FilterByPrice />

      <div className="row justify-content-center">
        <FilterCard />
      </div>
      <div className="row justify-content-center">{content}</div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-4  col-xl-3 mt-2">

          <Pagination />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductsPage;
