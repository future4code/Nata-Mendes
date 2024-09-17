// import React from "react";
// import styled from "styled-components";
// // import lixeira from "./image/excluir-grande.png";



// const CriaCard = styled.div `
// display: flex;
// align-items: center;
// justify-content:center;
// flex-direction: column;
// top: 144px;
// left: 501px;
// width: 438px;
// height: 434px;

// background: var(---cor-branco) 0% 0% no-repeat padding-box;
// background: #FFFFFF 0% 0% no-repeat padding-box;
// opacity: 1;

// button{
//     top: 497px;
// left: 550px;
// width: 165px;
// height: 48px;
// /* UI Properties */
// background: var(---cor-erro) 0% 0% no-repeat padding-box;
// background: #DB2525 0% 0% no-repeat padding-box;
// box-shadow: 0px 3px 6px #92207242;
// border-radius: 8px;
// opacity: 1;
// }

// a{
//     /* top: 509px;
// left: 772px;
// width: 76px;
// height: 23px;


// font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-18)/23px var(--unnamed-font-family-muli);
// letter-spacing: var(--unnamed-character-spacing-0);
// color: var(---cor-erro);
// text-align: left;
// font: normal normal bold 18px/23px Muli;
// letter-spacing: 0px;
// color: #DB2525;
// opacity: 1; */
// }

// `

// const Deletar = () => {

//     const avisaUsuarioDelete = () => {
//          alert("Você excluiu")
//     }





//     return (

//     <CriaCard>  
//     <img src="data:image/png;base64,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"></img>
//      <a onClick={() => avisaUsuarioDelete ()} href="../App.js">Excluir</a>
//      <a href="../App.js">cancelar</a>
//         </CriaCard>
    
//     )
// }

// export default Deletar;