  import React, { useState } from "react";
  import styled from "styled-components";
 import lupa from "./image/lupa.png";
 import fundo from "./image/fundo.png";
 import logo from "./image/logo.png";
import Card from "./components/Cards/Cards";
  
  
  const HomeContainer = styled.div `
    display: flex;
    flex-direction: center;
    margin: 0px;
    padding: 0px;
   
    

  `
  const Header = styled.header `
    display: flex;
    background-color: #5F1478;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 64px;
    position: absolute;
    
 
`
  const ImgLogo = styled.img `
    top: 14px;
    left: 24px;
    width: 192px;
    height: 37px;
    margin-left: 15px;
    `
  const ContainerHeader = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    background-color: purple;
    width: 100%;
    height: 261px;
    margin: 0px;
    padding: 0px;
    top: 0;
    position: absolute;
    border: 1px solid #000;
    background-image: url(${fundo});
    

    `
  const Input = styled.input `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    height: 16% ;
    padding: 10px;
    text-align: center;
    margin-top: 170PX;
    margin-left: 258px;
    border:none;
    border-radius:5px;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: left;
   
  `

  const ImageLupa = styled.img `
    align-items: center;
    width: 30px; 
    height: 30px;
    margin-left: 1030px;
    margin-top: 178px;
    position: absolute;
    cursor: pointer;
  ` 
  const Body = styled.body `
    display: grid;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100vh;

   
    
   
  
  `
  const ContainerBody = styled.body`
    display: grid;
    justify-content: start;
    width: 100%;
    height: 100vh;
    margin-top: 263px;
    
   
  
 
  `
  const Titulo = styled.p`
  position: absolute;
     display: inline;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;  
      font-size: 32px;
      font-weight: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32)/var(--unnamed-line-spacing-40) var(--unnamed-font-family-muli);;
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(---cor-primaria);
      text-align: left;
      font: normal normal normal 32px/40px Muli;
      letter-spacing: 0px;
      color: #5F1478;
      opacity: 1;
      margin-left: 23px;
      margin-top: 40px;
      
  `
  
  const BotaoCriarCard = styled.button `
  position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    justify-content: space-evenly ;
    background-color: #E76316;
    top: 293px;
    left: 1000px;
    width: 173px;
    height: 48px;
    border-radius: 8px;
    border-width: 0px;
    margin-top: 4px;
    font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(---cor-branco);
    text-align: left;
    font: normal normal bold 18px/23px Muli;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    cursor: pointer;

    `

  const ContainerPesquisa = styled.div `
    width: 100%;
    margin-bottom: 10px;

    ` 



  export default function App () {

  
    const [inputBusca, setInputBusca] = useState ("")
    
   


    const mudaInput = (e) => {
      setInputBusca (e.target.value)
    }

  
      const mudandoPage = () => {
          alert ("Não foi possível criar novo card!")
      }
      

        return (

       
            <HomeContainer>

  <ContainerHeader>
  <Header>
  <ImgLogo src={logo}/>
  </Header>
  
     <ContainerPesquisa>
        <ImageLupa src={lupa} ></ImageLupa>
  
        <Input placeholder="Digite aqui sua busca..." onChange={mudaInput} value={inputBusca} />

     </ContainerPesquisa>

  </ContainerHeader>

  <Body>
  
    <ContainerBody>
<Titulo> Resultado de busca</Titulo>
    <BotaoCriarCard onClick={mudandoPage}> Novo card</BotaoCriarCard>

    <Card/>
    </ContainerBody>
   
  </Body>



  </HomeContainer>
  
       
        
        );

  };
  
