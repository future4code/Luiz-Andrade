import './App.css';
import React from 'react';
import TelaCadastro from './Components/TelaListaUsuarios';
import TelaListaUsuarios from './Components/TelaCadastro';

export class App extends React.Component{
   state = {
     telaAtual: "cadastro",
   }

   escolheTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro} />  
      default:
        return <TelaCadastro />
    }
   }
   irParaCadastro = () =>{
    this.setState({telaAtual: "cadastro"})
   }
   irParaLista = () =>{
    this.setState({telaAtual: "lista"})
  }
   render(){
     return(
       <div>
         {this.escolheTela()}
       </div>
     )
   }
}
export default App;
