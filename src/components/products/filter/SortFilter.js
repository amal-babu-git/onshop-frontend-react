import React, { useState } from 'react'
import { MDBBtn, MDBCardBody, MDBCardTitle, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

const SortFilter = () => {

  const [filterPriceAscActive, setfilterPriceAscActive] = useState(false);
  const [filterPriceDescActive, setfilterPriceDescActive] = useState(false);
  const [filterDateAscActive, setfilterDateAscActive] = useState(false);
  const [filterDateDescActive, setfilterDateDescActive] = useState(false);

  const onClickFilterPriceAscHandler = () => {
    
    setfilterPriceAscActive(true);
    setfilterPriceDescActive(false);
    setfilterDateAscActive(false);
    setfilterDateDescActive(false);


  }
  const onClickFilterPriceDescHandler = () => {
    

    setfilterPriceAscActive(false);
    setfilterPriceDescActive(true);
    setfilterDateAscActive(false);
    setfilterDateDescActive(false);


  }
  const onClickFilterDateAscHandler = () => {
    

    setfilterPriceAscActive(false);
    setfilterPriceDescActive(false);
    setfilterDateAscActive(true);
    setfilterDateDescActive(false);


  }
  const onClickFilterDateDescHandler = () => {
    

    setfilterPriceAscActive(false);
    setfilterPriceDescActive(false);
    setfilterDateAscActive(false);
    setfilterDateDescActive(true);


  }

  const onClickClearAllHandler=()=>{
    setfilterPriceAscActive(false);
    setfilterPriceDescActive(false);
    setfilterDateAscActive(false);
    setfilterDateDescActive(false);
  }





  return (
    <MDBCardBody>
      <MDBCardTitle>Sort by price</MDBCardTitle>
      <MDBListGroup style={{ minWidth: '22rem' }}>
        <MDBListGroupItem onClick={onClickFilterPriceAscHandler} active={filterPriceAscActive} aria-current='true'>Filter by price ascending</MDBListGroupItem>
        <MDBListGroupItem onClick={onClickFilterPriceDescHandler} active={filterPriceDescActive}>Filter by price descending</MDBListGroupItem>
        <MDBListGroupItem onClick={onClickFilterDateAscHandler} active={filterDateAscActive}>Filter by update date ascending</MDBListGroupItem>
        <MDBListGroupItem onClick={onClickFilterDateDescHandler} active={filterDateDescActive}>Filter by update date descending</MDBListGroupItem>
       
      </MDBListGroup>
      <MDBBtn className='mt-1' onClick={onClickClearAllHandler}>Clear all</MDBBtn>
    </MDBCardBody>
  );
}

export default SortFilter