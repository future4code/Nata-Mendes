import React from "react";
import styled from "styled-components";
import Playlists from "../Playlist";
import PlaylistDetail from "../PlaylistDetail";

const ManagerPlaylist = styled.div`

`

class  ManagerPlaylistform extends React.Component {
   state ={
      currentPage: "playlist"
   }

   changingPage = (currentPages) => {
      this.setState({currentPage: currentPages})
    }
    


   render () {
      const currentPages = () => {
         if (this.state.currentPage === "playlist") {
            return <Playlists changingPage={this.changingPage}
            />
          } else if (this.state.currentPage === "playlistdetail") {
            return <PlaylistDetail changingPage={this.changingPage}
            />
          }
         
      }

      return ( 
         <ManagerPlaylist >
          {currentPages()}
          </ManagerPlaylist>
         )
   }
  
}

export default ManagerPlaylistform