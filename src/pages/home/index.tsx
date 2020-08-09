import React from "react";
import { Banner } from "./styles";
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
