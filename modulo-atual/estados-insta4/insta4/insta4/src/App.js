import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/151'}
        />

<Post
          nomeUsuario={'Natyzinha'}
          fotoUsuario={'https://picsum.photos/50/70'}
          fotoPost={'https://picsum.photos/200/153'}
        />

<Post
          nomeUsuario={'Alsmira'}
          fotoUsuario={'https://picsum.photos/50/80'}
          fotoPost={'https://picsum.photos/200/155'}
        />
      </MainContainer>
    );
  }
}

export default App;
