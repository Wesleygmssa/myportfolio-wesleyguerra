import React from "react";
import { Banner } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Zap from "../../components/Zap";
import PageDefault from "../../components/PageDefault";

const Home: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Banner>
          <div>
            <h1>Olá, Sou Wesley</h1>
            <p>Desenvolvedor Full Stack</p>
          </div>
        </Banner>
      </PageDefault>
    </>
  );
};

export default Home;
