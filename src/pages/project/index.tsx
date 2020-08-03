import React from 'react';
import { Title, Cards } from './styles';
import aluraImg from '../../assets/alura.png'
import gobaberImg from '../../assets/gobaber.png';
import ecoleta from '../../assets/ecoleta.png';
import blindspot from '../../assets/blindspot.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Button from '../../components/Button';



const Project: React.FC = () => {

    return (
        <>
            <Header />
            <Title>Explore repositórios no Github.</Title>
            <Cards>

                <div className="card">
                    <div className="cardimg">
                        <img src={aluraImg} alt="" />
                    </div>
                    <div className="card-content">
                            <h3>AluraFlix</h3>
                             <p>Projeto feito durante a Imersão React da Alura, Projeto baseado na netflix</p>
                    </div>
                    <div className="grupButton">
                        <a className="ButtonLink" href="https://aluraflix-gules.vercel.app/" target="_blank">Visitar</a>
                        <a className="ButtonLink" href="https://github.com/Wesleygmssa/aluraflix" target="_blank">GitHub</a>
                    </div>
                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={gobaberImg} alt="" />
                    </div>
                    <div className="card-content">
                            <h3>Gobarber</h3>
                             <p>Curso de rocketseat usando como tecnologias mais avançadas para a construção do sistema de agendamento de barbearia.</p>
                    </div>
                    <div className="grupButton">
                        <a className="ButtonLink" href="https://github.com/Wesleygmssa/gobaber-web" target="_blank">GitHub</a>
                        
                    </div>
                </div>

                <div className="card">
                    <div className="cardimg">
                        <img src={ecoleta} alt="" />
                    </div>
                    <div className="card-content">
                            <h3>Ecoleta</h3>
                             <p>Este é um repositório da Semana do Próximo Nível # 1 | Curso inicial. O objetivo deste repositório é analisar e comparar a evolução do meu aprendizado.</p>
                    </div>
                    <div className="grupButton">
                        <a className="ButtonLink" href="https://github.com/Wesleygmssa/nlw1-booster" target="_blank">GitHub</a>
                    </div>
                </div>

             

            </Cards>
            <Footer />

        </>
    )

}

export default Project;