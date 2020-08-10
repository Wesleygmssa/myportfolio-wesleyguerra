import React, { useState, useEffect } from "react";
import { Title, Cards } from "./styles";
import PageDefault from "../../components/PageDefault";
import api from "../../services/api";

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
    api.get(`projects/`).then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <Title>Explore repositórios no Github.</Title>
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
                <a className="ButtonLink" href={project.visita} target="_blank">
                  Visitar
                </a>
                <a className="ButtonLink" href={project.github} target="_blank">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </Cards>
      </PageDefault>
    </>
  );
};

export default Project;
