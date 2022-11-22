import React from "react";
import './style.css';

export default function SectionContato() {
  return(
    <section id="contato">
      <div className="wrap">
        <h3 className="subtitle">Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
        <div className="links-contato">
          
          <div className="endereco">
            <h4>Contato</h4>
            
            <div>
              <img src="assets/imagens/local.png" title="Ícone local" alt="Pino de localização"/>
              <p>Nova Iguaçu, RJ</p>
            </div>
            
            <div>
              <img src="assets/imagens/telefone.png" title="Ícone telefone" alt="Ícone de um telefone"/>
              <p>(21) 9999-9999</p>
            </div>
            
            <div>
              <img src="assets/imagens/email.png" title="Ícone email" alt="Ícone de uma carta"/>
              <p>contato@oticavida.com</p>
            </div>
          
          </div>
          
          <div className="redes">
            <h4>Nossas Redes Sociais</h4>
            <div>
              <img src="assets/imagens/fb.png" title="Ícone facebook" alt="logo do facebook"/>
              <p>/OticaVida</p>
            </div>

            <div>
              <img src="assets/imagens/ig.png" title="Ícone instagram" alt="logo do instagram"/>
              <p>@oticavidarj</p>
            </div>

            <div>
              <img src="assets/imagens/tt.png" title="Ícone twitter" alt="logo do twitter"/>
              <p>@oticavidarj</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}