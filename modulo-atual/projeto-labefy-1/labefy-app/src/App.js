import React from "react";
import styled from "styled-components";
import CreatorPlaylistForm from "./components/CreatorPlayList/index.js";
import Header from "./components/Header/index.js";
import ManagerPlaylistform from "./components/ManagerPlaylist/index.js";

// - O usuário deve ser capaz de criar uma playlist de músicas. 
// Para isso, ele só precisa passar um nome. Não podem existir playlists com o mesmo nome.

// - Deve haver a possibilidade do usuário visualizar todas as suas playlists, em uma lista específica. Nesta lista,
//  o usuário também pode deletar alguma playlist.

// - O usuário deve ser capaz de visualizar os detalhes de uma playlist:
//  o seu nome e as músicas que fazem parte dela.

// - Para adicionar músicas à playlist, o usuário deve informar: 
// o nome, os artistas relacionados (que pode ser só um cantor ou uma banda) e um link com o arquivo de áudio correspondente a esta música

const ContainerApp = styled.div`
display: flex;
flex-direction: column;
background-color: lightgreen;
width: 100vw;
height: 100vh;
`

class App extends React.Component {
  state = {
    currentPage: "CreatorPlaylistForm"
  }



changePage = (currentPages) => {
  this.setState({currentPage: currentPages})

}

  render () {
    const renderCurrentpage = () => {
      if (this.state.currentPage === "CreatorPlaylistForm")
      return <CreatorPlaylistForm/>
      else if (this.state.currentPage === "ManagerPlaylistForm") 
      return  <ManagerPlaylistform/>
    }


  return (
    <ContainerApp>
      <Header changePage={this.changePage} />
      {renderCurrentpage()}
    </ContainerApp>
  );
  }
}

export default App;
