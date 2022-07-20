import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const LoginReqNotice = () => {
    const navigate = useNavigate()


    return (
        <div className='p-4 m-4'>
            <p>Login is required ....</p>
            <MDBBtn outline className="m-4 p-4" onClick={() => navigate('/signin')}>Go to Login page</MDBBtn>
            </div>
    )
}

export default LoginReqNotice