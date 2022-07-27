
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
import { createCart } from "./cartApiCalls";
import CartListItem from "./CartListItem";

function Cart() {
  const dispatch = useDispatch();

  const cartFetchStatus = useSelector(getCartFetchStatus);
  const cartFetchError = useSelector(getCartFetchError);
  const cartId = useSelector(selectCartId);
  const cart = useSelector(selectCart);

  let content = <p>empty</p>;

  useEffect(() => {
    console.log('fcart')
    if (cartId) {
      dispatch(fetchCartItems({ cartId }));
      
    } else {

      createCart();
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

                      content = <p>{cartFetchError}</p>;

                      break;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center mt-2 ms-1 me-1">
          {content}
        </div>
      </div>
    </>
  );
}

export default Cart;
