import React from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
} from "mdb-react-ui-kit";
import login_image from "../images/login-p.png";
import login_page_logo_img from "../images/logob.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
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
        <form>
          <MDBInput
            className="mb-4"
            type="text"
            id="form1Example1"
            label="Username"
          />
          <MDBInput
            className="mb-4"
            type="password"
            id="form1Example2"
            label="Password"
          />

          <MDBRow className="mb-4">
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
          </MDBRow>

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
