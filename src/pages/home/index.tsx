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
            <span>
              {/* <a target="_blank">
                <FaHtml5 size={40} style={{ color: "#EB3C32" }} />
              </a>
              <a target="_blank">
                <FaCss3 size={40} style={{ color: "#016EB6" }} />
              </a>
              <a target="_blank">
                <FaReact size={40} style={{ color: "#7AE3F8" }} />
              </a>
              <a target="_blank">
                <FaNodeJs size={40} style={{ color: "#7CB701" }} />
              </a>
              <a target="_blank">
                <FaNpm size={40} style={{ color: "#EB3C32" }} />
              </a>
              <a target="_blank">
                <FaYarn size={40} style={{ color: "#00F67E" }} />
              </a>
              <a target="_blank">
                <FaDatabase size={40} style={{ color: "#F6B524" }} />
              </a> */}
            </span>
          </div>
        </Banner>
      </PageDefault>
    </>
  );
};

export default Home;
