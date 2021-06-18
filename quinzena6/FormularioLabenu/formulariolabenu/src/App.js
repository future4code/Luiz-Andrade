import React from "react"
import './App.css';
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final"
import styled from "styled-components";

const DivPrincipal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export class App extends React.Component {
   state = {
     etapa: 1,
   }

  renderizarEtapa = () => {
    switch (this.state.etapa){
      case 1 :
        return <Etapa1 />;

      case 2 :
        return <Etapa2 />

      case 3 :
        return <Etapa3 />
     
      case 4 :
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
   if (this.state.etapa){
     this.setState({etapa: this.state.etapa + 1})
   }
  }



  render(){
    
    if(this.state.etapa === 4){
      return (
        <Final />
      )

    }

    
    return (
      <DivPrincipal>
        {this.renderizarEtapa()}
        <button onClick= {this.irParaProximaEtapa}>Próxima etapa</button>
      </DivPrincipal>
    )
  }
} 


export default App;
