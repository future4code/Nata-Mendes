import React from "react";


const BotaoMenu = (props) => {
    return (
    <div  className="icone-texto">
    <img className="tamanho-img" src={props.fotos} alt= "imagem ícone"/>
    <li className="botoes-meunu-vertical  ">{props.texto}</li>
   
    </div>
    )
};

export default BotaoMenu;