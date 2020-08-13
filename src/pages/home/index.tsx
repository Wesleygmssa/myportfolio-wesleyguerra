import React from "react";
import { Banner } from "./styles";
import PageDefault from "../../components/PageDefault";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaYarn,
  FaDatabase,
  FaCss3,
} from "react-icons/fa";

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
        {/* <span>Ferrramentas utilizadas para criação desse portfolio</span> */}
      </PageDefault>
    </>
  );
};

export default Home;
