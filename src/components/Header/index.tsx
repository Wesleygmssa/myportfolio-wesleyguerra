import React from "react";
import { HeaderBase } from "./styles";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <HeaderBase>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">SOBRE</Link>
          <Link to="/project">PROJETOS</Link>
          <Link to="/contact/form">CONTATO</Link>
        </div>
      </HeaderBase>
    </>
  );
};

export default Header;
