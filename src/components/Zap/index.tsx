import React from "react";
import { IconZap } from "./styles";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp, FaWpforms } from "react-icons/fa";

const Zap: React.FC = () => {
  return (
    <IconZap>
      <a
        href="https://twitter.com/guerra_ssa"
        target="_blank"
        style={{ backgroundColor: "#1F9EEB" }}
      >
        <FiTwitter
          size={25}
          style={{ color: "#fff", backgroundColor: "#1F9EEB" }}
        />
      </a>
      <a
        href="https://github.com/Wesleygmssa"
        target="_blank"
        style={{ backgroundColor: "#000000" }}
      >
        <FiGithub
          size={25}
          style={{ color: "#fff", backgroundColor: "#000000" }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/wesleyguerra09/"
        target="_blank"
        style={{ backgroundColor: "#0077B4" }}
      >
        <FiLinkedin size={25} style={{ color: "#fff" }} />
      </a>

      <a
        style={{ backgroundColor: "#4AC558" }}
        href="https://api.whatsapp.com/send?phone=5571992538054&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
        target="_blank"
      >
        <FaWhatsapp size={25} style={{ color: "#fff" }} />
      </a>
    </IconZap>
  );
};

export default Zap;
