import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {

  const product_image_url = data.images[0]


  return (
    <div className="col-sm-12 col-md-4  col-xl-3  m-1">
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {product_image_url ? (
            <MDBCardImage
              src={product_image_url.image}
              fluid
              alt="..."
            />
          ) : (
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
              fluid
              alt="..."
            />
          )}

          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{data.title}</MDBCardTitle>
          <p className="text-dark"> ₹ {data.unit_price}</p>
          <MDBCardText>{data.collection}</MDBCardText>

          <Link to="/cart">
            <MDBBtn rounded outline className="me-4 mt-1 ">
              Add to cart
            </MDBBtn>
          </Link>
          <Link to="/product-detail">
            <MDBBtn rounded outline className="mt-1 ">
              View
            </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
