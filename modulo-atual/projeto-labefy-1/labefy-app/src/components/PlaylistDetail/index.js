import React from "react";
import styled from "styled-components";

const PlaylistDetailContainer = styled.div`

`

class PlaylistDetail extends React.Component {
   state ={

   }

   render () {
      return ( 
         < PlaylistDetailContainer>
        <button  onClick={() => this.props.changingPage("playlist")}>Voltar para Playlist</button>
          </ PlaylistDetailContainer>
         )
   };
  
};

export default PlaylistDetail