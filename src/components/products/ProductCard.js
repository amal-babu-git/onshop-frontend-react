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
import { Link, useNavigate } from "react-router-dom";
import defaultImage from "../../images/logob2.png"
import { addToCart } from "../cart/cartApiCalls";

export default function ProductCard({ data }) {

  const navigate = useNavigate()

  const product_image = data.images[0]

  const addToCartHandler = () => {

    addToCart(data.id,1)

  }


  return (
    <div className="col-sm-12 col-md-4  col-xl-3 mt-2">

      <MDBCard style={{ maxWidth: "23rem" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {product_image ? (
            <MDBCardImage src={product_image.image} fluid alt="No image available" />
          ) : (
            <MDBCardImage

              src={defaultImage}
              fluid
              alt="No image available"
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

          <>
            <MDBBtn rounded outline className="me-4 mt-1 "
              onClick={addToCartHandler}
            >
              Add to cart
            </MDBBtn>
          </>

          <MDBBtn
            rounded
            outline
            className="mt-1 "
            onClick={() => {
              navigate("/product-detail", { state: data });
            }}
          >
            View
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
