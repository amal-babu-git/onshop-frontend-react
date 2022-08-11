import axios from "axios";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBIcon, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { STORE_PRODUCTS_API, SUCCESS } from "../../../apis";
import {
  getOrdersFetchStatus,
} from "../../../features/order/orderSlice";

const OrderDetail = () => {

  const location = useLocation()
  const order = location.state
  const isShipped = order.is_shipped
  const isDeliverd = order.is_delivered

  const isCancelled = order.is_cancelled;
  const orderId = order.id
  const placedAt = order.placed_at
  const totalPrice = order.total_price
  const paymentStatus = order?.payment[0]?.payment_status
  const transactionId = order?.payment[0]?.transaction_id
  const totalAmountPaid = order?.payment[0]?.total_amount
  const paymentMethod = order?.payment[0]?.payment_method

  const fetchOrdersStatus = useSelector(getOrdersFetchStatus);

  const navigate = useNavigate()

  // When user click the view button in the order detail table navigate to that product detail page
  const fetchSingleProductItem = async (productId) => {
    await axios
      .get(`${STORE_PRODUCTS_API}${productId}/`)

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


  const Content = () => {


    let items = order.items.map((item, index) => (
      <tr key={index}>
        <td>{item.product.title}</td>
        <td>{item.quantity}</td>
        <td>{item.unit_price}</td>
        <td><MDBBtn outline rounded size="sm"

          onClick={() => {

            fetchSingleProductItem(item.product.id)

          }}

        >View</MDBBtn></td>
      </tr>
    ))

    return (
      <div className="container">
        <MDBCard className="row justify-content-center mt-4">
          <MDBCardHeader>
            <MDBCardTitle className="ms-1">Order Details</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <div>
              {isCancelled && (
                <MDBTypography note noteColor="danger">
                  <strong>This order is cancelled</strong> For  more details please contact to onshop customer care
                </MDBTypography>
              )}
            </div>
            <table className="table table-striped fs-6">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Shipped</td>
                  <td>
                    {isShipped ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Deliverd</td>
                  <td>
                    {isDeliverd ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Order Id</td>
                  <td>{orderId}</td>
                </tr>
                <tr>
                  <td>Placed at</td>
                  <td>{placedAt}</td>
                </tr>
                <tr>
                  <td>Payment status</td>
                  <td>
                    {paymentStatus === "C" ? (
                      <MDBIcon
                        fas
                        icon="check-circle"
                        color="primary"
                        size="lg"
                      />
                    ) : (
                      <MDBIcon fas icon="times" color="danger" size="lg" />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>Payment method</td>
                  <td>
                    {paymentMethod === "ON" ? <p>Online</p> : <p>Pay on delivery</p>}
                  </td>
                </tr>
                <tr>
                  <td>Amount paid in online</td>
                  <td>
                    {totalAmountPaid}
                  </td>
                </tr>
                <tr>
                  <td>Online transaction id</td>
                  <td>
                    {transactionId}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped ms-1">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {items}
                <tr className="fs-6 fw-bolder">
                  <td>Total price</td>
                  <td></td>
                  <td></td>
                  <td>₹ {totalPrice}</td>
                </tr>

              </tbody>
            </table>
          </MDBCardBody>
        </MDBCard>
      </div>
    );


  };




  return <div>{fetchOrdersStatus === SUCCESS && <Content />}</div>;
};

export default OrderDetail;
