import React from "react";
import { motion, useAnimation } from "framer-motion";
import CircleImg from "../../assets/images/circle.svg"
import "./style.css";

const Why = () => {
  const [deg , setDeg] = React.useState(0);

  const animation = useAnimation();

  const Rotate = () => {
    setDeg(deg+90);
  }

  React.useEffect( () => {
    animation.start({
      rotateZ : deg
    })
  } , [deg]);

  return (
    <div className="why">
      <div className="vectordiv">
        <div>
          <motion.img onClick={Rotate} src={CircleImg} alt="CircleImg" animation={animation} />
        </div>
      </div>
      <div className="content">
        <div className="box">
          <h1>Why career guidance is required</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Pellentesque efficitur turpis sed blandit imperdiet.
          </p>
          <a href="/">Know more {">>>"}</a>
        </div>
      </div>
    </div>
  );
};

export default Why;
