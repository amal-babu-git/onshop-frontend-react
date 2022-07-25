import React, { useEffect, useState } from "react";
import { MDBInput, MDBBtn, MDBCard } from "mdb-react-ui-kit";
import login_image from "../../images/login-p.png";
import login_page_logo_img from "../../images/logob.png";
import { toast } from "react-toastify";
import { INDIAN_PHONE_REGEXP } from "../../apis";

 // TODO :Form validation is done, temporarly suspended work becs api for update this info without login not yet build

const SignUpNextPage = () => {

  const initialValues = {
    phone: '',
    dob: '',
    membership: 'B'

  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)



  const onChangeInputFieldHandler = (e) => {

    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })



  }

  const validate = (values) => {

    const errors = {}

    if (!values.phone.match(INDIAN_PHONE_REGEXP)) {

      errors.phone = 'Invalid phone number'
    }
    if ((new Date().getFullYear() - new Date(values.dob).getFullYear() < 18)) {

      errors.dob = 'Age should be above 18'
    }

    return errors



  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues))
    setIsSubmit(true)

  }

  useEffect(() => {

    console.log(formErrors)

    if ((Object.keys(formErrors).length === 0) && isSubmit) {
      toast('Success')
      console.log(formValues)
    }

  }, [formErrors])


  TODO:// This page is plan to navigate after signup but now i hold this call and after signin navigate to login page,
  // same thing can done in edit profile after signin , this is page is holded here becs 'API for this without sigin in not yet built'
  



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
        <form onSubmit={onSubmitHandler}>
          <MDBInput
            className="mb-4"
            type="tel"
            id="phone"
            name="phone"
            label="Mobile number"
            value={formValues.phone}
            onChange={onChangeInputFieldHandler}
          />
          <p className="text-danger">{formErrors.phone}</p>
          <MDBInput className="mb-4"
            type="date" id="dob"
            label="Birth date" name="dob"
            value={formValues.dob}
            onChange={onChangeInputFieldHandler}
          />
          <p className="text-danger">{formErrors.dob}</p>

          {/* <label htmlFor="membership" className="mb-4 btn me-4">Membership</label> */}
          <select
            id="membership"
            tag="a"
            name="membership"
            className="btn mb-4 align-self-center"
            value={formValues.membership}
            onChange={onChangeInputFieldHandler}
          >
            <option value="B">
              Membership
            </option>
            <option value="B">
              Bronze
            </option>
            <option value="S">
              Silver
            </option>
            <option value="G">
              Gold
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
