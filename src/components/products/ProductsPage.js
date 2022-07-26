import React from "react";
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
import { toast } from 'react-toastify';
import { FAILED, LOADING, SUCCESS } from "../../apis";
import CartSpinner from "../subComponents/customSpinners/CartSpinner";

const ProductsPage = () => {
  const dispatch = useDispatch();

  const nextPageApi = useSelector(getNextProductPageLink);

  const products = useSelector(selectAllProducts);
  const productsFetchStatus = useSelector(getProductsStatus);
  const productsFetchError = useSelector(getProductsError);


  useEffect(() => {
    if (productsFetchStatus === "idle") {

      dispatch(fetchProducts({ page: nextPageApi }));
      
    }
  }, [productsFetchStatus, dispatch]);

  

  let content = "";


  switch (productsFetchStatus) {
    case LOADING:
                      // content = <div className="spinner-border text-primary mt-4" />;
                      content = <CartSpinner />;
                      break;
    case SUCCESS: 
                      if (products.count == 0) {
                        toast.error("No data found",{autoClose:1000})
                      }else{

                        content = products.results.map((product, index) => (
                          <ProductCard key={index} data={product} />
                        ));

                      }
                      console.log(products)
                      break;

    case FAILED :    content = <p className="fs-1">{productsFetchError}</p>;

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

    </div>
  );
};

export default ProductsPage;
