import axios from "axios"
import React from "react"

export default class TelaCadastro extends React.Component{
    state = {
        nome: "",
        email: ""
    }

    handleNome = (e) => {
     this.setState({nome: e.target.value})
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value})
    }


    fazerCadastro = () =>{
     const body = {
         name: this.state.nome,
         email: this.state.email
     }   
     axios
     .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
       headers: {
            Authorization: "luis-andrade-munoz"
        }
      }).then((res) => {
        alert('Usuario cadastrado com sucesso!')
        this.setState({nome: "", email: ""})
        
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }
    
   render(){
       return(
          <div>
              <button onClick={this.props.irParaCadastro}>ir para lista de usuarios</button>
              <h2>Cadastro</h2>
              <input
               type="text"
               placeholder="nome"
               value={this.state.nome}
               onChange ={this.handleNome}
                ></input>

              <input type="text"
               placeholder="e-mail"
               value={this.state.email}
               onChange ={this.handleEmail}
               
               ></input>
              <button onClick={this.fazerCadastro}>Cadastrar</button>
          </div> 
       )
   }

}