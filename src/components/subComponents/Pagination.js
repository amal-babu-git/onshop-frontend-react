import React, { useState } from 'react';
import { MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getNextProductPageLink, getPreviousProductPageLink } from '../../features/prodcuts/productSlice';



export default function Pagination({ page }) {

    const nextPageApi = useSelector(getNextProductPageLink)
    const previousPageApi=useSelector(getPreviousProductPageLink)
    const [pageNum,setPageNum] = useState(1)

    const dispatch = useDispatch()




    return (
        <nav aria-label='...'>
            <MDBPagination className='mb-0 mt-2'>
                <MDBPaginationItem disabled>
                    
                        {previousPageApi ? (
                            <MDBBtn rounded
                                onClick={() => {



                                    dispatch(fetchProducts({ page: previousPageApi }));
                                    setPageNum(pageNum-1)
                                }}


                            >Previous</MDBBtn>
                    ) : (<MDBBtn rounded disabled >Previous</MDBBtn>)
                        }
                    
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink >{pageNum-1}</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem active aria-current='page'>
                    <MDBPaginationLink >
                       {pageNum}<span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink >{pageNum+1}</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>

                    {nextPageApi ? (
                        <MDBBtn rounded
                            onClick={() => {



                                dispatch(fetchProducts({ page: nextPageApi }));
                                setPageNum(pageNum+1)
                            }}


                        >Next</MDBBtn>
                    ) : (<MDBBtn rounded disabled >Next</MDBBtn>)
                    }
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}