import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit'
import React from 'react'

const CustomerService = () => {
  return (
    <div className="container mt-2">
      <MDBCard className="row text-center p-2 " style={{minHeight:"600px"}}>
        <MDBCardHeader>
          <MDBCardTitle>Contact Us</MDBCardTitle>
          <MDBCardBody>
            <p className="fw-bolder">
              Contact : <b className='text-primary'>(+91) 9074631926</b>
            </p>
            <p className="fw-bolder">
              Email : <b className='text-primary email'>onshop.online.in@gmail.com</b>
            </p>
          </MDBCardBody>
        </MDBCardHeader>
      </MDBCard>
    </div>
  );
}

export default CustomerService