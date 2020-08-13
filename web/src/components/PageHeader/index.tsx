import React from 'react';
import { Link } from 'react-router-dom';

// Importando os estilos
import './styles.css';

// Importando os ícones
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

// Definindo uma interface para que o componente saiba quais props ele pode usar
interface PageHeaderProps {
    title: string; // Prop obrigatória
}

// Transformando em uma arrow function para que possamos usar Props
const PageHeader: React.FC<PageHeaderProps>= (props)=> {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;