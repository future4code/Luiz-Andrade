import './App.css';
import React from 'react';
import axios from 'axios'

export class App extends React.Component{
   state = {
     pagina: true,
     listaDeNomes: [],
     valorInputNome: '',
     valorInputEmail: '',
   }

   onChangeInputNome = (e) =>{
     this.setState({valorInputNome: e.target.value})
   }
   onChangeInputEmail = (e) =>{
    this.setState({valorInputEmail: e.target.value})
  }

   trocarPagina = () =>{
     if (this.state.pagina === true){
       this.setState ({ pagina: false})
     } else {
       this.setState ({pagina: true})
     }
   }

   componentDidMount = () =>{
     this.pegaUsuario()
   }

   pegaUsuario = () => {
     axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
       headers: {
         Authorization: "luis-andrade-munoz"
       }
     }).then((response) => {
       this.setState({listaDeNomes: response.data})
     }).catch((error) => {
       console.log(error.response.data)
     })
   }

    onEnviarNome = () =>{
    const body = {
      name: this.state.valorInputNome,
      email: this.state.valorInputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
       headers: {
        Authorization: 'luis-andrade-munoz'
       }
    }).then(() => {
      alert("Você criou um novo usuário!")
      this.setState({valorInputNome: ''})
      this.setState({valorInputEmail: ''})
    }).catch(() => {
      alert("Deu ruim :(")
    })
  } 


  deletaUser = (userId) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
       headers: {
         Authorization: "luis-andrade-munoz"
       }
     }).then(() => {
       if(window.confirm("Você quer apagar este usuário?") === true){
        return this.pegaUsuario()
       } 
     })
  }

  render(){
    const renderizarPagina = () =>{
      if(this.state.pagina === true) {
        return (
          <div className="Area-principal">
            <h2>Criar usuário</h2>
             <div>
                <input type="text"
                 placeholder="Nome"
                 value={this.state.valorInputNome}
                 onChange={this.onChangeInputNome}
                 ></input>

                <input type="email" 
                placeholder="E-mail"
                value={this.state.valorInputEmail}
                onChange={this.onChangeInputEmail}
                ></input>

                <button onClick={this.onEnviarNome}>Criar</button>
              </div>
         </div>
        )
      } else {
        return (
          <div className="Area-principal">
             <h2>Lista de Usuários</h2>
             {this.state.listaDeNomes.map((nome, index) => {
                return <div className="Area-principal" key={index}>
                    <p>{nome.name}</p>
                    <button onClick={() => this.deletaUser(nome.id)}>Delete</button>
                </div>
              }
             )}
          </div>
       )
      }
    }
    return(
       <div className="Area-principal">
         <h1>Labenusers</h1>
         <button onClick={this.trocarPagina}>Trocar de página</button>
         {renderizarPagina()}  
       </div>
    )
  }
}
export default App;
