import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
background-color: lightgreen;
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;
`
const ButtonContainer = styled.div`
width:250px;
display: flex;
justify-content: space-between;
`

const Header = (props) => {
   return ( 
   <HeaderContainer>
    <h1>Labefy</h1>
    <ButtonContainer>
        <button onClick={() => props.changePage("CreatorPlaylistForm")}>Criar Playlist</button>
        <button  onClick={() => props.changePage("ManagerPlaylistForm")}>Suas Playlists</button>
    </ButtonContainer>
    </HeaderContainer>
   )
}

export default Header