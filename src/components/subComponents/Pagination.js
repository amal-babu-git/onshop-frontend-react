import React from 'react';
import { MDBBtn, MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPaginationNum, fetchProducts, getNextProductPageLink, getPreviousProductPageLink, incrementPaginationNum, selectPaginationNum } from '../../features/prodcuts/productSlice';



export default function Pagination() {

    const nextPageApi = useSelector(getNextProductPageLink)
    const previousPageApi=useSelector(getPreviousProductPageLink)
    const paginationNum=useSelector(selectPaginationNum)

    const dispatch = useDispatch()



    return (
        <nav aria-label='...'>
            <MDBPagination className='mb-0 mt-2'>
                <MDBPaginationItem disabled>
                    
                        {previousPageApi ? (
                            <MDBBtn rounded
                                onClick={() => {



                                    dispatch(fetchProducts({ page: previousPageApi }));
                                    dispatch(decrementPaginationNum())
                                }}


                            >Previous</MDBBtn>
                    ) : (<MDBBtn rounded disabled >Previous</MDBBtn>)
                        }
                    
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink >{paginationNum-1}</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem active aria-current='page'>
                    <MDBPaginationLink >
                       {paginationNum}<span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink >{paginationNum+1}</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>

                    {nextPageApi ? (
                        <MDBBtn rounded
                            onClick={() => {


                                dispatch(fetchProducts({ page: nextPageApi }));
                                dispatch(incrementPaginationNum())
                            }}


                        >Next</MDBBtn>
                    ) : (<MDBBtn rounded disabled >Next</MDBBtn>)
                    }
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}