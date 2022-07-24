import { MDBBtn, MDBCardBody, MDBCardTitle, MDBInput } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, IDLE, INDIAN_PHONE_REGEXP, LOADING, SUCCESS } from "../../apis";
import {
  fetchCustomerInfo,
  getCustomerInfoStatus,
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
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const EditUserInfoCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateUserInfoStatus = useSelector(getUserInfoStatus);
  const updateUserInfoError = useSelector(getUserInfoError);
  const updateCustomerInfoStatus = useSelector(getUpdateCustomerInfoStatus);
  const updateCustomerInfoError = useSelector(getupdateCustomerInfoError);

  const customerInfo = useSelector(selectCustomerInfo);

  const [firstname, setFirstname] = useState(customerInfo?.first_name);
  const [lastname, setLastname] = useState(customerInfo?.last_name);
  const [email, setEmail] = useState(customerInfo?.email);
  const [phone, setPhone] = useState(customerInfo?.phone);
  const [membership, setMembership] = useState("B");
  const [dob, setDob] = useState(customerInfo?.birth_date);

  const onChangeFirstName = (e) => setFirstname(e.target.value);
  const onChangeLastName = (e) => setLastname(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeMembership = (e) => setMembership(e.target.value);
  const onChangeDob = (e) => setDob(e.target.value);

  let content = "";

  useEffect(() => {
    console.log("useeff..");

    if (updateUserInfoStatus === LOADING) {
      content = <p>Loading...</p>;
    } else if (updateUserInfoStatus === SUCCESS) {
      console.log("updated");

      content = <p>Updated</p>;

      toast.success("Updated", { hideProgressBar: true });

      dispatch(fetchCustomerInfo());

      console.log("clean..");
      dispatch(setUpdateUserInfoStatus());
    } else if (updateUserInfoStatus === FAILED) {
      console.log(updateUserInfoError);
      toast.error("Cant verify your account, please login again...", {
        hideProgressBar: true,
      });

      console.log("clean..");
      dispatch(setUpdateUserInfoStatus());
      dispatch(logOut());
    }

    // return () => {};
  }, [updateUserInfoStatus]);

  useEffect(() => {
    if (updateCustomerInfoStatus === SUCCESS) {
      toast.success("Updated", { hideProgressBar: true });
    } else if (updateCustomerInfoStatus === FAILED) {
      toast.error("Update request failed", { hideProgressBar: true });
    }

    return () => {
      console.log("clean..");
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
    
   
    

    if(!phone.match(INDIAN_PHONE_REGEXP)){

      toast.error('Enter valid phone number',{autoClose:2000})
      return false

    }else if ((new Date().getFullYear() - new Date(dob).getFullYear()<18)) {
      
      toast("Date of birth is not valid, you should be above 18");
      return false;
    }
    console.log(dob)
    dispatch(updateCustomerInfo({ phone, dob, membership }));
    return true
  };

  return (
    <>
      <MDBCardBody className="ms-1 me-1">
        <MDBCardTitle>Update your profile</MDBCardTitle>

        <form className="mt-2 p-2 " onSubmit={onSubmitUserInfo}>
          <MDBInput
            className="mt-1 "
            label="First Name"
            id="firstname"
            type="text"
            value={firstname}
            onChange={onChangeFirstName}
          />

          <MDBInput
            className="mt-2"
            label="Last Name"
            id="lastname"
            type="text"
            value={lastname}
            onChange={onChangeLastName}
          />
          <MDBInput
            className="mt-2"
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={onChangeEmail}
          />
          <MDBBtn className="mt-2" type="submit" id="btnSubmit">
            Update
          </MDBBtn>
          <div className="mt-2">{content}</div>
        </form>
      </MDBCardBody>
      <MDBCardBody className="ms-1 me-1">
        {/* <MDBCardTitle></MDBCardTitle> */}

        <form className="mt-2 p-2" onSubmit={onSubmitCustomerInfo}>
          <MDBInput
            className="mt-1 "
            label="Phone"
            id="phone"
            type="tel"
            value={phone}
            onChange={onChangePhone}
          />

          <div className="mt-2 mb-2 ms-1 text-start font-bolder">
            <label htmlFor="membership" className="me-4">
              <b>Membership</b>
            </label>
            <select
              id="membership"
              tag="a"
              className="btn text-bolder ms-4"
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

          <MDBInput
            className="mt-2"
            label="Date of birth"
            id="dob"
            type="date"
            value={dob}
            onChange={onChangeDob}
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
