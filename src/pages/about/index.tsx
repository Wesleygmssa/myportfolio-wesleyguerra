import React from "react";
import { Banner, Content, Form } from "./styles";
import PageDefault from "../../components/PageDefault";
import { FiLogIn } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/LinkButton";

const About: React.FC = () => {
  return (
    <>
      <PageDefault>
        <Content>
          <Banner>
            <img
              src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4"
              alt="Wesley Guerra"
            />

            <h1>Olá, Sou Wesley</h1>
            <p>
              Apaixonado pelas melhores tecnologias de desenvolvimento back-end,
              front-end e mobile,e mantenho aprimorando as habilidades nesta
              área com a construção de diversos projetos, envolvendo as
              principais tecnologias (HTML5, CSS3 ,Bootstrap, JS, React,
              React-Native, Node.js, Postgreql: posterbird, JSON etc). Acompanhe
              esses projetos no GitHup. Formado em Análise e Desenvolvimento de
              Sistemas. Proativo e sempre buscando novos conhecimentos e
              desafios 🚀.
            </p>
          </Banner>

          {/* <Form>
            <h2>Se você quiser saber mais sobre mim ou entrar em contato:</h2>

            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="text" placeholder="(DD)9.xxxx-xxxx" />

            <textarea placeholder="Digite o texto"></textarea>

            <Button type="submit">
              <FiLogIn />
              Enviar
            </Button>
          </Form> */}
        </Content>
      </PageDefault>
    </>
  );
};

export default About;
