import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardBody,
  MDBCardFooter
} from "mdb-react-ui-kit";

const ReviewCard = ({ username, description ,date}) => {
  return (
    <div className="col-xl-6 mt-2 card" style={{ maxWidth: "40rem" }}>
      <MDBCardHeader>
        <MDBCardTitle>{username}</MDBCardTitle>
      </MDBCardHeader>
      <MDBCardBody>
        <p className="fw-normal">{description}</p>
      </MDBCardBody>
      <MDBCardFooter>{date}</MDBCardFooter>
    </div>
  );
};

export default ReviewCard;
