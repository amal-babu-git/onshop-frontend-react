import { MDBBtn, MDBCardBody, MDBCardTitle, MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getCurrentCollectionId } from "../../../features/collections/collectionsSlice";
import {
  fetchProducts,
  setPaginationNumber,
} from "../../../features/prodcuts/productSlice";

const PriceRangeFilter = () => {
  // gt-->greater than
  const [gtPrice, setGtPrice] = useState(0);
  const [ltPrice, setLtPrice] = useState(0);

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
          page: `http://127.0.0.1:8000/store/products/?collection_id=${currentCollectionId}&page=1&unit_price__gt=${gtPrice}&unit_price__lt=${ltPrice}`,
        })
      );
      dispatch(setPaginationNumber(1));
    } else {
      toast.error("Enter a valid range !!!", { autoClose: 1000 });
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
          onChange={onChangeGtRange}
        />
        <MDBInput
          className="mt-2"
          label="Price is less than"
          id="typeNumber"
          type="number"
          onChange={onChangeLtRange}
        />
      </form>
      <MDBBtn onClick={filterButtonClickHandler}>Filter</MDBBtn>
      {/* for tosting filtering message */}
      <ToastContainer />
    </MDBCardBody>
  );
};

export default PriceRangeFilter;
