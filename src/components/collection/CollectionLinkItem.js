import React from 'react'
import {
    MDBDropdownItem,
    MDBDropdownLink,
} from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/prodcuts/productSlice';

const CollectionLinkItem = ({ id,title }) => {
    const dispatch = useDispatch()
    return (
        <MDBDropdownItem >
            <MDBDropdownLink

                onClick={() => dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?collection_id=${id}` }))}

            >{title}</MDBDropdownLink>
        </MDBDropdownItem>
    )
}

export default CollectionLinkItem