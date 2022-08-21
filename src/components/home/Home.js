import React from "react";
// import logo from "../../images/logo.png";
import Card from "./Card";
import {motion} from "framer-motion"
import { useState } from "react";
import { useRef } from "react";
import Footer from "../Footer";

const Home = () => {
  const [rotate,setRotate]=useState(false)
  const constrainRef=useRef(null)
  const constrainRefCard=useRef(null)
  return (
    <div className="container-fluid">
      <div
        className="row justify-content-around  text-white "
        ref={constrainRefCard}
      >
        <div
          className=" p-2 text-center text-white"
          //   style={{ backgroundColor: "transparent" }}
          style={{
            background: "linear-gradient(to right, #1266F1, #B23CFD)",
            minHeight: "350px",
          }}
          ref={constrainRef}
        >
          <motion.div
            animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
            onClick={() => setRotate(!rotate)}
            initial={{ scale: 0 }}
            drag
            dragConstraints={constrainRef}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <p className="h1 mt-4 text-center text-white fw-bold">OnShop</p>
            <p className="h6 text-center text-white">
              Don't worry , we have it !
            </p>
          </motion.div>
        </div>

        <Card
          title="Products"
          description="Start purchase"
          link="/products/"
          dragCon={constrainRefCard}
        />
        <Card
          title="My Profile"
          description="Go to your profile"
          link="/user/profile/"
          dragCon={constrainRefCard}
        />
        <Card
          title="My Orders"
          description="Check your orders"
          link="/user/orders/"
          dragCon={constrainRefCard}
        />
        <Card
          title="My Cart"
          description="Go to your cart"
          link="/cart/"
          dragCon={constrainRefCard}
        />
        <Card
          title="Customer service"
          description="Contact us"
          link="/contactus/"
          dragCon={constrainRefCard}
        />
      </div>
      
    </div>
  );
};

export default Home;
