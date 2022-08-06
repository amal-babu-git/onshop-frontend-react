import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, LOADING, SUCCESS } from "../../../apis";
import { MDBSpinner } from "mdb-react-ui-kit";
import {
  fetchOrdersHandler,
  getOrdersFetchError,
  getOrdersFetchStatus,
  selectOrders,
} from "../../../features/order/orderSlice";
import OrderCard from "./OrderCard";

const Orders = () => {
  const dispatch = useDispatch();

  const orderFetchStatus = useSelector(getOrdersFetchStatus);
  const ordersFetchError = useSelector(getOrdersFetchError);
  const orders = useSelector(selectOrders);

  let content = "";

  useEffect(() => {
    dispatch(fetchOrdersHandler());
  }, []);

  switch (orderFetchStatus) {
    case LOADING:
      content = <MDBSpinner className="mt-4" color="primary"></MDBSpinner>;

      break;
    case SUCCESS:

        content=orders.map((item,index)=>(
          
          <OrderCard key={index} order={item}/>
        ))



      break;
    case FAILED:
      break;

    default:
      break;
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">{content}</div>
      </div>
    </div>
  );
};

export default Orders;
