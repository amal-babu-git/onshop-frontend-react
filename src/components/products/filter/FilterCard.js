import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import SortFilter from "./SortFilter";
import SearchBox from "../../subComponents/SearchBox";
import { motion } from 'framer-motion'

const FilterCard = ({ constrainRef }) => {
  const [sortActive, setSortActive] = useState(true);
  const [filterByRangeActive, setFilterByRangeActive] = useState(false);
  const [searchActive, setsearchActive] = useState(false);
  const [open,setOpen]=useState(false)

  const sortOnClickHandler = () => {
    setSortActive(true);
    setFilterByRangeActive(false);
    setsearchActive(false);
  };
  const filterOnClickHandler = () => {
    setSortActive(false);
    setFilterByRangeActive(true);
    setsearchActive(false);
  };
  const searchOnClickHandler = () => {
    setSortActive(false);
    setFilterByRangeActive(false);
    setsearchActive(true);
  };

  return (
    <motion.div
      drag
      dragConstraints={constrainRef}
      style={{ zIndex: "10", position: "fixed" }}
      className="mt-2  mb-1 col-sm-12 col-md-12 col-xl-6"
    >
      <MDBBtn
        color="secondary"
        
        className="mt-2 mb-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close Filter" : "Open filter"}
      </MDBBtn>
      {open && (
        <MDBCard className="text-center" style={{maxWidth:"400px"}}>
          <MDBCardHeader>
            <MDBTabs className="card-header-tabs">
              <MDBTabsItem>
                <MDBTabsLink active={sortActive} onClick={sortOnClickHandler}>
                  Sort
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  active={filterByRangeActive}
                  onClick={filterOnClickHandler}
                >
                  Price Range
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  active={searchActive}
                  onClick={searchOnClickHandler}
                >
                  Search
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </MDBCardHeader>

          {filterByRangeActive && <PriceRangeFilter />}
          {sortActive && <SortFilter />}
          <MDBCardBody>{searchActive && <SearchBox />}</MDBCardBody>
        </MDBCard>
      )}
    </motion.div>
  );
};

export default FilterCard;
