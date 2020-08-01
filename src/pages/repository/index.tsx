import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiChevronLeft } from 'react-icons/fi'
interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {

    const { params } = useRouteMatch<RepositoryParams>(); //pegando parametros da rota.

    return (
    <>
        <Header>
            <img src={logoImg} alt="Github Explorer" />
            <Link to="/project">
                <FiChevronLeft size={16} />
            Voltar
        </Link>
        </Header>

        <RepositoryInfo>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/41512408?s=460&u=48175e5af2e5f24e725eb9354200350a242d0354&v=4" alt=""/>
                    <div>
                        <strong>Wesleygmssa/unform</strong>
                        <p>Descrição</p>
                    </div>
                </header>
                <ul>
                 <li>
                     <strong>1808</strong>
                     <span>Stars</span>
                 </li>
                 <li>
                     <strong>67</strong>
                     <span>Forks</span>
                 </li>
                 <li>
                     <strong>67</strong>
                     <span>issues abertas</span>
                 </li>
                </ul>
        </RepositoryInfo>
        
    </>
    )
}

export default Repository;