import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  di,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";

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
              <Link to="/products" className="nav-link">
                Products
              </Link>
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
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Collection
                </MDBDropdownToggle>
                <MDBDropdownMenu className="pt-4">
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn  rounded>Search</MDBBtn>
          </form>
          <form className="d-flex input-group w-auto ms-1">
            <Link to="/signin">
              <MDBBtn >Login</MDBBtn>
            </Link>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
