import React from "react";
import { HeaderBase } from "./styles";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo1.png";

const Header: React.FC = () => {
  return (
    <>
      <HeaderBase>
        {/* <img src={logo} alt="Github Explorer" /> */}

        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">SOBRE</Link>
          <Link to="/project">PROJETOS</Link>
          <Link to="/contact/form">CONTATO</Link>
          {/* <Link to="/project">SERVIÇOS</Link> */}
        </div>
      </HeaderBase>
    </>
  );
};

export default Header;
