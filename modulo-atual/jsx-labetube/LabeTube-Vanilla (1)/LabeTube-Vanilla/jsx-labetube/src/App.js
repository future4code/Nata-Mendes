import React from 'react';
import logo from './logo.svg';
import './App.css';
import foto from './imagem/icone home.png';
import foto1 from './imagem/icone gráfico.png';
import foto2 from './imagem/botao play.png';
import foto3 from './imagem/icone check.png';
import foto4 from './imagem/icone relógio.png';
import foto5 from './imagem/icone biblioteca.png';
import CardVideo from './components/CardVideo'
import BotaoMenu from './components/BotaoMenu';
import styled from "styled-components";

const Footer = styled.footer `
height: 10%;
background-color: grey;
margin: 0;
padding: 0;
display: flex;
align-items: center;
`;

function App() {
  
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
    <div >
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <BotaoMenu 
                    fotos={foto}
                    texto={'Início'}
                    />
                    <BotaoMenu fotos={foto1}
                    texto={'Em Alta'}
                    />
                    <BotaoMenu fotos={foto2}
                    texto={'Inscrições'}
                    />
                    <BotaoMenu fotos={foto3}
                    texto={'Originais'}
                    />

                    <hr/>
                    <BotaoMenu fotos={foto5}
                    texto={'Biblioteca'}
                    />
                    <BotaoMenu fotos={foto4}
                    texto={'Histórico'}
                    />
                   
                </ul>
            </nav>
    
            <section className="painel-de-videos">

                <CardVideo 
                link={'https://api.lorem.space/image/game?w=150&h=220'}
                texto={'Vídeo Jogo 1'}
                reproduzVideo={reproduzVideo}
                />
                
                <CardVideo 
                link={'https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2'}
                texto={'Vídeo Jogo 2'}
                reproduzVideo={reproduzVideo}
                />
                
                <CardVideo 
               link={'https://api.lorem.space/image/game?w=150&h=220&hash=500B67FB'}
               texto={'Vídeo Jogo 3'}
               reproduzVideo={reproduzVideo}
               />

                <CardVideo
                link={'https://api.lorem.space/image/game?w=150&h=220&hash=4F32C4CF'}
                texto={'Vídeo Jogo 4'}
                reproduzVideo={reproduzVideo}
                />

                <CardVideo
                 link={'https://api.lorem.space/image/game?w=150&h=220&hash=225E6693'}
                 texto={'Vídeo Jogo 5'}
                 reproduzVideo={reproduzVideo}
                 />

                <CardVideo 
                link={'https://api.lorem.space/image/game?w=150&h=220&hash=9D9539E7'}
                texto={'Vídeo Jogo 6'}
                reproduzVideo={reproduzVideo}
                />

                <CardVideo 
                link={'https://api.lorem.space/image/game?w=150&h=220&hash=BDC01094'}
                texto={'Vídeo Jogo 7'}
                reproduzVideo={reproduzVideo}
                />

                <CardVideo 
                link={'https://api.lorem.space/image/game?w=150&h=220&hash=7F5AE56A'}
                texto={'Vídeo Jogo 8'}
                reproduzVideo={reproduzVideo}
                />
              

            </section>
        </main>

        <Footer>
            <h4>Oi! Eu moro no footer!</h4>
        </Footer>
    </div>
 
    </div>
  );
}

export default App;
