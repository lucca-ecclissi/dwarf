import React from 'react'

const Login = () => (

  <div className="row">
    <div className="col s12 m5">
      <form className="col s10" id="login">
        <h2 className="header"> Login In to Dwarf Rewards </h2>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="submit"><a href='' className="btn waves-effect waves-light" type="submit" name="action">Entrar</a>
          </div>
          <div className="cadastrar"><a id="btn-cadastrar" href='/register' className="btn waves-effect waves-light" type="submit" name="action">Criar Conta</a></div>

        </div>
      </form>
    </div>
  </div>

)

export default Login;