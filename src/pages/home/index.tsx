import React from 'react';

import { Banner} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const Home: React.FC = () => {
    return <>
        
        <Header />
        <Banner>
            <div>
                <h1>Olá, Sou Wesley</h1>
                <p>Desenvolvedor Full Stack</p>
            </div>

        </Banner>

        <Footer/>

    </>
}

export default Home;