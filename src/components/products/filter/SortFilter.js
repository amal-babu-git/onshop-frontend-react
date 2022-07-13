import React from 'react'
import { MDBBtn, MDBCardBody, MDBCardTitle } from "mdb-react-ui-kit";

const SortFilter = () => {
  return (
    <MDBCardBody>
      <MDBCardTitle>Sort by price</MDBCardTitle>
      <MDBBtn>Sort</MDBBtn>
    </MDBCardBody>
  );
}

export default SortFilter