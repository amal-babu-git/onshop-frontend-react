import { MDBBtn, MDBCard, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import { ADMIN, SUCCESS } from '../../apis'
import { getCustomerInfoStatus, selectCustomerInfo } from '../../features/auth/authUserSlice'

const AdminProfileCard = () => {

    const customerInfo=useSelector(selectCustomerInfo)
    const customerInfoFetchStatus=useSelector(getCustomerInfoStatus)
    const isStaff=customerInfo?.is_staff
    const username=customerInfo?.username

  

    const content = (
      <div className="badge-primary text-center p-2 mt-2 mb-1 fs-6 fw-bolder">
        <div className="text-primary fs-6 fw-bolder">
          @{username}
          <span className="badge badge-danger ms-1 me-1">Admin</span>
          <MDBIcon fas icon="check-double" color="primary" />
        </div>
        <div>
          <p className="text-darker">
            You are an admin user, you can login to admin dashboard
          </p>
          <p>Use this sample username and password</p>
          <p>Username: lucy123</p>
          <p>Password: lucy123</p>
          <MDBBtn active={true} href={ADMIN} target="_blank">
            Go to admin dashboard
          </MDBBtn>
        </div>
      </div>
    );

  return (
      <>
          {customerInfoFetchStatus===SUCCESS && isStaff && (
            content
          )}
      </>
  )
}

export default AdminProfileCard