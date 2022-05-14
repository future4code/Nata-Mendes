import React from "react"
import styled from "styled-components"



const BalaMensagem = styled.div`
background-color: lightgreen;
border-color: azure;
border-radius: 10px;
padding: 10px;
margin: 10px;
`


class App extends React.Component {
state = {
  usuario: "",
  texto: "",
  listaMensagens: []
}


mudaUsuario = (e) => {
  this.setState ({usuario: e.target.value})
}

mudaTexto = (e) => {
  this.setState ({texto: e.target.value})
}

enviarMensagem = () => {
  const novaMensagem = {usario: this.state.usuario, texto:this.state.texto }
  const novaLista = [...this.state.listaMensagens, novaMensagem]
   this.setState ({listaMensagens: novaLista})
   console.log(novaLista)
}

render() {
  const componenteMensagem = this.state.listaMensagens.map((balao)=>{})



  return (
    <div >
      <h1>WhatsLab</h1>
      <input 

      value={this.state.usuario}
      onChange={this.mudaUsuario}

      placeholder="Usuário" />


      <input
      
      value={this.state.texto}
      onChange={this.mudaTexto}
      
      placeholder="Mensagem" />

      <button onClick={this.enviarMensagem}>Enviar</button>
    </div>
  )
}
}
export default App;
