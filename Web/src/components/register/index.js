import React from 'react'

const Cadastro = () => (

    <div className="row">
      <div className="col s12 m5">
        <form className="col s10" id="login">
          <h2 className="header"> Crie sua Conta no Dwarf Rewards</h2>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Sobrenome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Senha</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  
  )

export default Cadastro;