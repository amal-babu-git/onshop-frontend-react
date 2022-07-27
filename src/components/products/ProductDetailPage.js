import React, { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { Link, useLocation } from "react-router-dom";
import AddToCartBtn from "../cart/AddToCartBtn";

export default function ProductCard() {
  const location = useLocation();

  const id = location.state.id
  const unit_price = location.state.unit_price;
  const title = location.state.title;
  const description = location.state.description;
  const collection = location.state.collection;
  const product_image = location.state.images[0];
  const discount_price_prcent = 21;

  const [quantity, setQuantity] = useState(1)



  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          {product_image ? (
            <img
              src={product_image.image}
              className="img-fluid hover-shadow"
              alt="Wild Landscape"
            />
          ) : (
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="img-fluid hover-shadow"
              alt="Wild Landscape"
            />
          )}
        </div>
        <div className="mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          <h3 className="fs-1">{title}</h3>
          <h4>
            Price :
            <strong className="text-decoration-line-through fs-4">
              ₹{" "}
              {Math.floor((unit_price / 100) * discount_price_prcent) +
                unit_price}
            </strong>
            <strong className="fs-4"> ₹ {unit_price}</strong>
          </h4>
          <h5>Category : {collection}</h5>
          <h5>Discount : {discount_price_prcent}%</h5>
          <div className="mt-4 w-50" >

            <MDBInput
              className="mb-2"
              label='Quantity'
              id='quantity'
              name='quantity'
              onChange={(e) => setQuantity(e.target.value)}
              type='number' />

            <AddToCartBtn id={id} quantity={quantity} />
          </div>

        </div>
      </div>
      <div className="row justify-content-center col-sm col-md-6 col-lg-6 col-xl-6">
        <div className="mt-4">
          <p className="fs-4 ">{description}</p>
        </div>
      </div>
    </div>
  );
}
