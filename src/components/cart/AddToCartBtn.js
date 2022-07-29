import { MDBBtn } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectCartId, setCartId } from "../../features/cart/cartSlice";
import { addToCart } from "./cartApiCalls";
import { createCart } from "../../features/cart/cartSlice";

const AddToCartBtn = ({ id, quantity = 1 }) => {
  const dispatch = useDispatch();

  let cartId = useSelector(selectCartId);

  const addToCartHandler = async () => {

    if(quantity>5){

        toast.warn("Only 5 can add one time")
        return false

    }
    
    if (cartId) {
      // id=product_id
      await addToCart(id, quantity, cartId);
      
    } else {
      toast.info("No cart found!\n Creating cart...", { autoClose: 1000 });
      dispatch(createCart());

    }
    return true;
  };

  return (
    <>
      <MDBBtn rounded outline className="me-4 mt-1 " onClick={addToCartHandler}>
        Add to cart
      </MDBBtn>
    </>
  );
};

export default AddToCartBtn;
