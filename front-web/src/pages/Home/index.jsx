import React from 'react';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <h1>Verifique a presença de seus convidados</h1>
                    <p>Uma ferramenta que permite gerenciar seus convidados de forma rápida e prática.</p>
               </div>
               <div className="home-img-container">
                <img 
                        className="home-img col-lg-8" 
                        src='https://www.mdirector.com/wp-content/uploads/2014/08/Lista-de-suscriptores-de-email-marketing.jpg' 
                        alt="Imagem de uma lista de convidados"
                    />
               </div>
               <a href='home' className="btn btn-lg btn-warning my-5">FAÇA SUA LISTA AGORA</a>

            </div>
        </div>
    );
};

export default Home;