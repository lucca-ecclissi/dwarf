import React from 'react';
import papel from '../../assets/images/list-2.png';
import computer from '../../assets/images/personal-computer.png'
import bagCoins from '../../assets/images/rich.png'
import giftCard from '../../assets/images/gift-card.png'

import '../../loja.css';


const Home = () => (

  /* Banner Principal */
  <div className="row">
    <div className="banner-loja">
      <h1>Prêmios ao alcance <br/> de um clique!</h1>
    </div>

    {/* Card Principal com o Logo */}
    <div className="card-content">
      <div className="card">
        <div className="card-content">
          <div className="logo"></div>
          <p id="t1">DWARF veio para mudar o jeito como os prêmios são ganhos! chega de ficar abrindo sites maliciosos somente para ganhar aquele pontinhos que falta para você poder resgatar seu prêmio...</p>
          <p id="t2">Com DWARF, você só precisará deixar seu navegador aberto, e estará ganhando pontos que poderão ser trocados por qualquer um dos muitos prêmios do site! </p>
          <p id="t3"> Veja como funciona: </p>
        </div>

        {/* Tabs da página inicial */}
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width">
            <li className="tab"><a className="active" href="#test4">1º Passo</a></li>
            <li className="tab"><a href="#test5">2º Passo</a></li>
            <li className="tab"><a href="#test6">3º Passo</a></li>
          </ul>
        </div>

        {/* Contúdo da Tab 1 */}
        <div className="card-content grey lighten-4">
          <div id="test4">
            <div className="row">
              <div className="col s12 m15">
                <div id='tab-content' className="card-panel">
                  <span className="white-text">
                    <ul>
                      <li>
                        <img alt="Criando Conta" src={papel} /><h3>Crie sua conta</h3>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="test5">
            <div className="row">
              <div className="col s12 m15">
                <div id='tab-content' className="card-panel">
                  <span className="white-text">
                    <ul>
                      <li className="panel1">
                        <img alt="Mineração" src={computer} /><h3>Clique no botão iniciar a mineração</h3>
                      </li>
                      <li className="panel2">
                        <img alt="Bolsa de Dwarfas" src={bagCoins} /><h3>Ganhe Dwarfas</h3>
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="test6">
            <div className="row">
              <div id='tab-content' className="card-panel">
                <span className="white-text">
                  <ul>
                    <li className="panel1">
                      <img alt="Cartão Presente" src={giftCard} /><h3>Troque por Cartões-Presente</h3>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
)

export default Home;  