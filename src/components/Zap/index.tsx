import React from "react";
// import ZapImg from "../../assets/whatsapp.svg";
import { IconZap } from "./styles";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaWpforms } from "react-icons/fa";

const Zap: React.FC = () => {
  return (
    <IconZap>
      {/* <a
        href="https://api.whatsapp.com/send?phone=5571992538054&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
        target="_blank"
      >
        <img src={ZapImg} alt="Github Explorer" />
      </a> */}

      <a href="https://twitter.com/guerra_ssa" target="_blank">
        <FiTwitter size={25} />
      </a>
      <a href="https://github.com/Wesleygmssa" target="_blank">
        <FiGithub size={25} />
      </a>
      <a href="https://www.linkedin.com/in/wesleyguerra09/" target="_blank">
        <FiLinkedin size={25} />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5571992538054&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
        target="_blank"
      >
        <FaWhatsapp size={25} />
      </a>
    </IconZap>
  );
};

export default Zap;
