import React from "react";
import ListaMensagens from "./ListaMensagens";

export default class Mensagens extends React.Component {
  state = {
    personagens: ["Bom dia!", "Até logo", "Boa noite", ]
  };




  render() {
    return (
      <div>
        <h1>Personagens</h1>
        {this.state.personagens.length ? (
          <p>Você tem {this.state.personagens.length} personagens.</p>
        ) : (
          <p>Você não tem nenhuma nova mensagem.</p>
        )}

        {/* {this.state.mensagens.length && (
          <ListaMensagens mensagens={this.state.mensagens} />
        )} */}
      </div>
    );
  }
}
