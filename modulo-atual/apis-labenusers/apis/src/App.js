import React from "react"
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuario";

class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>

      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default: 
        return <div>ERRO! Página não encontrada :( </div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }


  render() {
    return (
    <div >
    {this.escolheTela()}
    </div>
  )
    }
}

export default App;
