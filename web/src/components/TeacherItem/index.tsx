import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// Importando os estilos
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Imagem de Teste"/>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Químico avançado.
                        <br/>
                        <br/>
                        Meus alunos sairão das aulas com o melhor conhecimento em química possível.
                    </p>

                    <footer>
                        <p>Preço/hora
                            <strong>R$80,00</strong>
                        </p>

                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;