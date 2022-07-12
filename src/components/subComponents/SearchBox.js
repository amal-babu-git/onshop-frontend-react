import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/prodcuts/productSlice';


const SearchBox = () => {

  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState('')

  const searchBoxHandler = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value)
    console.log(searchQuery)
    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?page=1&search=${searchQuery}` }))

  }

  return (
    <div>

      <form className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          onChange={searchBoxHandler}
        />
        <MDBBtn rounded onClick={searchBoxHandler}>Search</MDBBtn>
      </form>
    </div>
  );
}

export default SearchBox