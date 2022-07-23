import React, { useEffect } from "react";
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
        // if (err.response.status === 401) {
        //   // add refresh function call here
        
        //  dispatch(logOut())
          
        // } else {
        //   toast.warn("Please login agin, something went wrong !!", {
        //     autoClose: 1000,
        //   });
        //   dispatch(logOut());
        // }
      });
      
  };



  useEffect(() => {
    console.log("calling... fetch cutomer info function...");
    fetchCustomerInfo();
  }, []);

  return (
    <div>
      <p>{username}</p>
      <p>{accessToken}</p>
      <ToastContainer />
    </div>
  );
};

export default Profile;
