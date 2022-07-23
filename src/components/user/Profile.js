import { MDBCard,MDBTabs,MDBTabsItem,MDBTabsLink,MDBCardBody,MDBCardHeader } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  logOut,
  selectAccessToken,
  selectRefreshToken,
  selectUsername,
  setCustomerInfo,
} from "../../features/auth/authUserSlice";
import axiosInstance from "../../features/auth/axios";

const Profile = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUsername);
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);

  const fetchCustomerInfo = async () => {
    // const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    console.log(accessToken);
    const response = await axiosInstance
      .get(`/store/customers/me`)
      .then((response) => {
        console.log(response.data);
        dispatch(setCustomerInfo(response.data));
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          toast.error("Time out, Please login again", {
            draggable: true,
            hideProgressBar: true,
          });
          dispatch(logOut());
        } else {
          toast.warn("Please login agin, something went wrong !!", {
            autoClose: 1000,
          });
          dispatch(logOut());
        }
      });
  };

  useEffect(() => {
    console.log("fetch customer info...");
    fetchCustomerInfo();
  }, []);


  const [profileTabActive, setProfileTabActive] = useState(true);
  const [filterByRangeActive, setFilterByRangeActive] = useState(false);
  const [searchActive, setsearchActive] = useState(false);

  const onClickProfileTab = () => {
    setProfileTabActive(true);
    setFilterByRangeActive(false);
    setsearchActive(false);
  };
  const onClickUpdateTab = () => {
    setProfileTabActive(false);
    setFilterByRangeActive(true);
    setsearchActive(false);
  };
  const searchOnClickHandler = () => {
    setProfileTabActive(false);
    setFilterByRangeActive(false);
    setsearchActive(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center ">
        <div className="mt-2 mb-1 col-sm-12 col-md-12 col-xl-12">
          <MDBCard className="text-center">
            <MDBCardHeader>
              <MDBTabs className="card-header-tabs">
                <MDBTabsItem>
                  <MDBTabsLink active={profileTabActive} onClick={onClickProfileTab}>
                    Profile
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    active={filterByRangeActive}
                    onClick={onClickUpdateTab}
                  >
                    Edit Profile
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

            {filterByRangeActive && <div>h</div>}
            {profileTabActive && <div>y</div>}
            <MDBCardBody>{searchActive && <div>hh</div>}</MDBCardBody>
          </MDBCard>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
