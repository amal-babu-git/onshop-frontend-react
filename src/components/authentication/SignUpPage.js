import React, { useEffect, useRef, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
} from "mdb-react-ui-kit";
import login_image from "../../images/login-p.png";
import login_page_logo_img from "../../images/logob.png";
import { toast } from "react-toastify";

const SignUpPage = () => {

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    confPassword: ''
  }


  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)




  const onChangeInputFieldsHandler = (e) => {


    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })


  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues))
    setIsSubmit(true)

  }

  const validate = (values) => {

    const errors = {};
    const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.username) {
      errors.username = "Username is required"
    }
    if (!values.firstname) {
      errors.firstname = "First name is required"
    }
    if (!values.lastname) {
      errors.lastname = "Last name is required"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!emailRegexp.test(values.email)) {
      errors.email = "This is not valid email"
    }
    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character"

    }
    if (!values.confPassword) {
      errors.confPassword = "Please confirm your password"
    } else if (!(values.password === values.confPassword)) {
      errors.confPassword = "Password doesn's match"
    }

    return errors
  }

  useEffect(() => {

    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('fv', formValues)
      toast.success('SignUp success')
    }

  }, [formErrors])






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
            type="text"
            id="firstname"
            name="firstname"
            label="First name"
            value={formValues.firstname}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.firstname}</p>
          <MDBInput
            className="mb-4"
            type="text"
            id="lastname"
            name="lastname"
            label="Last name"
            value={formValues.lastname}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.lastname}</p>
          <MDBInput
            className="mb-4"
            type="email"
            id="email"
            name="email"
            label="Email address"
            value={formValues.email}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.email}</p>
          <MDBInput
            className="mb-4"
            type="text"
            id="username"
            name="username"
            label="Username"
            value={formValues.username}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.username}</p>
          <MDBInput
            className="mb-4"
            type="password"
            id="password"
            name="password"
            label="Password"
            value={formValues.password}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.password}</p>
          <MDBInput
            className="mb-4"
            type="password"
            id="cpassword"
            name="confPassword"
            label="Confirm Password"
            value={formValues.confPassword}
            onChange={onChangeInputFieldsHandler}
          />
          <p className="text-danger">{formErrors.confPassword}</p>

          <MDBBtn type="submit" block>
            Sign Up
          </MDBBtn>
        </form>
      </div>
    </MDBCard>
  );
};

export default SignUpPage;
