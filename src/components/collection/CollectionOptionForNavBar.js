import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import { getCollectionsError, getCollectionsStatus, selectAllCollections, useGetCollectionsQuery } from "../../features/collections/collectionsSlice";
import CollectionLinkItem from "./CollectionLinkItem";
import { useSelector } from "react-redux";


const CollectionOptionForNavBar = () => {

  const fetchStatus = useSelector(getCollectionsStatus);
  const error = useSelector(getCollectionsError)
  const data = useSelector(selectAllCollections)

  // fetching collections done at index.js

  let content = "";

  if (fetchStatus === 'loading') {
    content = <p className="spinner-border text-primary mt-4" />;

  } else if (fetchStatus === 'succeeded') {

    console.log("collection:", data);
    content = data.map((data, index) => (
      <CollectionLinkItem key={data.id} title={data.title} id={data.id} />

    ));
  } else if (fetchStatus === 'failed') {
    console.log(error);
    content = (
      <p className="spinner-border text-danger mt-4 ">
        Network error
      </p>
    );
  }

  return (
    <MDBDropdown>
      <MDBDropdownToggle tag="a" className="nav-link" style={{ cursor: "pointer" }}>
        Collection
      </MDBDropdownToggle>
      <MDBDropdownMenu className="pt-4">{content}</MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default CollectionOptionForNavBar;
