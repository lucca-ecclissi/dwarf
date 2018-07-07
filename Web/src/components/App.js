import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { Navbar, NavItem } from 'react-materialize'

import Home from './home'
import Loja from './loja'
import Faq from './faqs';

import logo from '../assets/images/Untitled-2.png';
import '../../src/components/App.css';

import Cadastro from './register';
import Login from './login';
import Footer from './footer'; 

const App = () => (
  <Router>
    <div>
      <Navbar brand={<img alt="Dwarf Rewards" src={logo} style={{ width: 120, marginLeft: 20, marginTop: -10 }} />} right>
        <NavItem href="/">
          Inicio
        </NavItem>
        <NavItem href="/loja">
          Loja
        </NavItem>
        <NavItem href="/login">
          Entrar
        </NavItem>
        <NavItem href="/faqs">
          FAQs
        </NavItem>
      </Navbar>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/loja" component={Loja} />
      <Route path="/register" component={Cadastro} />
      <Route path='/faqs' component={Faq}/>
      <Footer/>
    </div>
  </Router>
)
export default App