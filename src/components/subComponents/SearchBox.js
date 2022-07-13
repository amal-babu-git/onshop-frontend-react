import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBox = () => {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const onChangeSearchQuery = (e) => setSearchQuery(e.target.value)

  const searchBoxClickHandler = (e) => {
    e.preventDefault()
    navigate('/products')

    if (!searchQuery == '') {
      dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?page=1&search=${searchQuery}` }))
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
        <MDBBtn rounded onClick={searchBoxClickHandler}>Search</MDBBtn>

      </form>
      <ToastContainer />

    </div>
  );
}

export default SearchBox