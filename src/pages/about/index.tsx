import React from 'react';
import { Header, Banner, Footer } from './styles';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

    return <>
        <Header>
            <div>
                  <img src={logo} alt="Github Explorer" />
            </div>
           
            <div>
                <Link to="/">HOME</Link>
                <Link to="/about">SOBRE</Link>
                <Link to="/project">PROJETOS</Link>
            </div>

        </Header>

        <Banner>
            <img src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4"
                alt="Wesley Guerra" />

            <h1>Olá, Sou Wesley</h1>
            <p> Natural de Salvador/BA, Encantado pelo desenvolvimento front-end e Back-end, mantém-se aprimorando as habilidades nesta área com a construção de diversos projetos,
            envolvendo as principais tecnologias (HTML5, CSS3 Bootstrap, JS, React, React-Native, Node.js, Postgreql: posterbird, JSON e etc). Acompanhe esses projetos no GitHub.

            Formado em Análise e Desenvolvimento de Sistemas.
            Atualmente, estou cursando o Gostack da Rocketseat🚀 é um treinamento no formato de bootcamp.

{/* Não apenas de programação vive um mortal:
Sou um estudioso curioso de história
Apaixonado por carnaval (O de Salvador é claro!!)
Dançarino nas horas vagas
Aquela saídera com os amigos por que ninguém é de ferro...
Se você quiser saber mais sobre mim ou entrar em contato: */}
            </p>
            <span>
                Se você quiser saber mais sobre mim ou entrar em contato:
            </span>
            

        </Banner>


        <Footer>
           

            <a href="https://twitter.com/guerra_ssa" target="_blank">TWITTER</a>
            <a href="https://github.com/Wesleygmssa" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/wesleyguerra09/" target="_blank">LINKEDIN</a>

        </Footer>

    </>
}

export default About;