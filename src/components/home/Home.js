import React from "react";
import ColorLogo from "../authentication/ColorLogo";
import logo from "../../images/logo.png";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row justify-content-around  text-white " >
        <div
          className="card p-2 text-center text-white"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight:"350px"
          }}
        >
          <p className="h1 mt-4 text-center text-white fw-bold">OnShop</p>
          <p className="h6 text-center text-white">
            Don't worry , we have it !
          </p>
        </div>
        <MDBCard
          className="col-xl-2 mt-1 p-1 me-1 text-center"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight: "300px",
          }}
        >
          <MDBCardHeader>
            <MDBCardTitle>Products</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <p className="fs-5">View avalilable products</p>
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          className="col-xl-2 mt-1 p-1 me-1 text-center"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight: "300px",
          }}
        >
          <MDBCardHeader>
            <MDBCardTitle>Products</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <p className="fs-5">View avalilable products</p>
          </MDBCardBody>
        </MDBCard>
       
        <MDBCard
          className="col-xl-2 mt-1 p-1 me-1 text-center"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight: "300px",
          }}
        >
          <MDBCardHeader>
            <MDBCardTitle>Products</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <p className="fs-5">View avalilable products</p>
          </MDBCardBody>
        </MDBCard>
       
        <MDBCard
          className="col-xl-2 mt-1 p-1 me-1 text-center"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight: "300px",
          }}
        >
          <MDBCardHeader>
            <MDBCardTitle>Products</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            <p className="fs-5">View avalilable products</p>
          </MDBCardBody>
        </MDBCard>
       
       
        
      </div>
    </div>
  );
};

export default Home;
