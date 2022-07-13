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

const FilterCard = () => {
  const [sortActive, setSortActive] = useState(true);
  const [filterByRangeActive, setFilterByRangeActive] = useState(false);
  const [searchActive, setsearchActive] = useState(false);

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
    <div className="mt-2 mb-1">
      <MDBCard className="text-center">
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
                Filter By Price Range
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink active={searchActive} onClick={searchOnClickHandler}>
                Search
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCardHeader>

        {filterByRangeActive && <PriceRangeFilter />}
        {sortActive && <SortFilter />}
        <MDBCardBody>{searchActive && <SearchBox />}</MDBCardBody>
        
      </MDBCard>
    </div>
  );
};

export default FilterCard;
