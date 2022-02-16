import React from 'react';
import consultingSvg from '../../assets/images/consulting.svg';
import "./style.css";

export const WhatWeDo = () => {
  return <div className="About">
    <img src={consultingSvg} alt="Consulting" />
            
            <div className="text-box">
                <h1> What we do</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestiae magni debitis sapiente labore excepturi nisi? Blanditiis esse dolorum fuga! </p>
                <div className="button">
                  Get started!
                </div>
            </div>
  </div>;
};

export default WhatWeDo;
