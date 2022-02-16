import React from 'react';

import "./style.css";

import Image from "../../assets/images/home vector.svg"

const Home = () => {
  return <div className='home'>
      <div className='text'>
          <div>
            <span className='head'>Know yourself</span>
            <p>
                We help you make the right career choice & build the skills needed to succeed.
            </p>
            <div className='button'>
                <h2>Sign Up</h2>
            </div>  
          </div>
      </div>
      <div className='background'>
      <img src={Image} alt="home" className='vector' width="70%"></img>
      </div>
  </div>;
};

export default Home;