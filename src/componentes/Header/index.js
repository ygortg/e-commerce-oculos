import React from 'react';
import './style.css'

export default function Topo() {
  return(
    <header>
      <div className='wrap'>
        <img src='assets/imagens/logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' className='logo' />
        <nav>
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}