import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
} from 'mdb-react-ui-kit';
import "./Footer.css"

export default function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white mt-4 p-2'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </a>
                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </a>

                    <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                        <MDBIcon fab icon='github' />
                    </a>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    onshop.com
                </a>
            </div>
        </MDBFooter>
    );
}