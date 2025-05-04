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

  const Card = () => {


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
          <ImagemCard src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
          />
          <h2>CSS</h2>
        

        <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>
        
        </CardProduto>
      
        <CardProduto>
          <ImagemCard src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
          />
          <h2>HTML</h2>
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>
        </CardProduto> 

        <CardProduto>
          <ImagemCard src="data:image/png;base64,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"
          />
          <h2>GitHub</h2>

          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="https://cdn-icons-png.flaticon.com/512/919/919852.png"
          />
          <h2>Python</h2>

          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto> 
  
        <CardProduto>
          // <ImagemCard src = "data:image/png;base64,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"
          />
          <h2>JavaScript</h2>

          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
          />
          <h2>TypeScript</h2>
        
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="data:image/png;base64,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"
          />
          <h2>PHP</h2>

          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="https://images-na.ssl-images-amazon.com/images/I/61np1wbr9pL.png"
          />
          <h2>Vue.js</h2>
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
          />
          <h2>React.js</h2>
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>
        
        <CardProduto>
          <ImagemCard src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
          />
          <h2>Node.js</h2>
          
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png"
          />
          <h2>Java</h2>
        
          <Div1>
        <IconeExcluir src={excluir}/>
          <p onClick={() => avisaUsuarioDelete()}>Excluir</p>
        </Div1>
        <Div2>

        <IconeEditar src={editar}/>

          <p onClick={() => avisaUsuarioEdit()}>Editar</p>
        </Div2>

        </CardProduto>

        <CardProduto>
          <ImagemCard src ="data:image/png;base64,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"
          />
          <h2>C Sharp</h2>
        
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
  ;

  export default Card;
