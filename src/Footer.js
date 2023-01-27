import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social-icons">
        <a
          href="https://www.instagram.com/this.kshitij.real"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/mylinkedinhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope-o"></i>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
        </a>
      </div>
      <p className="footer__text">Copyright ©2023 TBES</p>
    </footer>
  );
};

export default Footer;
