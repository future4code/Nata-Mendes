import React from "react";

export default class ListaMensagens extends React.Component {
  render() {
    const listaMensagens = this.props.mensagens;

    return (
      <div>
        <h3>Lista de Mensagens</h3>
        {listaMensagens.map((mensagem) => (
          <p>{mensagem}</p>
        ))}
      </div>
    );
  }
}
