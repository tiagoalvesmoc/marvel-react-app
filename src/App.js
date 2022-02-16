import React from 'react';

export default function App() {
  return (

    <div className="container-fluid bg_filmes"
      style={{
        position: 'fixed',
        height: '100%'
      }
      }
    >
      <header class="row">
        <a href="#">
          <img
            src={require('./assets/images/logo.png')}
            alt="logo"
            class="logo"
            draggable="false"
          />
        </a>
      </header>
      <div id="caixa-login" class="col-4 offset-4">
        <h1 class="txt-h1 text-white">Entrar</h1>
        <br />
        <form action="">
          <input
            type="email"
            class="form-control form-control-lg background-secondary"
            placeholder="Email ou número de telefone"
            name="email"
            id="email"
          />
          <input
            type="password"
            class="form-control form-control-lg background-secondary mt-3"
            placeholder="Senha"
            name="senha"
            id="senha"
          />
          <button class="btn btn-lg btn-block btn-danger button-login mt-4">
            Entrar
          </button>
          <div class="row mt-3">
            <div class="col text-muted">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label className="m-2" for="checkbox">Lembrar de mim.</label>
            </div>
            <div class="col text-right m-1">
              <a href="#" class="text-muted">Precisa de ajuda?</a>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <a href="" class="txt-grey">
                <img
                  src={require("./assets/images/facebook.png")}
                  alt="facebook"
                  class="m-1"
                />
                Conectar com Facebook
              </a>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <p class="txt-grey">
                Novo por aqui? <a href="#" class="text-white">Assine agora.</a>
              </p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <p class="txt-grey txt-small">
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô. <a href="#">Saiba mais.</a>
              </p>
            </div>
          </div>
        </form>
      </div >
      <footer class="footer-container mt-5">
        <div class="row pl-5">
          <div class="col mt-3 ml-5">
            <p class="txt-grey">Dúvidas? Ligue 0800-761-4631</p>
          </div>
        </div>
        <div class="row pl-5">
          <div class="col mt-1 ml-5">
            <a href="#" class="txt-grey text-small-footer"
            >Perguntas frequentes</a
            ><br />
            <a href="#" class="txt-grey text-small-footer"
            >Preferências de cookies</a
            >
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">Centro de ajuda</a
            ><br />
            <a href="#" class="txt-grey text-small-footer"
            >Informações corporativas</a
            >
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">Termos de uso</a>
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">Privacidade</a>
          </div>
        </div>
        <div class="row pl-5">
          <div class="col mt-4">
            <i class="fas fa-globe ml-5"></i>
            <font class="txt-grey text-medium-footer ml-1">Localização</font
            ><br />
            <select class="select-lang ml-5 mt-2">
              <option>Português</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </footer>
    </div >

  );
}
