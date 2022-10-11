import React from "react";
  import styled from "styled-components";
  import editar from "../../image/editarpequeno.png";
  import excluir from "../../image/excluir-pequeno.png";



  const CardBox = styled.body `
    min-height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 60px;
    grid-template-columns: 1fr;
    margin-top: 100px;

  `

  const Main = styled.main `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    margin: 20px;
  `
  const CardProduto = styled.div `
    width: 234px;
    height: 267px;
    flex-direction: column;
    justify-content: center;
    box-shadow: 2px 2px 5px darkgray;
    text-align: center;
    background-color: white;
  `
  
  const ImagemCard = styled.img `
      width: 95px;
      height: 95px;
      padding-top: 25px;
    
  `
  const Div1 = styled.div`
  position: absolute;
  margin-top: 30px;
  margin-left: 160px;
  cursor: pointer;

  p {
    padding: 10px;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  `
  const Div2 = styled.div`
  position: absolute;
  margin-top: 30px;
  margin-left: 50px;
  cursor: pointer;

  p{
    padding: 10px;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  `

  const IconeEditar = styled.img `
  position: absolute; 
  width: 16px;
  height: 16px;
  right: 42px;

  `
  const IconeExcluir = styled.img `
  position: absolute;
  width: 16px;
  height: 16px;
  right: 50px;

  `

  const Card = (props) => {


      const avisaUsuarioEdit = () => {
          alert("O botão editar não está funcionando")
      }
      
      
      const avisaUsuarioDelete = () => {
          alert("O botão excluir não está funcionando")
      }

      
     
      
      
      return (
        


      <CardBox>
        

  <Main>

 
        <CardProduto> 
         
          <ImagemCard src={props.imagem}
          />
      
          <h2>{props.nome}</h2>
        

        <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>
        
        </CardProduto>
   
     


      </Main>
          </CardBox>
      
      )
  }


  export default Card;
