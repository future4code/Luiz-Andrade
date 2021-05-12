import React from "react"



export class Etapa1 extends React.Component {
  
  render(){
    return (
        <div className= "App">
        <h1>ETAPA 1 - DADOS GERAIS </h1>
        <p>1. Qual o seu nome?</p>
        <input type="text"></input>

        <p>2. Qual sua idade?</p>
        <input type="text"></input>

        <p>3. Qual o seu email?</p>
        <input type="text"></input>

        <p>4. Qual a sua escolaridade?</p>
        <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Completo</option>
        </select>
     </div>

    )
  }

} 


export default Etapa1 ;
