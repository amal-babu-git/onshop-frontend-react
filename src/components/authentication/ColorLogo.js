// import { MDBIcon } from "mdb-react-ui-kit";
import React, { useRef, useState } from "react";
import {motion} from 'framer-motion'

const ColorLogo = () => {
  // const [logoTheme, setLogoTheme] = useState(true);

  const [rotate, setRotate] = useState(false)
  const constrainRef = useRef(null)

  const outcolor1 = "h1 text-center text-primary fw-bold";
  const inColor1 = "h1 text-center fw-bold text-secondary";
  const on = useRef();
  const shop = useRef();

  //   function getRandomColor() {
  //     var letters = "0123456789ABCDEF";
  //     var color = "#";
  //     for (var i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   }

//   function changeColor() {
//     if (logoTheme) {
//       on.current.className = outcolor1;
//       shop.current.className = inColor1;
//       setLogoTheme(false);
//     } else {
//       on.current.className = inColor1;
//       shop.current.className = outcolor1;
//       setLogoTheme(true);
//     }
//   }

//   setInterval(changeColor, 2000);

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
