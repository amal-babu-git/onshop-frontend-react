import React from 'react'
import {
    MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice';
import { NavLink } from 'react-router-dom';
import {  setCurrentCollectionId } from '../../features/collections/collectionsSlice';
import { STORE_PRODUCTS_API } from '../../apis';

const CollectionLinkItem = ({ id, title }) => {

    
    const dispatch = useDispatch()
    return (
        <MDBDropdownItem >

            <NavLink to='/products' className="dropdown-item"
                style={{ backgroundColor: "white" }}

                onClick={() => {
                    dispatch(fetchProducts({ page: `${STORE_PRODUCTS_API}?collection_id=${id}` }));
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