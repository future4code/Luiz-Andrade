import React from "react"



export class Etapa2 extends React.Component {
  
  render(){
    return (
        <div className= "App">
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input type="text"></input>

        <p>6. Você fez algum curso complementar?</p>
        <select>
          <option>Nenhum</option>
          <option>Curso Tecnico</option>
          <option>Curso de inglês</option>
        </select>
        
     </div>

    )
  }

} 


export default Etapa2 ;
