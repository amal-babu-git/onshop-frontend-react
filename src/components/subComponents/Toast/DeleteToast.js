import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'

const DeleteToast = ({msg="Deleted"}) => {
    return (
        <div>
            <MDBBtn className='m-1' color='none' tag='a'>
                <MDBIcon className='me-2' color='danger' fas icon="trash" />
                {msg}
            </MDBBtn>

        </div>
    )
}

export default DeleteToast