import {
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getCurrentCollectionId } from "../../../features/collections/collectionsSlice";
import {
  fetchProducts,
  setPaginationNumber,
} from "../../../features/prodcuts/productSlice";
import { STORE_PRODUCTS_API } from "../../../apis";

const PriceRangeFilter = () => {
  // gt-->greater than
  const [gtPrice, setGtPrice] = useState('');
  const [ltPrice, setLtPrice] = useState('');

  const [sortPriceAscActive, setSortPriceAscActive] = useState(false);
  const [sortPriceDescActive, setSortPriceDescActive] = useState(false);
  const [sortDateDescActive, setSortDateDescActive] = useState(false);

  const onChangeGtRange = (e) => setGtPrice(e.target.value);
  const onChangeLtRange = (e) => setLtPrice(e.target.value);

  const dispatch = useDispatch();
  const currentCollectionId = useSelector(getCurrentCollectionId) ?? ''

  const filterButtonClickHandler = (e) => {
    e.preventDefault();

    if (gtPrice > 0 && ltPrice > gtPrice) {
      toast("Filtering...", { position: "top-center", autoClose: 1 });
      dispatch(
        fetchProducts({
          page: `${STORE_PRODUCTS_API}?collection_id=${currentCollectionId}&page=1&unit_price__gt=${gtPrice}&unit_price__lt=${ltPrice}`,
        })
      );
      dispatch(setPaginationNumber(1));
    } else {
      toast.error("Enter a valid range !!!", { autoClose: 1000 });
    }
  };

  function onClickClearAllHandler() {
    setSortPriceAscActive(false);
    setSortPriceDescActive(false);
    setSortDateDescActive(false);
    setGtPrice("");
    setLtPrice("");
  }

  const onClickSortPriceAscHandler = () => {
    setSortPriceAscActive(true);
    setSortPriceDescActive(false);
    setSortDateDescActive(false);

    if (parseFloat(gtPrice) > 0 && parseFloat(ltPrice) > parseFloat(gtPrice)) {
      toast("Filtering...", { position: "top-center", autoClose: 1 });
      dispatch(
        fetchProducts({
          page: `${STORE_PRODUCTS_API}?collection_id=${currentCollectionId}&ordering=unit_price&page=1&unit_price__gt=${gtPrice}&unit_price__lt=${ltPrice}`,
        })
      );

      dispatch(setPaginationNumber(1));
    } else {
      toast.error("Enter a valid range !!!", { autoClose: 1000 });
      onClickClearAllHandler();
    }
  };
  const onClickSortPriceDescHandler = () => {
    setSortPriceAscActive(false);
    setSortPriceDescActive(true);
    setSortDateDescActive(false);

    if (parseFloat(gtPrice) > 0 && parseFloat(ltPrice) > parseFloat(gtPrice)) {
      toast("Filtering...", { position: "top-center", autoClose: 1 });
      dispatch(
        fetchProducts({
          page: `${STORE_PRODUCTS_API}?collection_id=${currentCollectionId}&ordering=-unit_price&page=1&unit_price__gt=${gtPrice}&unit_price__lt=${ltPrice}`,
        })
      );

      dispatch(setPaginationNumber(1));
    } else {
      toast.error("Enter a valid range !!!", { autoClose: 1000 });
      onClickClearAllHandler();
    }
  };

  const onClickSortDateDescHandler = () => {
    setSortPriceAscActive(false);
    setSortPriceDescActive(false);
    setSortDateDescActive(true);

    if (parseFloat(gtPrice) > 0 && parseFloat(ltPrice) > parseFloat(gtPrice)) {
      toast("Filtering...", { position: "top-center", autoClose: 1 });
      dispatch(
        fetchProducts({
          page: `${STORE_PRODUCTS_API}?collection_id=${currentCollectionId}&ordering=-last_update&page=1&unit_price__gt=${gtPrice}&unit_price__lt=${ltPrice}`,
        })
      );

      dispatch(setPaginationNumber(1));
    } else {
      toast.error("Enter a valid range !!!", { autoClose: 1000 });
      onClickClearAllHandler();
    }
  };

  return (
    <MDBCardBody>
      <MDBCardTitle>Enter Price Range</MDBCardTitle>
      <form className="m-1">
        <MDBInput
          className="mt-1"
          label="Price is greater than"
          id="typeNumber"
          type="number"
          value={gtPrice}
          onChange={onChangeGtRange}
        />
        <MDBInput
          className="mt-2"
          label="Price is less than"
          id="typeNumber"
          type="number"
          value={ltPrice}
          onChange={onChangeLtRange}
        />
        <MDBListGroup style={{ minWidth: "22rem" }} className="mt-2">
          <MDBListGroupItem
            onClick={onClickSortPriceAscHandler}
            active={sortPriceAscActive}
            aria-current="true"
          >
            Low to High
          </MDBListGroupItem>
          <MDBListGroupItem
            onClick={onClickSortPriceDescHandler}
            active={sortPriceDescActive}
          >
            High to Low
          </MDBListGroupItem>
          <MDBListGroupItem
            onClick={onClickSortDateDescHandler}
            active={sortDateDescActive}
          >
            Last Updated
          </MDBListGroupItem>
        </MDBListGroup>
      </form>

      <div className="p-1">
        <MDBBtn onClick={filterButtonClickHandler} className="me-1">Filter</MDBBtn>
        <MDBBtn onClick={onClickClearAllHandler} className="ms-1">Clear All</MDBBtn>
      </div>

      {/* for tosting filtering message */}
      <ToastContainer />
    </MDBCardBody>
  );
};

export default PriceRangeFilter;
