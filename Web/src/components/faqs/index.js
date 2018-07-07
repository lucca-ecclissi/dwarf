import React from 'react';
import Painel from './painelExpandido';
import '../../faqs.css';

import '../../loja.css';

const Faqs = () => (

    /* Banner Principal */
    <div className="row">
        <div className="banner-loja">
            <h1>FAQs</h1>
        </div>

        {/* Card Principal com o Logo */}
        <div className="card-content">
            <div className="card">
                <h2>Perguntas Frequentes</h2>
                <div className="logo"></div>
                <div className="card-content">
                    <div id="t1"><Painel /></div>
                    {/* <p id="t2">Com DWARF, você só precisará deixar seu navegador aberto, e estará ganhando pontos que poderão ser trocados por qualquer um dos muitos prêmios do site! </p>
                        <p id="t3"> Veja como funciona: </p> */}
                </div>
            </div>
        </div>

    </div >
)

export default Faqs;  