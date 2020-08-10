import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import Zap from "../Zap";

const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(-20px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

const AnimationContainer = styled.div`
  animation: ${apperFromCenter} 2s;
`;

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <AnimationContainer>{children}</AnimationContainer>
      <Zap />
      <Footer />
    </>
  );
};

export default PageDefault;
