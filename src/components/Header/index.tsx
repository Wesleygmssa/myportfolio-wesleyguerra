import React from "react";
import { HeaderBase } from "./styles";
import { Link } from "react-router-dom";
// import logo from   '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderBase>
      {/* <div>
        <img src={logo} alt="Github Explorer" />
      </div> */}

      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">SOBRE</Link>
        <Link to="/project">PROJETOS</Link>
        {/* <Link to="/project">SERVIÇOS</Link> */}
      </div>
    </HeaderBase>
  );
};

export default Header;
