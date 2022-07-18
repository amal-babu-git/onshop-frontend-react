import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  selectAccessToken,
  selectUsername,
} from "../../features/auth/authUserSlice";
import SignInPage from "../authentication/SignInPage";

const User = () => {
  const username = useSelector(selectUsername);
  const accessToken = useSelector(selectAccessToken);

  return (
    <div>
      <h2>user</h2>

      {username ? <Outlet /> : <SignInPage />}
    </div>
  );
};

export default User;
