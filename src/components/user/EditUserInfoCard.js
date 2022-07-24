import { MDBBtn, MDBCardBody, MDBCardTitle, MDBInput } from "mdb-react-ui-kit";

const EditUserInfoCard = () => {
  return (
    <>
      <MDBCardBody className="ms-1 me-1">
        <MDBCardTitle>Update your profile</MDBCardTitle>

        <form className="mt-2 p-2 ">
          <MDBInput
            className="mt-1 "
            label="First Name"
            id="firstname"
            type="text"
            //   value={gtPrice}
            //   onChange={onChangeGtRange}
          />

          <MDBInput
            className="mt-2"
            label="Last Name"
            id="lastname"
            type="text"
            //   value={ltPrice}
            //   onChange={onChangeLtRange}
          />
          <MDBInput
            className="mt-2"
            label="Email"
            id="email"
            type="email"
            //   value={ltPrice}
            //   onChange={onChangeLtRange}
          />
          <MDBBtn
            className="mt-2"
            type="submit"
            id="btnSubmit"
            //   value={ltPrice}
            //   onChange={onChangeLtRange}
          >
            Update
          </MDBBtn>
        </form>
      </MDBCardBody>
      <MDBCardBody className="ms-1 me-1">
        {/* <MDBCardTitle></MDBCardTitle> */}

        <form className="mt-2 p-2 ">
          <MDBInput
            className="mt-1 "
            label="Phone"
            id="phone"
            type="tel"
            //   value={gtPrice}
            //   onChange={onChangeGtRange}
          />

          <div className="mt-2 mb-2 ms-1 text-start font-bolder">
            <label htmlFor="membership" className="me-4">
              <b>Membership</b>
            </label>
            <select id="membership" tag="a" className="btn text-bolder ms-4">
              <option value="B">Bronze</option>
              <option value="S">Silver</option>
              <option value="G">Gold</option>
            </select>
          </div>

          <MDBInput
            className="mt-2"
            label="Date of birth"
            id="dob"
            type="date"
            //   value={ltPrice}
            //   onChange={onChangeLtRange}
          />
          <MDBBtn
            className="mt-2"
            type="submit"
            id="btnSubmitC"
            //   value={ltPrice}
            //   onChange={onChangeLtRange}
          >
            Update
          </MDBBtn>
        </form>
      </MDBCardBody>
    </>
  );
};

export default EditUserInfoCard;
