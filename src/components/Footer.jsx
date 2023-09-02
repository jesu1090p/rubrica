import React from 'react';
import '../styles/nav-foot.css'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Jesus Oviedo</p>
        <p>Card Rubrica Corte 1</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
