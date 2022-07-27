import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { STORE_PRODUCTS_API } from "../../apis";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { addToCart } from "./cartApiCalls";
import { useDispatch } from "react-redux";
import { fetchCartItems } from "../../features/cart/cartSlice";

const CartListItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // fetch product details and navigate to detail page while user clik view btn in cart card
  const fetchSingleProductItem = async () => {
    await axios
      .get(`${STORE_PRODUCTS_API}${item.product.id}/`)

      .then((response) => {
        console.log(response.data);
        navigate("/product-detail", { state: response.data });
      })

      .catch((err) => {
        console.log(err);
        toast.err(
          "Something went wrong ! product not found.Please contact to customer service.."
        );
      });
  };

  // // TODO:
  // const increaseQuantity = () => {
  //   addToCart(item.product.id, 1);
    
  // };

  return (
    <MDBCard className="col-xs-12 col-sm-12 col-md-4  col-xl-3 m-1 ">
      <MDBCardBody>
        <div className="ms-2 mt-1">
          <p className="fs-5 fw-bold ">{item.product.title}</p>
          <p className="fs-6 fw-bold">₹ {item.product.unit_price} </p>
          <div className="">
            <p className="fs-6 fw-bold">Quantity: {item.quantity}</p>
            {/* <MDBBtn outline className="me-1" onClick={increaseQuantity}>
              <i className="fas fa-plus"></i>
            </MDBBtn> */}
          </div>
          <p className="fs-6 fw-bold mt-2">Total Price: ₹ {item.total_price}</p>

          <MDBBtn
            rounded
            outline
            className="mt-1"
            onClick={fetchSingleProductItem}
          >
            View Product
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CartListItem;
