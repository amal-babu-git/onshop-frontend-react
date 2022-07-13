import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "./subComponents/SearchBox";
import CollectionOptionForNavBar from "./collection/CollectionOptionForNavBar";
import ProductNavLinkItem from "./products/ProductNavLinkItem";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light justify-content sticky-top">
      <MDBContainer fluid>
        <NavLink className="fs-4 fw-bolder" to="/">
          OnShop
        </NavLink>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <ProductNavLinkItem />
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <CollectionOptionForNavBar />
            </MDBNavbarItem>

            <MDBNavbarItem>
              
            </MDBNavbarItem>


          </MDBNavbarNav>

          <SearchBox />
          <form className="d-flex input-group w-auto ms-1 p-1">
            <Link to="/signin">
              <MDBBtn>Login</MDBBtn>
            </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
