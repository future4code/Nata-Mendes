import React from 'react'


const CardVideo = (props) => {
    return  <div className="box-pagina-principal" onClick={props.reproduzVideo}>
    <img  src={props.link} alt="imagem jogo"/>
    <h4>{props.texto}</h4>
 </div>  
    
};

export default CardVideo;