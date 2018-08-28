import React, { Component } from 'react';
import './MaeListaTarefas.css';
import AdicionarTarefas from '../adicionartarefas/AdicionarTarefas';
import ListaTarefas from '../listatarefas/ListaTarefas';
import ModalCadastrarTarefas from '../modalcadastrartarefas/ModalCadastrarTarefas';
import tarefasService from '../../services/tarefasService';



class MaeListaTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarTarefasModal: false };
  }

  adicionarTarefasClickado() {
    this.setState({ mostrarTarefasModal: true });
  }

  fecharModal() {
    this.setState({ mostrarTarefasModal: false });
  }
  salvarTarefa(tarefa) {
    tarefasService.addTarefa(this.props.filho, tarefa)
    this.fecharModal()
  }
  onItemClicked(index) {

  }

  render() {
    return (
      <div>

        <div className="ListaDeTarefasMae">

          <p> Crie tarefas simples para criar hábitos importantes para a {this.props.filho.nome} e que transmitam valores para sua família.</p>


        </div>

        <AdicionarTarefas onClickListener={this.adicionarTarefasClickado.bind(this)} />

        <ListaTarefas listaDeTarefas={tarefasService.listTarefas(this.props.filho)} onItemClickListener={this.onItemClicked.bind(this)} />

        <ModalCadastrarTarefas deveAparece={this.state.mostrarTarefasModal}
          onCloseListener={this.fecharModal.bind(this)} onSaveListener={this.salvarTarefa.bind(this)} />
      </div>
    );
  }
}

export default MaeListaTarefas;