import React from "react";
import './style.css';

export default function SectionSobre() {
  return(
    <section id="sobre">
      <div className="wrap sobre">
        <h3 className="subtitle">QUEM SOMOS NÓS?</h3>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

        <div className="cards">
          <img src='assets/imagens/loja.png' />

          <div className="card">
            <h4>Nossas Filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className="card">
            <h4>Atendimento flexível</h4>
            <p>A equipe que possuímos é treinada para lhe atender</p>
          </div>
          <img src="assets/imagens/atendimento.png"/>
        </div>
      </div>
    </section>
  );
}