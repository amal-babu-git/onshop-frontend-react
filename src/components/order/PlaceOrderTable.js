import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { selectUsername } from "../../features/auth/authUserSlice";

const PlaceOrderTable = ({ orderList }) => {
  const username = useSelector(selectUsername);

  let items = orderList.items.map((item, index) => (
    <tr key={index}>
      <td>{item.product.id}</td>
      <td>{item.product.title}</td>
      <td>{item.quantity}</td>
      <td>{item.product.unit_price}</td>
    </tr>
  ));

  return (
    <div>
      <div className="mt-4 ms-1 form-control">
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order ID</td>
              <td>{orderList?.id}</td>
            </tr>
            <tr>
              <td>Customer ID</td>
              <td>{orderList?.customer}</td>
            </tr>

            <tr>
              <td>Username</td>
              <td>{username}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{orderList?.placed_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 ms-1 form-control">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>PRODUCT ID</th>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>UNIT PRICE</th>
            </tr>
          </thead>
          <tbody>
            {items}
            <tr>
              <td>Download invoice</td>
              <td></td>
              <td></td>
              <td>
                <MDBBtn
                  rounded
                  outline
                  onClick={() => {
                    window.scrollTo(0, 0)
                    setTimeout(() => {
                      window.print();
                    }, 1000);
                  }}
                >
                  Print
                </MDBBtn>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="note note-primary">
          <strong>Order Placed </strong>
          Dear {username}, Thank you for your order! We’d like to inform you
          that your order has been confirmed and your
          <b> order No.{orderList?.id} </b>has been successfully processed. Once
          your items have been packed, they will be shipped to you immediately.
          If you have any queries regarding your order, please do not hesitate
          to contact us.
        </p>
      </div>
    </div>
  );
};

export default PlaceOrderTable;
