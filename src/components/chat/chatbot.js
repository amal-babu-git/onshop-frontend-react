import { MDBBtn, MDBCardHeader, MDBTabs, MDBTabsItem } from "mdb-react-ui-kit";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Chatbot = (constrainRef) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      drag
      dragConstraints={constrainRef}
      style={{ zIndex: "10", position: "fixed" }}
      className="mt-2  mb-1 col-sm-12 col-md-12 col-xl-6"
    >
      <MDBBtn
        color="secondary"
        className="mt-2 mb-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "Close Chatbot" : "Open Chatbot"}
      </MDBBtn>
      {open && (
        <motion.div
          className="text-center card"
          style={{ maxWidth: "400px" }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween" }}
        >
          <MDBCardHeader>
            <iframe
              style={{ border: "none" }}
              height="600px"
              width="400px"
              src="https://widget.kommunicate.io/chat?appId=337b7d44ca3eb670eaa6ade97cee71c00"
              allow="microphone; geolocation;"
            ></iframe>
          </MDBCardHeader>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Chatbot;
