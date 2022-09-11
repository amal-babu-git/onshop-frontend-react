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
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTSeGKCXlAc8rVak4rI6hCTuc7j3tThwE9Ybmx-EARiS2CwFKP64t_T6Gj9lUSiI3HSweF4_I0SLIm2/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </MDBCardBody>
        </MDBCardHeader>
      </MDBCard>
    </div>
  );
}

export default CustomerService