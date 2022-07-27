import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartToast = ({ link = '/cart', msg = 'Added' }) => {

   

    


    return (
        <div>
                <MDBBtn className='m-1' color='none' tag='a'
                 href={link}
            >
                <MDBIcon fas icon="shopping-cart" className='me-2' />
                {msg}
            </MDBBtn>
            
        </div>
    )
}

export default CartToast