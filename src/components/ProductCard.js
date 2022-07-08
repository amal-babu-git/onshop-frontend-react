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

export default function ProductCard() {
  return (
    <div className="col-sm col-md-4 col-xl-3 m-1">
      <MDBCard style={{ maxWidth: "22rem" }}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
          />
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Product title</MDBCardTitle>
          <p className="text-dark"> $ Price</p>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
         
            <MDBBtn className="me-1 mt-1">Add to cart</MDBBtn>
            <MDBBtn className="mt-1">Add to cart</MDBBtn>
          
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
