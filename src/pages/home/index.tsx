import React from 'react';
import logoImg from '../../assets/logo.svg';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import { Header, Banner, Footer } from './styles';

const Home: React.FC = () => {
    return <>
        <Header>
            <img src={logo} alt="Github Explorer" />
            <div>
                <Link to="/about">SOBRE</Link>
                <Link to="/project">PROJETOS</Link>
            </div>

        </Header>
        <Banner>
            <div>
                <h1>Olá, Sou Wesley</h1>
                <p>Desenvolvedor Full Stack</p>
            </div>

        </Banner>

        <Footer>
            <a href="https://twitter.com/guerra_ssa" target="_blank">TWITTER</a>
            <a href="https://github.com/Wesleygmssa" target="_blank">GITHUB</a>
            <a href="https://www.linkedin.com/in/wesleyguerra09/" target="_blank">LINKEDIN</a>

        </Footer>

    </>
}

export default Home;