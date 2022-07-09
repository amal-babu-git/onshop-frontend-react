import React from 'react';
import { MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';



export default function Pagination({page}) {

   



    return (
        <nav aria-label='...'>
            <MDBPagination className='mb-0'>
                <MDBPaginationItem disabled>
                    <MDBBtn rounded  tabIndex={-1} aria-disabled='true'>
                        Previous
                    </MDBBtn>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>1</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem active aria-current='page'>
                    <MDBPaginationLink href='#'>
                        2 <span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>3</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBBtn rounded 
                    onClick={()=>{

                        
                        
                    }} >Next</MDBBtn>
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}