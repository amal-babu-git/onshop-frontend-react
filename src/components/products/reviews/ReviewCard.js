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
    <MDBCard className="col-xl-6 mt-2" style={{ maxWidth: "40rem" }}>
      <MDBCardHeader>
        <MDBCardTitle>{username}</MDBCardTitle>
      </MDBCardHeader>
      <MDBCardBody>
        <p className="fw-normal">{description}</p>
      </MDBCardBody>
      <MDBCardFooter>{date}</MDBCardFooter>
    </MDBCard>
  );
};

export default ReviewCard;
