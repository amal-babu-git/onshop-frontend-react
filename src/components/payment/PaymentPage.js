import React, { useState } from 'react'
import PaymentB from './PaymentB'
import PaymentR from './PaymentR';

const PaymentPage = () => {



  return (
    <div className="container">
      <div className="row mt-4">
        <PaymentB />
        {/* <PaymentR/> */}
      </div>
    </div>
  );
}

export default PaymentPage