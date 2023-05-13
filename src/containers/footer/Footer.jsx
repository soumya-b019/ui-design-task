import React from 'react';
import './footer.css';
// import { twt } from '../team/imports';
import Logo from '../../assets/Logo.png'
import med from '../../assets/Media/med.png'

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className='footer-logo'>
        <img src={Logo} alt='logo' width={88} height={88} />
      </div>

      <div className='footer-container' >
        <div className='footer-container-links' >
          <p><a href='#blog'>Blog</a></p>
          <p><a href='#about'>About us</a></p> 
          <p><a href='#hero'>Features</a></p>
          <p><a href='#cta'>Terms</a></p>
          <p><a href='#cta'>Policy</a></p>
        </div>

        <div className='footer-container-ltd' >
          &#169; 2023 Billex Pvt. Ltd. All rights reserved.
        </div>
      </div>

      <div className='footer-follow' >
        <p>Follow us</p>
        <div className='footer-follow-image' >
          <img src={med} alt='media' />
        </div>
      </div>
    </div>
  )
}

export default Footer