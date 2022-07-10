import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react'


const SearchBox = () => {

    

  return (
    <div>
     
      <form className="d-flex input-group w-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
        />
        <MDBBtn rounded>Search</MDBBtn>
      </form>
    </div>
  );
}

export default SearchBox