import React, { useState } from 'react'
import { MDBBtn, MDBCardBody, MDBCardTitle, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../features/prodcuts/productSlice';
import { getCurrentCollectionId } from '../../../features/collections/collectionsSlice';

const SortFilter = () => {
  const dispatch = useDispatch();

  const [sortPriceAscActive, setSortPriceAscActive] = useState(false);
  const [sortPriceDescActive, setSortPriceDescActive] = useState(false);
  const [sortDateDescActive, setSortDateDescActive] = useState(false);

  const currentCollectionId = useSelector(getCurrentCollectionId) ?? ''

  const onClickSortPriceAscHandler = () => {
    setSortPriceAscActive(true);
    setSortPriceDescActive(false);
    setSortDateDescActive(false);

    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?collection_id=${currentCollectionId}&ordering=unit_price&page=1&unit_price__gt=&unit_price__lt=` }))



  }
  const onClickSortPriceDescHandler = () => {


    setSortPriceAscActive(false);
    setSortPriceDescActive(true);
    setSortDateDescActive(false);

    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?collection_id=${currentCollectionId}&ordering=-unit_price&page=1&unit_price__gt=&unit_price__lt=` }))



  }
 
  const onClickSortDateDescHandler = () => {


    setSortPriceAscActive(false);
    setSortPriceDescActive(false);
    setSortDateDescActive(true);

    dispatch(fetchProducts({ page: `http://127.0.0.1:8000/store/products/?collection_id=${currentCollectionId}&ordering=-last_update&page=1&unit_price__gt=&unit_price__lt=` }))



  }

  const onClickClearAllHandler = () => {
    setSortPriceAscActive(false);
    setSortPriceDescActive(false);
    setSortDateDescActive(false);
  }





  return (
    <MDBCardBody>
      <MDBCardTitle>Sort by price</MDBCardTitle>
      <MDBListGroup style={{ minWidth: '22rem' }}>
        <MDBListGroupItem onClick={onClickSortPriceAscHandler} active={sortPriceAscActive} aria-current='true'>Low to High</MDBListGroupItem>
        <MDBListGroupItem onClick={onClickSortPriceDescHandler} active={sortPriceDescActive}>High to Low</MDBListGroupItem>
        <MDBListGroupItem onClick={onClickSortDateDescHandler} active={sortDateDescActive}>Last Updated</MDBListGroupItem>

      </MDBListGroup>
      <MDBBtn className='mt-1' onClick={onClickClearAllHandler}>Clear all</MDBBtn>
    </MDBCardBody>
  );
}

export default SortFilter