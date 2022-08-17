import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBIcon,
} from "mdb-react-ui-kit";
import login_image from "../../images/login-p.png";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import { EMAIL_REGEXP, REGISTER_NEW_USER_API } from "../../apis";
import axios from 'axios'
import ColorLogo from "./ColorLogo";


const SignUpPage = () => {

  const navigate = useNavigate()


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
  const [passwordType, setPasswordType] = useState('password')




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
    


    if (!EMAIL_REGEXP.test(values.email)) {
      errors.email = "This is not valid email"
    }
    if (values.password.length < 9) {
      errors.password = "Password must be more than 8 character"

    }
    if (!(values.password === values.confPassword)) {
      errors.confPassword = "Password doesn's match"
    }

    return errors
  }

  useEffect(() => {

    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log('fv', formValues)

      registerUserHandler(formValues)

    }

  }, [formErrors])



  //API CALL

  const registerUserHandler = async (formValues) => {


    const response = await axios.post(REGISTER_NEW_USER_API, {

      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      first_name: formValues.firstname,
      last_name: formValues.lastname,

    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then((response) => {

        toast.success('Signup success')
        console.log(response.data)

        navigate('/signin')
      })
      .catch((err) => {

        console.log(err)


        let serverErros = ''


        if (err.response.data.password) {
          err.response.data.password.map((res) => (serverErros += '\n' + res))

        } else if (err.response.data.username) {
          err.response.data.username.map((res) => (serverErros += '\n' + res))

        } else if (err.response.data.email) {

          err.response.data.email.map((res) => (serverErros += '\n' + res))

        } else {

          serverErros += 'Something went wrong please try again!'

        }


        toast.error(serverErros, { autoClose: 10000 })

        console.log(err)




      })

  }



  return (
    <MDBCard className="container p-4 mt-4 mb-4" style={{ maxWidth: "30rem" }}>
      <div className="row justify-content-center">
        {/* <img
          src={login_image}
          alt="img"
          className="img-fluid rounded"
          style={{ maxWidth: "20rem" }}
        /> */}
        <ColorLogo/>
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
            required
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
            required
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
            required
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
            required
          />
          <p className="text-danger">{formErrors.username}</p>

          <div className="form-control mb-2">

            {passwordType === 'password' && <MDBIcon fas icon="eye" className="ms-1 mb-2"
              onClick={() => {

                setPasswordType('text')

              }} />
              
            }
            {passwordType === 'text' && <MDBIcon fas icon="eye-slash" className="ms-1 mb-2"
              onClick={() => {

                setPasswordType('password')

              }} />
              
            }
            
            <MDBInput
              className="mb-4"
              type={passwordType}
              id="password"
              name="password"
              label="Password"
              value={formValues.password}
              onChange={onChangeInputFieldsHandler}
              required
            />
            <p className="text-danger">{formErrors.password}</p>

            <MDBInput
              className="mb-4"
              type={passwordType}
              id="cpassword"
              name="confPassword"
              label="Confirm Password"
              value={formValues.confPassword}
              onChange={onChangeInputFieldsHandler}
              required
            />

            <p className="text-danger">{formErrors.confPassword}</p>
          </div>




          <MDBBtn type="submit" block>
            Sign Up

          </MDBBtn>



        </form>
      </div>
    </MDBCard>
  );
};

export default SignUpPage;
