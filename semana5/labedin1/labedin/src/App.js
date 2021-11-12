import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto1 from './img/img.jpg';
import foto2 from './img/centauro.png';
import foto3 from './img/aguiadourada.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto1}
          nome="Natã Mendes" 
          descricao="Olá, eu sou o Natã Mendes. Sou o aluno da Labenu. Sou formado música e CMS de bordo. Sou casado, e meu hobby preferido, além de tocar minhas próprias músicas instrumentais, é assistir fails alheios no YouTube. "
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={foto3} 
          nome="Proteção Águia Dourada" 
          descricao="Supervisor de equipe"
        />
        
        <CardGrande 
          imagem={foto2} 
          nome="Centauro" 
          descricao="Recepcionista Bilíngue" 
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
