import React from 'react';
import { Title, Container } from './styles';
import aluraImg from '../../assets/alura.png'
import gobaberImg from '../../assets/gobaber.png';
import ecoleta from '../../assets/ecoleta.png';
import blindspot from '../../assets/blindspot.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';



const Project: React.FC = () => {

    return (
        <>

            <Header />
            <Title>Explore repositórios no Github.</Title>
            <Container>
                <div className="card">
                    <a href="https://github.com/Wesleygmssa/aluraflix" target="_blank">
                        <div className="imgtopo">
                            <img src={aluraImg} alt="" />
                        </div>
                    </a>
                    <h3>AluraFlix</h3>
                    <p>Projeto feito durante a Imersão React da Alura, Projeto baseado na netflix.</p>
                    <div className="grupButton">
                        <Button >Visitar</Button>
                        <Button>GitHub</Button>
                    </div>

                </div>
                <div className="card">
                    <a href="https://github.com/Wesleygmssa/aluraflix" target="_blank">
                        <div className="imgtopo">
                            <img src={gobaberImg} alt="" />
                        </div>
                    </a>
                    <h3>Gobarber</h3>
                    <p>Projeto feito durante a Imersão React da Alura, Projeto baseado na netflix.</p>
                    <div className="grupButton">
                    
                        <Button>GitHub</Button>
                    </div>

                </div>
                <div className="card">
                    <a href="https://github.com/Wesleygmssa/aluraflix" target="_blank">
                        <div className="imgtopo">
                            <img src={ecoleta} alt="" />
                        </div>
                    </a>
                    <h3>Ecoleta</h3>
                    <p>Projeto feito durante a Imersão React da Alura, Projeto baseado na netflix.</p>
                    <div className="grupButton">
                      
                        <Button>GitHub</Button>
                    </div>

                </div>




            </Container>


            <Footer />

        </>
    )

}

export default Project;