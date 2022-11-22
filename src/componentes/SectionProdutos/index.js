import React from "react";
import './style.css';

export default function SectionProdutos() {
  return(
    <section id="produtos">
      <div className="wrap">
        <h3 className="subtitle">Nossos Produtos</h3>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
        Óculos de grau</p>

        <div className="produtos">
          <figure>
            <h4>Óculos de grau</h4>
            <img src='assets/imagens/oculos01.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 500,00</p>
          </figure>

          <figure>
            <h4>Óculos transition</h4>
            <img src='assets/imagens/oculos02.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 750,00</p>
          </figure>

          <figure>
            <h4>Óculos de sol</h4>
            <img src='assets/imagens/oculos03.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 700,00</p>
          </figure>

          <figure>
            <h4>Óculos infantil</h4>
            <img src='assets/imagens/oculos04.png' title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
            <p>R$ 500,00</p>
          </figure>
        </div>

        <p>Todos os nossos produtos incluem:</p>
        
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}