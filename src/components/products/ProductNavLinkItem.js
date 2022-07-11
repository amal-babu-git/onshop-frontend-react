import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { STORE_PRODUCTS_API } from '../../apis'
import { fetchProducts } from '../../features/prodcuts/productSlice'
import { MDBBtn } from 'mdb-react-ui-kit'
const ProductNavLinkItem = () => {

    const dispatch = useDispatch()

    return (
        <Link


            to="/products" className="nav-link "

            onClick={() => dispatch(fetchProducts({ page: STORE_PRODUCTS_API }))}


        >
        Products
        </Link>
    )
}

export default ProductNavLinkItem