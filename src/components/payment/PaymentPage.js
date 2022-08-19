import React from 'react'
import PaymentB from './PaymentB'
import PaymentR from './PaymentR';
import {  MDBTypography } from 'mdb-react-ui-kit'

const PaymentPage = () => {



  return (
    <div className="container card">
      <div className="row mt-4 mb-2 p-2">
        <MDBTypography note noteColor="danger">
          <strong>Please wait...</strong>
          Do not refresh or close this page.
        </MDBTypography>

        <div className="mt-1 mb-4 text-center">
          <PaymentR />
          <p className='mt-4 fs-6 fw-bolder'>or pay with braintree</p>
        </div>
        <div className="mb-1 mt-4">
          <PaymentB />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage