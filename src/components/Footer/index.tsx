import React from "react";
import { FooterBase } from "./styles";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <FooterBase>
      <a href="https://twitter.com/guerra_ssa" target="_blank">
        <FiTwitter size={25} />
      </a>
      <a href="https://github.com/Wesleygmssa" target="_blank">
        <FiGithub size={25} />
      </a>
      <a href="https://www.linkedin.com/in/wesleyguerra09/" target="_blank">
        <FiLinkedin size={25} />
      </a>
    </FooterBase>
  );
};

export default Footer;
