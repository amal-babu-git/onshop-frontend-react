import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut, selectUsername } from "../../features/auth/authUserSlice";
import { setCartId } from "../../features/cart/cartSlice";

const LoginLogoutNavBtns = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUsername);

  const onClickLogout = () => {
    dispatch(logOut());
    navigate("signin");
  };

  return (
    <div>
      <div className="d-flex input-group w-auto ms-1 p-1">
        {username ? (
          <MDBBtn onClick={onClickLogout}>Logout</MDBBtn>
        ) : (
          <Link to="/signin">
            <MDBBtn>Login</MDBBtn>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginLogoutNavBtns;
