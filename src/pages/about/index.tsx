import React from "react";
import { Banner } from "./styles";
import PageDefault from "../../components/PageDefault";

const About: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Banner>
          <img
            src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4"
            alt="Wesley Guerra"
          />

          <h1>Olá, Sou Wesley</h1>
          <p>
            Apaixonado pelas melhores tecnologias de desenvolvimento back-end,
            front-end e mobile,e mantenho aprimorando as habilidades nesta área
            com a construção de diversos projetos, envolvendo as principais
            tecnologias (HTML5, CSS3 ,Bootstrap, JS, React, React-Native,
            Node.js, Postgreql: posterbird, JSON etc). Acompanhe esses projetos
            no GitHup. Formado em Análise e Desenvolvimento de Sistemas.
            Proativo e sempre buscando novos conhecimentos e desafios 🚀.
            {/* Natural de Salvador/BA, Encantado pelo desenvolvimento front-end e Back-end, mantém-se aprimorando as habilidades nesta área com a construção de diversos projetos,
            envolvendo as principais tecnologias (HTML5, CSS3 Bootstrap, JS, React, React-Native, Node.js, Postgreql: posterbird, JSON e etc). Acompanhe esses projetos no GitHub.

            Formado em Análise e Desenvolvimento de Sistemas.
            Atualmente, fazendo divesos cursos na aréa em busca de novos conhecimentos. */}
            {/* Não apenas de programação vive um mortal:
            Sou um estudioso curioso de história
            Apaixonado por carnaval (O de Salvador é claro!!)
            Dançarino nas horas vagas
            Aquela saídera com os amigos por que ninguém é de ferro...
            Se você quiser saber mais sobre mim ou entrar em contato: */}
          </p>
          <span>Se você quiser saber mais sobre mim ou entrar em contato:</span>
        </Banner>
      </PageDefault>
    </>
  );
};

export default About;
