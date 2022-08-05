import { MDBBtn, MDBCard, MDBInput } from "mdb-react-ui-kit";
import React from "react";

const EditAddressCard = () => {


  






  return (
    <div>
      <MDBCard className="mt-2">
        <form className="mt-2 p-2" onSubmit={"onSubmitUserInfo"}>
          <table className="table table-borderless text-start">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="street">
                    Street
                  </label>
                </td>

                <td>
                  <MDBInput
                    className="form-control"
                    aria-label="Enter street"
                    label="Enter street"
                    id="street"
                    name="street"
                    type="text"
                    value={""}
                    onChange={""}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="city">
                    City
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter city"
                    id="city"
                    name="city"
                    type="text"
                    value={""}
                    onChange={"onChangeLastName"}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="landmark">
                    Land Mark
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter landmark"
                    id="landmark"
                    name="landmark"
                    type="text"
                    value={""}
                    onChange={"onChangelandmark"}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="houseno">
                    House Number
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter house no."
                    id="houseno"
                    name="houseno"
                    type="number"
                    pattern="[0-9]{6}"
                    onChange={"onChangelandmark"}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="pincode">
                    Postal Code
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter pincode"
                    id="pincode"
                    name="pincode"
                    type="text"
                    pattern="[0-9]{6}"
                    onChange={"onChangelandmark"}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="phone">
                    Contact Number
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter phone no."
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={"onChangelandmark"}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <MDBBtn className="mt-2 mb-2" type="submit" id="btnSubmit">
            Update
          </MDBBtn>
        </form>
      </MDBCard>
    </div>
  );
};

export default EditAddressCard;
