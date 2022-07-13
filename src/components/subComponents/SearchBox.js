import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProducts, setPaginationNumber } from '../../features/prodcuts/productSlice';


const SearchBox = () => {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const searchBoxClickHandler = (e) => {
    e.preventDefault()
    navigate('/products')
    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?page=1&search=${searchQuery}` }))
    dispatch(setPaginationNumber(1))

  }

  const onChangeSearchQuery = (e) => setSearchQuery(e.target.value)

  return (
    <div>

      <form className="d-flex input-group w-auto">

        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          onChange={onChangeSearchQuery}
          onClick={searchBoxClickHandler}
        />
        <MDBBtn rounded onClick={searchBoxClickHandler}>Search</MDBBtn>

      </form>

    </div>
  );
}

export default SearchBox