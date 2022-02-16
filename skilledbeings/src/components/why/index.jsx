import React from "react";
import { motion } from "framer-motion";

import "./style.css";

const Why = () => {
  return (
    <div className="why">
      <div className="vectordiv">
        <motion.svg
          width="553"
          height="553"
          viewBox="0 0 790 790"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ opacity: 1 }}
        >
          <motion.path
            d="M107.668 666.043L118.972 655.005C55.0047 587.12 15.8015 495.64 15.8015 395.003C15.8015 294.344 55.0223 202.845 119.016 134.954L107.706 123.912C40.9333 194.652 -4.04317e-05 290.045 -4.04317e-05 394.998C-4.04317e-05 499.932 40.9175 595.308 107.668 666.043Z"
            fill="#DA251D"
          />
          <path
            d="M666.575 681.832C595.786 748.878 500.195 790 394.999 790C289.643 790 193.92 748.753 123.1 681.526L133.967 670.061C201.956 734.605 293.853 774.206 395 774.206C495.986 774.206 587.753 734.731 655.709 670.369L666.575 681.832Z"
            fill="#1DA838"
          />
          <path
            d="M680.163 121.672L668.756 132.607C734.068 200.728 774.201 293.178 774.201 395.002C774.201 496.826 734.068 589.276 668.756 657.398L680.159 668.328C748.193 597.368 790 501.065 790 394.998C790 288.933 748.195 192.631 680.163 121.672Z"
            fill="#1783C1"
          />
          <path
            d="M133.983 119.935C201.971 55.3988 293.863 15.8028 395.003 15.8028C495.989 15.8028 587.755 55.2786 655.712 119.641L666.582 108.173C595.793 41.1239 500.2 0 395.001 0C289.65 0 193.931 41.2435 123.111 108.465L133.983 119.935Z"
            fill="#F8C300"
          />
        </motion.svg>
      </div>
      <div className="content">
        <div className="box">
          <h1>Why career guidance is required</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Pellentesque efficitur turpis sed blandit imperdiet.
          </p>
          <a href="#">Know more {">>>"}</a>
        </div>
      </div>
    </div>
  );
};

export default Why;
