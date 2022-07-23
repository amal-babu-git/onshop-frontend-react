import { MDBCardBody, MDBCardTitle, MDBTooltip } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FAILED, LOADING, SUCCESS } from "../../apis";
import {
  getCustomerInfoError,
  getCustomerInfoStatus,
  selectCustomerInfo,
} from "../../features/auth/authUserSlice";
import profileDefaultImg from "../../images/default profile.jpg";

const CustomerInfoCard = () => {
  const customerInfoStatus = useSelector(getCustomerInfoStatus);
  const customerInfoError = useSelector(getCustomerInfoError);
  const customerInfo = useSelector(selectCustomerInfo);

  let content = "";

  switch (customerInfoStatus) {
    case LOADING:
      content = (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );

      break;
    case SUCCESS:
      content = (
        <MDBCardBody className="vh-100">
          <img
            src={profileDefaultImg}
            className="rounded-circle mb-3"
            style={{ width: "150px" }}
            alt="Avatar"
          />
          <MDBCardTitle>
            {customerInfo?.first_name + " " + customerInfo?.last_name}
          </MDBCardTitle>
          <p className="text-primary fw-bolder fs-5">
            @{customerInfo?.username}
          </p>
          <p className="text-center fs-5 fw-bolder">
            Email : {customerInfo?.email}{" "}
          </p>
          <div className="text-center fs-5 fw-bolder">
            <MDBTooltip tag="p" title="B-Bronze, S-Silver, G-Gold">
              Membership : {customerInfo?.membership}
            </MDBTooltip>
          </div>
          <p className="text-center fs-5 fw-bolder">
            {"Phone :" + customerInfo?.phone}
          </p>
        </MDBCardBody>
      );

      break;
    case FAILED:
      content = (
        <div className="fs-5 fw-bolder text-danger">
          Something went wrong ! Your account info not found try to relogin or
          contact our customer service.
          <p>{customerInfoError}</p>
        </div>
      );

      break;

    default:
      break;
  }

  return <>{content}</>;
};

export default CustomerInfoCard;
