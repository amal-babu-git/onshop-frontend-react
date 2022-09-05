import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { STORE_CARTS_API } from "../../apis";
import { selectCartId } from "../../features/cart/cartSlice";
import { createCart } from "../../features/cart/cartSlice";
import CartToast from "../subComponents/Toast/CartToast";

const AddToCartBtn = ({ id, quantity = 1 }) => {
  const dispatch = useDispatch();

  let cartId = useSelector(selectCartId);

  // addToCart api function
  const addToCart = async (productId, quantity, cartId) => {
    await axios
      .post(`${STORE_CARTS_API}${cartId}/items/`, {
        product_id: productId,
        quantity: quantity,
      })
      .then((response) => {
        console.log(response.data);
        toast(<CartToast msg="Added to cart" />, { hideProgressBar: true });
        return response.data;
      })
      .catch((err) => {
        let msg = "Cart ID is not valid.";
        console.log(err);
        toast.error(msg, { hideProgressBar: true });
        toast.info("creating new cart", { autoClose: 1000 });
        dispatch(createCart());
      });
  };

  const addToCartHandler = async () => {
    if (quantity > 5) {
      toast.warn("Only 5 can add one time");
      return false;
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
