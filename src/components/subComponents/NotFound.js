import React from 'react'
import { toast } from 'react-toastify';

const NotFound = () => {

    toast.warn("Invalid URL")
    
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 ms-2 me-2 mt-4">
          <p className="display-1 fw-bold text-dark font-monospace">404</p>
          <p className="display-1 fw-bold text-dark font-monospace">
            Not Found
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound