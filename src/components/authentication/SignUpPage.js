import React from "react";
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

const SignUpPage = () => {
  return (
    <MDBCard className="container p-4 mt-4 mb-4" style={{ maxWidth: "30rem" }}>
      <div className="row justify-content-center">
        <img
          src={login_image}
          alt="img"
          class="img-fluid rounded"
          style={{ maxWidth: "20rem" }}
        />
      </div>
      <div className="row justify-content-center">
        <form >
          <MDBInput
            className="mb-4"
            type="text"
            id="firstname"
            label="First name"
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="lastname"
            label="Last name"
          />
          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            label="Email address"
          />
          <MDBInput
            className="mb-4"
            type="text"
            id="username"
            label="Username"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="password"
            label="Password"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="cpassword"
            label="Confirm Password"
          />

          <MDBBtn type="submit" block>
            Sign Up
          </MDBBtn>
        </form>
      </div>
    </MDBCard>
  );
};

export default SignUpPage;
