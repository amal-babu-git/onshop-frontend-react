import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../images/logob2.png"
import AddToCartBtn from "../cart/AddToCartBtn";
import {motion} from 'framer-motion'

export default function ProductCard({ data }) {

  const navigate = useNavigate()

  const product_image = data.images[0]




  return (
    <motion.div 
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{type:'tween'}}
    whileHover={{scale:1.1,zIndex:1}}
    className="col-sm-12 col-md-4  col-xl-3 mt-2"
    >

      <MDBCard style={{ maxWidth: "23rem" ,height:"30rem"}}>
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {product_image ? (
            <MDBCardImage src={product_image.image} fluid alt="No image available" style={{maxHeight:"300px"}} />
          ) : (
            <MDBCardImage

              src={defaultImage}
              fluid
              alt="No image available"
            />
          )}

          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle className="fs-6">{data?.title}</MDBCardTitle>
          <p className="text-dark"> ₹ {data?.unit_price}</p>
          <MDBCardText>{data?.collection}</MDBCardText>

          <AddToCartBtn id={data.id}/>

          <MDBBtn
            rounded
            outline
            className="mt-1 "
            onClick={() => {
              navigate("/product-detail", { state: data });
            }}
          >
            View
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </motion.div>
  );
}
