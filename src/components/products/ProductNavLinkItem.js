import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { STORE_PRODUCTS_API } from '../../apis'
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice'

import { setCurrentCollectionId } from '../../features/collections/collectionsSlice'
const ProductNavLinkItem = () => {

    const dispatch = useDispatch()

    return (
        <Link


            to="/products" className="nav-link "

            onClick={() => {

                dispatch(fetchProducts({ page: STORE_PRODUCTS_API }))
                dispatch(setPaginationNumber(1))
                dispatch(setCurrentCollectionId (null))
            }}


        >
            Products
        </Link>
    )
}

export default ProductNavLinkItem