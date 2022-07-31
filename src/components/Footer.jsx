import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="icons-footer">
      <a href="http://www.google.com" className="icon-github"><BsGithub /></a>
      <a href="http://www.google.com" className="icon-linkedin"><FaLinkedin /></a>
    </div>
  </footer>
);

export default Footer;
