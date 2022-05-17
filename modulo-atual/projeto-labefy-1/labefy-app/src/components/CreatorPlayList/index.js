import React from "react";
import styled from "styled-components";

const CreatorPlaylist = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
/* background-color: goldenrod; */
`

const FormsPlaylist = styled.form`
height: 100px;
justify-content: space-around;
display:flex;
align-items: center;
background-color: goldenrod;
flex-direction: column;
`


class CreatorPlaylistForm extends React.Component  {
   state = {
       
   }
   
   render () {

    return ( 
   <CreatorPlaylist>
       <h1>Cadastrar nova Palylist</h1>
   <FormsPlaylist>
       <label> Nova Playlist</label>
       <input placeholder="Nome da Playlist" />
       <button>Cadastrar Nova Playlist</button>
   </FormsPlaylist>
    </CreatorPlaylist>
   )
    };
}

export default CreatorPlaylistForm