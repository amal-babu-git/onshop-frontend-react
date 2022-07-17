import React from "react";
import { MDBInput, MDBBtn, MDBCard } from "mdb-react-ui-kit";
import login_image from "../../images/login-p.png";
import login_page_logo_img from "../../images/logob.png";

const SignUpNextPage = () => {
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
            type="tel"
            id="phone"
            label="Mobile number"
          />
          <MDBInput className="mb-4" type="date" id="dob" label="Birth date" />

          {/* <label htmlFor="membership" className="mb-4 btn me-4">Membership</label> */}
          <select
            id="membership"
            tag="a"
            className="btn mb-4 align-self-center"
          >
            <option value="B">
              <b>Membership</b>
            </option>
            <option value="B">
              <b>Bronze</b>
            </option>
            <option value="S">
              <b>Silver</b>
            </option>
            <option value="G">
              <b>Gold</b>
            </option>
          </select>

          <MDBBtn type="submit" block>
            continue
          </MDBBtn>
        </form>
      </div>
    </MDBCard>
  );
};

export default SignUpNextPage;
