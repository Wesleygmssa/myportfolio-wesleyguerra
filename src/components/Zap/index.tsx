import React from "react";
import ZapImg from "../../assets/whatsapp.svg";
import { IconZap } from "./styles";

const Zap: React.FC = () => {
  return (
    <IconZap>
      <a
        href="https://api.whatsapp.com/send?phone=5571992538054&text=Ol%C3%A1%20meu%20nome%20%C3%A9"
        target="_blank"
      >
        <img src={ZapImg} alt="Github Explorer" />
      </a>
    </IconZap>
  );
};

export default Zap;
