import React from 'react'
import {
    MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice';
import { NavLink } from 'react-router-dom';
import {  setCurrentCollectionId } from '../../features/collections/collectionsSlice';

const CollectionLinkItem = ({ id, title }) => {

    
    const dispatch = useDispatch()
    return (
        <MDBDropdownItem >

            <NavLink to='/products' className="dropdown-item"
                style={{ backgroundColor: "white" }}

                onClick={() => {
                    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?collection_id=${id}` }));
                    dispatch(setCurrentCollectionId(id))
                    dispatch(setPaginationNumber(1))
                    
                }


                }

            >
                {title}
            </NavLink>


        </MDBDropdownItem>
    )
}

export default CollectionLinkItem