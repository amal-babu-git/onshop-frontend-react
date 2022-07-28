import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FAILED, LOADING, SUCCESS } from "../../apis";
import {
  fetchCartItems,
  getCartFetchError,
  getCartFetchStatus,
  selectCart,
  selectCartId,
} from "../../features/cart/cartSlice";
import CartListItem from "./CartListItem";

import CartToast from "../subComponents/Toast/CartToast";
import TotalBillCard from "./TotalBillCard";

function Cart() {
  const dispatch = useDispatch();

  const cartFetchStatus = useSelector(getCartFetchStatus);
  const cartFetchError = useSelector(getCartFetchError);
  let cartId = useSelector(selectCartId);
  const cart = useSelector(selectCart);

  let content = <p>empty</p>;

  useEffect(() => {
    console.log("fcart");

    dispatch(fetchCartItems({ cartId }));

    if (!cartId) {
      toast(<CartToast msg="No Items found" />);
    }
  }, []);

  

  switch (cartFetchStatus) {
    case LOADING:
      console.log("loadding..");
      content = <p>Loading..</p>;
      break;
    case SUCCESS:
      console.log("success", cart.items);
      toast.info("Fetching....", { autoClose: 100 });

      content = cart.items.map((item, index) => (
        <CartListItem key={index} item={item} />
      ));

      break;
    case FAILED:
      console.log("failed", cartFetchError);

      content = <p>Cart is empty</p>;

      break;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-2 ms-1 me-1">
          {content}
        </div>
        <div className="row justify-content-center mt-2 ms-1 me-1">
          {cartId && ( <TotalBillCard cart={cart}/> )}
        </div>
      </div>
    </>
  );
}

export default Cart;
