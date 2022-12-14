import { MDBBtn, MDBCardBody, MDBCardTitle, MDBInput } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, INDIAN_PHONE_REGEXP, LOADING, SUCCESS } from "../../apis";
import {
  fetchCustomerInfo,
  getupdateCustomerInfoError,
  getUpdateCustomerInfoStatus,
  getUserInfoError,
  getUserInfoStatus,
  logOut,
  selectCustomerInfo,
  setUpdateCustomerInfoStatus,
  setUpdateUserInfoStatus,
  updateCustomerInfo,
  updateUserInfo,
} from "../../features/auth/authUserSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

const EditUserInfoCard = () => {
  const dispatch = useDispatch();

  const updateUserInfoStatus = useSelector(getUserInfoStatus);
  const updateUserInfoError = useSelector(getUserInfoError);
  const updateCustomerInfoStatus = useSelector(getUpdateCustomerInfoStatus);
  const updateCustomerInfoError = useSelector(getupdateCustomerInfoError);

  const customerInfo = useSelector(selectCustomerInfo);

  const [firstname, setFirstname] = useState(customerInfo?.first_name);
  const [lastname, setLastname] = useState(customerInfo?.last_name);
  const [email, setEmail] = useState(customerInfo?.email);
  const [phone, setPhone] = useState(customerInfo?.phone ?? '');
  const [membership, setMembership] = useState("B");
  const [dob, setDob] = useState(customerInfo?.birth_date ?? '');

  const onChangeFirstName = (e) => setFirstname(e.target.value);
  const onChangeLastName = (e) => setLastname(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeMembership = (e) => setMembership(e.target.value);
  const onChangeDob = (e) => setDob(e.target.value);

  let content = "";

  useEffect(() => {
    if (updateUserInfoStatus === LOADING) {
      content = <p>Loading...</p>;
    } else if (updateUserInfoStatus === SUCCESS) {
      content = <p>Updated</p>;

      toast.success("Updated", { hideProgressBar: true });

      dispatch(fetchCustomerInfo());

      dispatch(setUpdateUserInfoStatus());
    } else if (updateUserInfoStatus === FAILED) {
      console.log(updateUserInfoError);
      toast.error("Cant verify your account, please login again...", {
        hideProgressBar: true,
      });

      // reset the update status to null
      dispatch(setUpdateUserInfoStatus());
      dispatch(logOut());
    }

    // return () => {};
  }, [updateUserInfoStatus]);

  useEffect(() => {
    if (updateCustomerInfoStatus === SUCCESS) {
      toast.success("Updated", { hideProgressBar: true });
    } else if (updateCustomerInfoStatus === FAILED) {
      console.log(updateCustomerInfoError);
      toast.error("Update request failed", { hideProgressBar: true });
    }

    return () => {
      dispatch(setUpdateCustomerInfoStatus());
    };
  }, [updateCustomerInfoStatus]);

  const onSubmitUserInfo = (e) => {
    e.preventDefault();

    if (
      firstname === customerInfo?.first_name &&
      lastname === customerInfo?.last_name &&
      email === customerInfo?.email
    ) {
      toast.warn("No change found...", { hideProgressBar: true });
      return false;
    } else if (!(firstname && lastname && email)) {
      toast.warn("All fields are required", { hideProgressBar: true });
      return false;
    }

    dispatch(updateUserInfo({ firstname, lastname, email }));
    return true;
  };
  const onSubmitCustomerInfo = (e) => {
    e.preventDefault();

    if (!phone.match(INDIAN_PHONE_REGEXP)) {
      toast.error("Enter valid phone number", { autoClose: 2000 });
      return false;
    } else if (new Date().getFullYear() - new Date(dob).getFullYear() < 15) {
      toast.error("Date of birth is not valid, you should be above 15");
      return false;
    } else if (
      phone === customerInfo.phone &&
      dob === customerInfo.birth_date &&
      membership === customerInfo.membership
    ) {
      toast.warn("No change found", { autoClose: 2000, hideProgressBar: true });
      return false;
    }

    dispatch(updateCustomerInfo({ phone, dob, membership }));
    return true;
  };

  return (
    <motion.div initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'tween' }}>
      <MDBCardBody className="ms-1 me-1">
        <MDBCardTitle>Update your profile</MDBCardTitle>

        <form className="mt-2 p-2 form-control" onSubmit={onSubmitUserInfo}>
          <table className="table table-borderless text-start">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="firstname">
                    First Name
                  </label>
                </td>

                <td>
                  <input
                    className="form-control"
                    label="First Name"
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={onChangeFirstName}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="lastname">
                    Last Name
                  </label>
                </td>
                <td>
                  <input
                    className="form-control"
                    label="Last Name"
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={onChangeLastName}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="email">
                    Email
                  </label>
                </td>
                <td>
                  <input
                    className="form-control"
                    label="Email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <MDBBtn className="mt-2" type="submit" id="btnSubmit">
            Update
          </MDBBtn>
          <div className="mt-2">{content}</div>
        </form>
      </MDBCardBody>
      <MDBCardBody className="ms-1 me-1">
        {/* <MDBCardTitle></MDBCardTitle> */}

        <form className="mt-2 p-2 form-control" onSubmit={onSubmitCustomerInfo}>
          <table className="table table-borderless text-start">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="phone">
                    Phone
                  </label>
                </td>
                <td>
                  <input
                    className="form-control"
                    label="Phone"
                    name="phone"
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={onChangePhone}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="membership">
                    Membership
                  </label>
                </td>
                <td>
                  <div className="text-start font-bolder">
                    <select
                      id="membership"
                      name="membership"
                      tag="a"
                      className="btn text-bolder form-control"
                      onChange={onChangeMembership}
                      defaultChecked={membership}

                      // value={membership}
                    >
                      <option value="B" id="B">
                        Bronze
                      </option>
                      <option value="S" id="S">
                        Silver
                      </option>
                      <option value="G" id="G">
                        Gold 
                      </option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="dob">
                    Date Of Birth
                  </label>
                </td>
                <td>
                  <input
                    className="form-control"
                    label="Date of birth"
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={onChangeDob}
                  />
                </td>
              </tr>
            </tbody>
          </table>

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
    </motion.div>
  );
};

export default EditUserInfoCard;
