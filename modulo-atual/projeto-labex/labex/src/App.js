import React from "react";
import styled from 'styled-components'

const appContainer = styled.div` 
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: green;
`



function App() {
  return (
    <appContainer> 
      <p>HEADER</p>
      <p>Pagina de criação site</p>
      
    </appContainer>
  );
}

export default App;
