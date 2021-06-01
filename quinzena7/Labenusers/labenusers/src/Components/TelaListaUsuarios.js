import React from "react"
import axios from 'axios'
export default class TelaListaUsuarios extends React.Component{
    state ={
     usuarios: []
    }
    componentDidMount = () =>{
        this.pegarUsuarios()
      }
  
    pegarUsuarios = () => {

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
        headers: {
            Authorization: 'luis-andrade-munoz'
        }
    }).then((res) => {
       this.setState({usuarios: res.data})
    }).catch((err) => {
        alert('Ocorreu um problema, tente novamente')
    })
   }

   deletarUsuario = (id) =>{
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
            Authorization: 'luis-andrade-munoz'
        }
    }).then((res) => {
       alert('Usuario deletado com sucesso')
       this.pegarUsuarios()
    }).catch((err) => {
       alert('Ocorreu um erro, tente novamente')
    })
   }

    render(){

    const listaUsuarios = this.state.usuarios.map((user, key) => {
     return (<div key={user.id}>{user.name}
              <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </div>)
    })
       
       return(
        <div>
        <button onClick={this.props.irParaLista}>ir para lista de usuarios</button>
        <h2>Lista de usuarios</h2>

        {listaUsuarios}
        </div> 
       )
   }

}