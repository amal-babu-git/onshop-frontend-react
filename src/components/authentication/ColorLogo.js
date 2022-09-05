// import { MDBIcon } from "mdb-react-ui-kit";
import React, { useRef, useState } from "react";
import {motion} from 'framer-motion'

const ColorLogo = () => {


  const [rotate, setRotate] = useState(false)
  const constrainRef = useRef(null)

  const outcolor1 = "h1 text-center text-primary fw-bold";
  const inColor1 = "h1 text-center fw-bold text-secondary";
  const on = useRef();
  const shop = useRef();

  

  return (
    <motion.div className="p-2 mb-4 mt-4" ref={constrainRef}
      animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
      onClick={() => setRotate(!rotate)}
      initial={{ scale: 0 }}
      drag
      dragConstraints={constrainRef}
      transition={{ type: "tween", duration: 0.3 }}>
      <div>
        <p className={outcolor1} ref={on}>
          On
          <b className={inColor1} ref={shop}>
            Shop
          </b>
        </p>
      </div>
    </motion.div>
  );
};

export default ColorLogo;
