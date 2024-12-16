import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-heading">Connect with Me</h3>
        <div className="footer-icons">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Shoaib.Arain All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;