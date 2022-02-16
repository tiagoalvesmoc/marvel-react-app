import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer class="footer-container mt-3">
        <div class="col-2">
          <img
            src={require("../../assets/images/Group.png")}
            alt="Logo"
            class="logo-header-home"
          />
        </div>
        <div class="row pl-5">
          <div class="col mt-1 ml-5">
            <a href="#" class="txt-grey text-small-footer">
              Perguntas frequentes
            </a>
            <br />
            <a href="#" class="txt-grey text-small-footer">
              Preferências de cookies
            </a>
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">
              Centro de ajuda
            </a>
            <br />
            <a href="#" class="txt-grey text-small-footer">
              Informações corporativas
            </a>
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">
              Termos de uso
            </a>
          </div>
          <div class="col mt-1">
            <a href="#" class="txt-grey text-small-footer">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
