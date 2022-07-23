import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
} from "mdb-react-ui-kit";
import login_image from "../../images/login-p.png";
import login_page_logo_img from "../../images/logob.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  fetchCustomerInfo,
  getSignInsignInError,
  getSigninSignInStatus,
  selectAccessToken,
  signIn,
} from "../../features/auth/authUserSlice";
import { FAILED, LOADING, SUCCESS } from "../../apis";
import { STORE_API } from "../../apis";
import jwtDecode from "jwt-decode";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  // const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const signInStatus = useSelector(getSigninSignInStatus);
  const signInError = useSelector(getSignInsignInError);
  const accessToken = useSelector(selectAccessToken);

  const onClickSignIn = (e) => {
    e.preventDefault();

    if (username === "") {
      setErr("Enter username");

      return false;
    }
    if (parseInt(password.length) < 4) {
      setErr("Enter correct password");

      return false;
    }

    setErr("");

    console.log("username");

    dispatch(signIn({ username, password }));
    return true;
  };

  if (signInStatus === LOADING) {
    toast("loading...", { autoClose: 1000 });
  } else if (signInStatus === SUCCESS) {
    console.log("success");
    toast.success(`Login done, welcome ${username}`, {
      autoClose: 1000,
      hideProgressBar: true,
    });

    setTimeout(() => navigate("/user/profile"), 1000);
  } else if (signInStatus === FAILED) {
    console.log(signInError);
    toast.error("Login failed, please enter correct username and password");
  }

  return (
    <MDBCard className="container p-4 mt-4 mb-4" style={{ maxWidth: "30rem" }}>
      <div className="row justify-content-center">
        <img
          src={login_image}
          alt="img"
          className="img-fluid rounded"
          style={{ maxWidth: "20rem" }}
        />
      </div>
      <div className="row justify-content-center">
        <form onSubmit={onClickSignIn}>
          <MDBInput
            className="mb-4"
            type="text"
            id="username"
            label="Username"
            value={username}
            onChange={onChangeUsername}
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="password"
            label="Password"
            value={password}
            onChange={onChangePassword}
          />
          <p className="ms-1  text-danger">{err}</p>

          {/* <MDBRow className="mb-4">
            <MDBCol className="d-flex justify-content-center">
              <MDBCheckbox
                id="form1Example3"
                label="Remember me"
                defaultChecked
              />
            </MDBCol>
            <MDBCol>
              <a href="#!">Forgot password?</a>
            </MDBCol>
          </MDBRow> */}

          <MDBBtn type="submit" block>
            Sign in
          </MDBBtn>

          <div className="text-center mt-4">
            <p>
              Not a member? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </MDBCard>
  );
};

export default SignInPage;
