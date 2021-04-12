import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/rheanne-reyes-a8592a190/" rel="noreferrer" target="_blank">
      <FontAwesomeIcon className="footer-icons" icon={faLinkedin} fixedWidth size="2x"/>
      </a>
      <a href="https://github.com/rheannemr" rel="noreferrer" target="_blank">
      <FontAwesomeIcon className="footer-icons" icon={faGithub} fixedWidth size="2x"/>
      </a>
      <a href="../../assets/images/RRResume.png" target="_blank">
      <FontAwesomeIcon className="footer-icons" icon={faFile} fixedWidth size="2x"/>
      </a>
      <a href="mailto: rheannemr@gmail.com" rel="noreferrer" target="_blank">
      <FontAwesomeIcon className="footer-icons" icon={faInbox} fixedWidth size="2x"/>
      </a>
  
    </footer>
  );
}

export default Footer;