import React from 'react';
import { Header, Title, Container } from './styles';
import logoImg from '../../assets/logo.svg';
import aluraImg from '../../assets/alura.png'
import gobaberImg from '../../assets/gobaber.png';
import ecoleta from '../../assets/ecoleta.png';
import blindspot from '../../assets/blindspot.png';
import { Link } from 'react-router-dom';


interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}
const Project: React.FC = () => {

    return <>
        <Header>

            <img src={logoImg} alt="Github Explorer" />
            <div>
                <Link to="/">HOME</Link>
                <Link to="/about">SOBRE</Link>
                <Link to="/project">PROJETOS</Link>
            </div>

        </Header>
        <Title>Explore repositórios no Github.</Title>
        <Container>

            <div>
                <a href="https://github.com/Wesleygmssa/aluraflix">
                    <img src={aluraImg} alt="" />
                    <h3>AluraFlix</h3>
                    <p>Projeto feito durante a Imersão React da Alura, Projeto baseado na netflix.</p>
                </a>
            </div>

            <div>
                <a href="">
                    <img src={gobaberImg}  alt="" />
                    <h3>Gobarber</h3>
                    <p>Projeto Gostack da Rocketseat, uma aplicação para gerenciamento de uma barbearia com agendamento 
                    de horários.</p>
                </a>

            </div>

            <div>
                <a href="">
                    <img src={ecoleta} alt="" />
                    <h3>Ecoleta</h3>
                    <p>Descrição</p>
                </a>
            </div>

            <div>
                <a href="">
                    <img src={blindspot} alt="" />
                    <h3>Ecoleta</h3>
                    <p>Descrição</p>
                </a>
            </div>
        </Container>




    </>
}

export default Project;