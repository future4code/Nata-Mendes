import React from "react";
import Mensagens from "../components/Mensagens";
import Posts from "../components/Posts";

export default class Home extends React.Component {
  state = {
    personagem: ""
  };

  irParaLuke = () => {
    this.setState({ personagem: "Luke Skywalker" });
  };

  irParaC_3PO = () => {
    this.setState({ personagem: "C-3PO" });
  };

  irParaR2 = () => {
    this.setState({ personagem: "R2-D2" });
  };

  irParaDarthVader = () => {
    this.setState({ personagem: "Darth Vader" });
  };

  irParaLeia = () => {
    this.setState({ personagem: "Leia" });
  };

  irParaOwenLars = () => {
    this.setState({ personagem: "Owen Lars" });
  };

  irParaBeru = () => {
    this.setState({ personagem: "Beru Whitesun Lars" });
  };

  irParaR5 = () => {
    this.setState({ personagem: "R5-D4" });
  };

  irParaBiggs = () => {
    this.setState({ personagem: "Biggs" });
  };

  irParaObi = () => {
    this.setState({ personagem: "Obi" });
  };



  render() {
    let secao;

    switch (this.state.personagem) {

      case "Luke Skywalker":
        secao = <Mensagens />;
        break;

      case "C-3PO":
        secao = <Mensagens />;
        break;

        case "R2-D2":
        secao = <Mensagens />;
        break;
        case "Darth Vader":
        secao = <Mensagens />;
        break;

        case "Leia":
        secao = <Mensagens />;
        break;

        case "Owen Lars":
        secao = <Mensagens />;
        break;

        case "Beru Whitesun Lars":
        secao = <Mensagens />;
        break;

        case "R5-D4":
          secao = <Mensagens />;
          break;

          case "Biggs":
          secao = <Mensagens />;
          break;

          case "Obi":
          secao = <Mensagens />;
          break;

      default:
        secao = <p>Nenhuma seção selecionada</p>;
    }

    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.irParaLuke}>Luke SkyWalker</button>
        <button onClick={this.irParaC_3PO}>C-3PO</button>
        <button onClick={this.irParaR2}>R2-D2</button> 
        <button onClick={this.irParaDarthVader}>Darth Vader</button> 
        <button onClick={this.irParaLeia}>Leia Organa</button>
        <button onClick={this.irParaOwenLars}>Owen Lars</button>
        <button onClick={this.irParaBeru}>Beruzin</button>
        <button onClick={this.irParaR5}>R5-D4</button>
        <button onClick={this.irParaBiggs}>Biggs Darklighter</button>
        <button onClick={this.irParaObi}>Obi-wan Kenobi</button>
        <button onClick={this.props.onClickLogout}>Logout</button>
        {secao}
      </div>
    );
  }
}
