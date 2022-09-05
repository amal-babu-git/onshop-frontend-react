import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice';
import {  toast } from 'react-toastify';
import { STORE_PRODUCTS_API } from '../../apis';


const SearchBox = () => {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const onChangeSearchQuery = (e) => setSearchQuery(e.target.value)

  const searchButtonClickHandler = (e) => {
    e.preventDefault()
    navigate('/products')

    if (!searchQuery == '') {
      dispatch(fetchProducts({ page: `${STORE_PRODUCTS_API}?page=1&search=${searchQuery}` }))
      dispatch(setPaginationNumber(1))
    } else {

      toast.error("Enter search query",{ autoClose: 1000 })

    }

  }



  return (
    <div>

      <form className="d-flex input-group w-auto">

        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          onChange={onChangeSearchQuery}

        />
        <MDBBtn rounded onClick={searchButtonClickHandler}>Search</MDBBtn>

      </form>

    </div>
  );
}

export default SearchBox