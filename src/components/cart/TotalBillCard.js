import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CART_ID, STORE_CARTS_API } from "../../apis";
import { setCartFetchStatus, setCartId } from "../../features/cart/cartSlice";
import PopupMenu from "../products/filter/PopupMenu";
import DeleteToast from "../subComponents/Toast/DeleteToast";

const TotalBillCard = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const deleteCart = async () => {
    if (localStorage.getItem(CART_ID)) {
      const cartId = JSON.parse(localStorage.getItem(CART_ID));

      await axios
        .delete(`${STORE_CARTS_API}${cartId}`)
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem(CART_ID);
          toast.done("deleted");
          // dispatch(createCart())
          return response.data;
        })
        .catch((err) => {
          console.log(err);

          toast.error("Can't delete");

          return err;
        });
    }
  };

  const DeleteAlert = () => {
    return (
      <div>
        <p className="fs-5 fw-bolder" > Are you sure ? </p>
        <MDBBtn color="danger"  onClick={onClickDelete} >
          Delete Cart
        </MDBBtn>
      </div>
    );
  };

  const onClickDelete = () => {
    deleteCart();
    dispatch(setCartId());
    dispatch(setCartFetchStatus());

    toast(<DeleteToast />, { hideProgressBar: true });
    navigate("/products");
  };

  const onClickBuy = () => {
    navigate("/user/place-order", { state: cart });
  };

  return (
    <MDBCard>
      <MDBCardBody>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>TOTAL BILL AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong> ₹ {cart.total_price}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <PopupMenu btnText="Delete Cart" title="Delete Cart" body={<DeleteAlert/>} btnOutline={false} />
                {!cart.total_price==0 && <MDBBtn
                  className="ms-4"
                  id="buy"
                  name="buy"
                  onClick={onClickBuy}
                >
                  Buy
                </MDBBtn>}
              </td>
            </tr>
          </tbody>
        </table>
      </MDBCardBody>
    </MDBCard>
  );
};

export default TotalBillCard;
