import React from "react";
import styled, { css } from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import Zap from "../Zap";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Zap />
    </>
  );
};

export default PageDefault;
