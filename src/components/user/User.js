import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import {
  selectAccessToken,
  selectUsername,
} from "../../features/auth/authUserSlice";
import SignInPage from "../authentication/SignInPage";
import LoginReqNotice from "../subComponents/LoginReqNotice";

const User = () => {
  
  const username = useSelector(selectUsername);
  const accessToken = useSelector(selectAccessToken);

  

  return (
    <div>
      <h2>user</h2>

      {username ? <Outlet /> :<LoginReqNotice/> }
    </div>
  );
};

export default User;
