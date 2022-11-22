import React from 'react';
import Header from './componentes/Header/';
import Conteudo from './componentes/Conteudo';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  return(
    <div>
      <Header />
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;