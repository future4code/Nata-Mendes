import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcpq4-1.fna.fbcdn.net/v/t39.30808-6/274231566_5069508459778731_204594621555510146_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEu-JRUyhaQww7JpgXErWklmScEE1uz02SZJwQTW7PTZLJPtyq7C9PvfqIP3XtAHM8YLUUrn7-NM4KVY9VxWh0z&_nc_ohc=136nVriyeuQAX8LTF0C&_nc_ht=scontent.fcpq4-1.fna&oh=00_AT8y5_qWvkJ_xcDjBZcXeTPK-OTpKg8mQ8tFbxv7LmnhBA&oe=6254E8D1" 
          nome="Natã de Lima" 
          descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="./imagem/lo" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
