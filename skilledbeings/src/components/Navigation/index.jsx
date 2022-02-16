import React from 'react'

import "./style.css";
import Logo from "../../assets/images/logo.svg";

const Navigation
 = () => {
  return (
    <div className='Navigation'>
        <img src={Logo} alt="Logo" className='Logo'/>
        <ul className='Navbar'>
            <a href='/'><li>About</li></a>
            <a href='#how'><li>How it works</li></a>
            <a href='/'><li>Features</li></a>
            <a href='/'><li>blog</li></a>
        </ul>
        <div className='Buttondiv'>
            <span className='Signup'>
                Sign Up
            </span>
            <span className='Login'>
                Login
            </span>
        </div>
    </div>
  )
}

export default Navigation
