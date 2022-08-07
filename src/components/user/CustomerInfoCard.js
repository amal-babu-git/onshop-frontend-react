import { MDBCardBody, MDBCardHeader, MDBCardTitle, MDBTooltip } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FAILED, LOADING, SUCCESS } from "../../apis";
import {
  getCustomerInfoError,
  getCustomerInfoStatus,
  selectCustomerInfo,
} from "../../features/auth/authUserSlice";
import profileDefaultImg from "../../images/default profile.jpg";
import AdminProfileCard from "./AdminProfileCard";

const CustomerInfoCard = () => {
  const customerInfoStatus = useSelector(getCustomerInfoStatus);
  const customerInfoError = useSelector(getCustomerInfoError);
  const customerInfo = useSelector(selectCustomerInfo);

  let content = "";

  switch (customerInfoStatus) {
    case LOADING:
      content = (
        <div className="spinner-border text-primary ms-4 mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );

      break;
    case SUCCESS:
      content = (
        <MDBCardBody className="p-1">
          <MDBCardHeader>
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
              @{customerInfo?.username} | {customerInfo?.membership}
            </p>
            <div className="row justify-content-center">
              <AdminProfileCard />
            </div>
          </MDBCardHeader>

          <table className="table table-sm  table-hover">
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <p className="fs-6 fw-bolder">Email</p>
                </td>
                <td>
                  <p className="text-center fs-6 fw-bolder">
                    {customerInfo?.email}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fs-6 fw-bolder">Phone</p>
                </td>
                <td>
                  <p className="text-center fs-6 fw-bolder">
                    {customerInfo?.phone && customerInfo?.phone}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="fs-6 fw-bolder">Address</p>
                </td>
                <td>
                  <div className="">
                    {customerInfo?.address[0] && (
                      <div>
                        <p className="text-center fs-6">
                          {customerInfo?.address[0]?.street}
                        </p>
                        <p className="text-center fs-6">
                          {customerInfo?.address[0]?.land_mark}
                        </p>
                        <p className="text-center fs-6">
                          {customerInfo?.address[0]?.city},
                          {customerInfo?.address[0]?.postal}
                        </p>
                        <p className="text-center fs-6"></p>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
