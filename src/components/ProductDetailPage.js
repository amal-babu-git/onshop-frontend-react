import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            className="img-fluid hover-shadow"
            alt="Wild Landscape"
            style={{ maxWidth: "600px" }}
          />
        </div>
        <div className="mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <h3 className="fs-1">Title</h3>
          <h4>
            Price :{" "}
            <strong className="text-decoration-line-through fs-4">
              {" "}
              ₹ 1020
            </strong>
            <strong className="fs-4"> ₹ 499</strong>
          </h4>
          <h5>Category : Beauty</h5>
          <h5>Discount : 21%</h5>
          <MDBBtn className="mt-4">Add to Cart</MDBBtn>
        </div>
      </div>
      <div className="row justify-content-center col-sm col-md-6 col-lg-6 col-xl-6">
        <div className="mt-4">
          <p className="fs-4 ">Description</p>
        </div>
      </div>
    </div>
  );
}
