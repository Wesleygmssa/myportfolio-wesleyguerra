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
} from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Banner>
          <div>
            <h1>Olá, Sou Wesley</h1>
            <p>Desenvolvedor Full Stack</p>
            <span>
              <a target="_blank">
                <FaHtml5 size={40} />
              </a>
              <a target="_blank">
                <FaReact size={40} />
              </a>
              <a target="_blank">
                <FaNodeJs size={40} />
              </a>
              <a target="_blank">
                <FaNpm size={40} />
              </a>
              <a target="_blank">
                <FaYarn size={40} />
              </a>
              <a target="_blank">
                <FaDatabase size={40} />
              </a>
            </span>
          </div>
        </Banner>
      </PageDefault>
    </>
  );
};

export default Home;
