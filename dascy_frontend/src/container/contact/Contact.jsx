import React from 'react'
import './contact.css';

import facebook from '../../assets/Facebook.png';
import insta from '../../assets/insta.png';
import link from '../../assets/link.png';
import logo from '../../assets/logoV3.png';

const Contact = () => {
  return (
    <div className='dascy__contact'>
      <div className='dascy__contact_logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='dascy__contact-content'>
        <h1>Contact Us</h1>
        <p className='textblock'>Reach us at dascy@gmail.com</p>
        <div className='dascy__contact-socials'>
          <a href="#facebook">
            <img src={facebook} alt="facebook"/>
          </a>
          <a href="#linkdin">
            <img src={link} alt="linkdin"/>
          </a>
          <a href="#instagram">
            <img src={insta} alt="instagram"/>
          </a>
        </div>
        <p className='textblock1'>Copyright claim@2024 dascy developers</p>
      </div>
    </div>
  )
}

export default Contact