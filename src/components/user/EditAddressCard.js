import { MDBBtn, MDBCard, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { INDIAN_PHONE_REGEXP, STORE_API } from "../../apis";
import {
  fetchCustomerInfo,
  selectCustomerInfo,
} from "../../features/auth/authUserSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { updateAddress } from "../../features/auth/updateAddressThunk";
import axiosInstance from "../../features/auth/axios";
import PrimaryAddress from "./PrimaryAddress";
import {motion} from 'framer-motion'

const EditAddressCard = () => {
  const dispatch = useDispatch();
  const customerInfo = useSelector(selectCustomerInfo);

  const initialValues = {
    street: customerInfo?.address[0]?.street ?? "",
    city: customerInfo?.address[0]?.city ?? "",
    landmark: customerInfo?.address[0]?.land_mark ?? "",
    house: customerInfo?.address[0]?.house_no ?? "",
    postal: customerInfo?.address[0]?.postal ?? "",
    phone: customerInfo?.address[0]?.phone_no ?? "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeInputFieldHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (
      customerInfo?.address[0]?.street === values.street &&
      customerInfo?.address[0]?.city === values.city &&
      customerInfo?.address[0]?.land_mark === values.landmark &&
      customerInfo?.address[0]?.phone_no === values.phone &&
      customerInfo?.address[0]?.postal === parseInt(values.postal) &&
      customerInfo?.address[0]?.house_no === parseInt(values.house)
    ) {
      toast.warn("No changes found", {
        autoClose: 1000,
        hideProgressBar: true,
      });
      errors.street = "No change found";
      errors.city = "No change found";
      errors.phone = "No change found";
      errors.house = "No change found";
      errors.landmark = "No change found";
      errors.postal = "No change found";
    }
    if (!values.phone.match(INDIAN_PHONE_REGEXP)) {
      errors.phone = "Please enter valid phone number";
    }

    // TODO: can add more validation condition here

    return errors;
  };

  const updateAddressHandler = async (
    customerID,
    formValues,
    addressId = 1
  ) => {
    await axiosInstance
      .put(`${STORE_API}customers/${customerID}/address/${addressId}/`, {
        street: formValues.street,
        city: formValues.city,
        postal: formValues.postal,
        house_no: formValues.house,
        land_mark: formValues.landmark,
        phone_no: formValues.phone,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Updated", { autoClose: 1000, hideProgressBar: true });
        dispatch(fetchCustomerInfo());
      })
      .catch((err) => {
        toast.error("Something went wrong!", { hideProgressBar: true });
        console.log(err);
      });
  };

  const addAddressHandler = async (customerID, formValues, addressId = 1) => {
    await axiosInstance
      .post(`${STORE_API}customers/${customerID}/address/`, {
        street: formValues.street,
        city: formValues.city,
        postal: formValues.postal,
        house_no: formValues.house,
        land_mark: formValues.landmark,
        phone_no: formValues.phone,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Updated", { autoClose: 1000, hideProgressBar: true });
        dispatch(fetchCustomerInfo());
      })
      .catch((err) => {
        toast.error("Something went wrong!", { hideProgressBar: true });
        console.log(err);
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      if (customerInfo.address[0]) {
        updateAddressHandler(
          customerInfo.id,
          formValues,
          customerInfo.address[0]?.id
        );
      } else {
        addAddressHandler(customerInfo.id, formValues);
      }
    }
  }, [formErrors]);

  return (
    <motion.div 
    initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'tween' }}>
      <MDBCard className="mt-2">
        <PrimaryAddress />
        <form className="mt-2 p-2" onSubmit={onSubmitHandler}>
          <table className="table table-borderless table-sm text-start">
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
                    value={formValues.street}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.street}</p>
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
                    value={formValues.city}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.city}</p>
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
                    value={formValues.landmark}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.landmark}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="house">
                    House Number
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter house no."
                    id="house"
                    name="house"
                    type="number"
                    value={formValues.house}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.house}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="fs-6 fw-bolder" htmlFor="postal">
                    Postal Code
                  </label>
                </td>
                <td>
                  <MDBInput
                    className="form-control"
                    label="Enter postal code"
                    id="postal"
                    name="postal"
                    type="text"
                    pattern="[0-9]{6}"
                    value={formValues.postal}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.postal}</p>
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
                    value={formValues.phone}
                    onChange={onChangeInputFieldHandler}
                    required
                  />
                  <p className="text-danger">{formErrors.phone}</p>
                </td>
              </tr>
            </tbody>
          </table>

          {customerInfo.address[0] ? (
            <MDBBtn className="mt-2 mb-2" type="submit" id="btnSubmit">
              Update
            </MDBBtn>
          ) : (
            <MDBBtn className="mt-2 mb-2" type="submit" id="btnSubmit">
              Add
            </MDBBtn>
          )}
        </form>
      </MDBCard>
    </motion.div>
  );
};

export default EditAddressCard;
