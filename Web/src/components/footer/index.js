import React from "react";

import logo from '../../assets/images/Untitled-2.png';

const Footer = ()=>(
    <div>
        <footer className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text"><img alt="Dwarf Rewards" src={logo} /></h5>
                    <p className="grey-text text-lighten-4"></p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Mapa do Site</h5>
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Loja</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Entrar</a></li>
                    <li><a className="grey-text text-lighten-3" href="#!">Contato*</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
            © 2018 Análise e Desenvolvimento de Sistemas - Fatec ID.
            </div>
        </div>
        </footer>
    </div>
)

export default Footer;