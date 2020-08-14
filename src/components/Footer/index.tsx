import React from "react";
import { FooterBase } from "./styles";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaYarn,
  FaDatabase,
  FaCss3,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <FooterBase>
        <a target="_blank">
          <FaHtml5 size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a target="_blank">
          <FaCss3 size={40} style={{ color: "#016EB6" }} />
        </a>
        <a target="_blank">
          <FaReact size={40} style={{ color: "#7AE3F8" }} />
        </a>
        <a target="_blank">
          <FaNodeJs size={40} style={{ color: "#7CB701" }} />
        </a>
        <a target="_blank">
          <FaNpm size={40} style={{ color: "#EB3C32" }} />
        </a>
        <a target="_blank">
          <FaYarn size={40} style={{ color: "#00F67E" }} />
        </a>
        <a target="_blank">
          <FaDatabase size={40} style={{ color: "#F6B524" }} />
        </a>
      </FooterBase>
    </>
  );
};

export default Footer;
