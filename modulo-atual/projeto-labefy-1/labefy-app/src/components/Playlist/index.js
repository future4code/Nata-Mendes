import React from "react";
import styled from "styled-components";

const PlaylistContainer = styled.div`

`

class Playlists extends React.Component {
   state ={

   }

   render () {
      return ( 
         < PlaylistContainer>
         <button onClick={() => this.props.changingPage("playlistdetail")}>Abrir Playlist</button>
          </ PlaylistContainer>
         )
   };
  
};

export default Playlists