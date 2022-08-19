import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle } from 'mdb-react-ui-kit';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Card = ({title='title',description='description',link='/'}) => {

    
const navigate=useNavigate()
const onClickCard=()=>{
    navigate(link)
}


  return (
    <MDBCard
      className="col-xl-2 mt-1 p-1 me-1 text-center"
      //   style={{ backgroundColor: "transparent" }}
      style={{
        background: "linear-gradient(to right, #1266F1, #B23CFD)",
        minHeight: "300px",
      }}

      onClick={onClickCard}
    >
      <MDBCardHeader>
        <MDBCardTitle>{title}</MDBCardTitle>
      </MDBCardHeader>

      <MDBCardBody>
        <p className="fs-5">{description}</p>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card