import React from "react";
import styled from "styled-components";

const CreatorPlaylist = styled.div`
height: 500px;
display: flex;
align-items: center;
background-color: goldenrod;
`

const FormsPlaylist = styled.form`
display:flex;
align-items: center;
background-color: goldenrod;
`


class CreatorPlaylistForm extends ReactComponent  {
   state = {
       
   }
   
   render () {

    return ( 
   <CreatorPlaylist>
   <FormsPlaylist>
       <label> Cadastrar nova Playlist</label>
       <input placeholder="Nome da Playlist" />
       <button>Cadastrar Nova Playlist</button>
   </FormsPlaylist>
    </CreatorPlaylist>
   )
    };
}

export default CreatorPlaylistForm