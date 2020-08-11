import React, { useState, useEffect, useCallback } from "react";
import { Title, Cards } from "./styles";
import PageDefault from "../../components/PageDefault";
// import api from "../../services/api";
import ButtonLink from "../../components/LinkButton";
import axios from "axios";

interface Repository {
  id: string;
  title: string;
  description: string;
  visita: string;
  github: string;
  img: string;
}

const Project: React.FC = () => {
  const [projects, setProjects] = useState<Repository[]>([]);

  useEffect(() => {
    axios.get(`https://devportf.herokuapp.com/projects/`).then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <Title>Explore repositórios no Github.</Title>
        {projects.length === 0 && <div>Loading...</div>}
        <Cards>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className="cardimg">
                <img src={project.img} alt="" />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="grupButton">
                <ButtonLink href={project.visita}>Visitar</ButtonLink>
                <ButtonLink href={project.github}>GitHub</ButtonLink>
              </div>
            </div>
          ))}
        </Cards>
      </PageDefault>
    </>
  );
};

export default Project;
