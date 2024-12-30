import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({
  title = "title",
  description = "description",
  link = "/",
}) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(link);
  };

  return (
    <motion.div
      className="col-xl-2 mt-1 p-1 me-1 text-center card"
      //   style={{ backgroundColor: "transparent" }}
      style={{
        background: "linear-gradient(to right, #1266F1, #B23CFD)",
        minHeight: "300px",
      }}
      animate={{ y: -75, scale: 1 }}
      initial={{ scale: 1 }}
      transition={{ type: "tween", duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      // drag
      // dragConstraints={dragCon}
    >
      <MDBCardHeader>
        <MDBCardTitle>{title}</MDBCardTitle>
      </MDBCardHeader>

      <MDBCardBody>
        <p className="fs-5">{description}</p>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn rounded outline color="white" onClick={onClickCard}>Go</MDBBtn>
      </MDBCardFooter>
    </motion.div>
  );
};

export default Card;
