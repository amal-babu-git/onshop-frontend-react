import React from "react";
import { useSelector } from "react-redux";
import {
  selectAccessToken,
  selectUsername,
} from "../../features/auth/authUserSlice";

const Profile = () => {
  const username = useSelector(selectUsername);
  const accessToken = useSelector(selectAccessToken);
  return (
    <div>
      <p>{username}</p>
      <p>{accessToken}</p>
    </div>
  );
};

export default Profile;
