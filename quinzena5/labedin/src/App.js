import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import MinhaImagem from './img/eu1234.png';
import Email from './img/email.png'
import Local from './img/local.png'
import Ipiranga from './img/ipiranga.jpg'
import Mala from './img/mala.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaImagem} 
          nome="Luis Andrade" 
          descricao="Olá, meu nome é Luis Andrade. Sou aluno da Labenu na turma Muñoz. Faço parte da turma noturna de front-end já faz quase dois meses. Meus dois ultimos empregos foi como digitador e atendente. Gosto bastante de musica, treinar e codar!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem ={Email}
          texto ="E-mail: abobrinha@gmail.com"
        
        />
        <CardPequeno 
          imagem ={Local}
          texto ="Localização: Rua das aboboras, 007"
        
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

        <CardGrande 
         imagem={Ipiranga}
         nome= "Posto Ipiranga"
         descricao="Atendente e Caixa"
        />

        <CardGrande 
         imagem={Mala}
         nome= "Extremo Norte Serviços"
         descricao="Digitador"
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
