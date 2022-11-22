import React from "react";
import SectionCapa from '../SectionCapa';
import SectionProdutos from '../SectionProdutos';
import SectionSobre from '../SectionSobre';
import SectionContato from '../SectionContato';


export default function Conteudo() {
  return(
    <main>
      <SectionCapa />
      <SectionProdutos />
      <SectionSobre />
      <SectionContato />
    </main>
  )
}