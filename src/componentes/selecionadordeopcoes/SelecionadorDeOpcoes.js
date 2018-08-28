import React, { Component } from 'react';
import './SelecionadorDeOpcoes.css';


class SelecionadorDeOpcoes extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="botoesPrincipal">
        <div className="botaoMae">
          <button onClick={() => this.nextPath('/conteudo/lista-filhos')} className="estiloBotaoRoxo">Responsável</button>
        </div>
        <div className="botaoFilho">
          <button onClick={() => this.nextPath('/conteudo/resumo-filho')} className="estiloBotaoBranco">Criança</button>
        </div>
      </div>
    );
  }
}


export default SelecionadorDeOpcoes;