import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { useGetCollectionsQuery } from "../../features/collections/collectionsSlice";
import CollectionLinkItem from "./CollectionLinkItem";
import { Link, NavLink } from "react-router-dom";

const CollectionOptionForNavBar = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetCollectionsQuery();
  let content = "";

  if (isLoading) {
    content = <p className="spinner-border text-primary mt-4" />;

  } else if (isSuccess) {

    console.log("collection:", data);
    content = data.map((data, index) => (
      <CollectionLinkItem key={data.id} title={data.title} id={data.id} />

    ));
  } else if (isError) {
    console.log(error);
    content = (
      <p className="spinner-border text-danger mt-4 ">
        Network error
      </p>
    );
  }

  return (
    <MDBDropdown>
      <MDBDropdownToggle tag="a" className="nav-link" style={{cursor:"pointer"}}>
        Collection
      </MDBDropdownToggle>
      <MDBDropdownMenu className="pt-4">{content}</MDBDropdownMenu>
    </MDBDropdown>
  );
};

export default CollectionOptionForNavBar;
