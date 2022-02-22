import React from "react";

import "./style.css";
import Vector from "../../assets/images/background/Pathfinder.svg";

const Pathfinder = () => {
  return (
    <div className="pathfinder">
      <div className="content">
        <div>
          <p className="title">Take your Pathfinder Test</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque efficitur turpis sed blandit imperdiet.
          </p>
          <div className="buttondiv">
            <div className="button">
              <h2>Take it now!</h2>
            </div>
          </div>
        </div>
      </div>
      <img src={Vector} alt="vector"></img>
    </div>
  );
};

export default Pathfinder;
