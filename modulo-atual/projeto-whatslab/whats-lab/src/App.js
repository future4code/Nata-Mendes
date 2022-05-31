import React from "react"
import styled from "styled-components"



const BalaoMensagem = styled.div`
background-color: lightgreen;
border-color: azure;
border-radius: 10px;
padding: 10px;
margin: 10px;
`
const ContainerControles = styled.div`
margin: 30px 10px;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
column-gap: 10px;

`


const ContainerMensagem = styled.div`
display: flex;
flex-direction: column;

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
  const novaMensagem = {usuario: this.state.usuario, texto:this.state.texto }
  const novaLista = [...this.state.listaMensagens, novaMensagem]
   this.setState ({listaMensagens: novaLista})
   this.limpar()
  //  console.log(novaLista)
}

limpar = () => {
  this.setState ({usuario: "", texto: ""})
}

render() {
  const componenteMensagem = this.state.listaMensagens.map((balao, index, array )=> {
    return (
      <BalaoMensagem key={index}>
       <strong> {balao.usuario} :  </strong> {balao.texto} 
      </BalaoMensagem>
    )

  })



  return (
    <div >
      <h1>WhatsLab</h1>
      <ContainerMensagem>
      {componenteMensagem}
      </ContainerMensagem>
      <ContainerControles>
      <input 

      value={this.state.usuario}
      onChange={this.mudaUsuario}

      placeholder="Usuário" />


      <input
      
      value={this.state.texto}
      onChange={this.mudaTexto}
      
      placeholder="Mensagem" />

      <button onClick={this.enviarMensagem}>Enviar</button>
      </ContainerControles>
     
    </div>
  )
}
}
export default App;
