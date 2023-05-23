import React from 'react';
import './App.css';
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3>Explore</h3>
        <p>Changelog</p>
        <p> Popular City</p>
        <p> Travel With Nature</p>
        <p> Enjoy With New Vibes</p>
      </div>
      <div className="footer__section">
        <h3>Destination</h3>
        <p>Hotels</p>
        <p>Beach</p>
        <p>Temples</p>
        <p>Park</p>
      </div>
      
      
      <div className="footer__social">
        <h3> Connect with us..</h3>
        <a href='/'><FaFacebook className='socialMediaIcons'/></a>
        <a href='/'><FaTwitter className='socialMediaIcons'/></a>
        <a href='/'><FaInstagram className='socialMediaIcons'/></a>
      </div>
    </footer>
  );
};

export default Footer;
