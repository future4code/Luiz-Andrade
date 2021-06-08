import React from 'react'
import './criarPlaylist.css'
import axios from 'axios'

 export default class CriarPlaylist extends React.Component{
  state = {
    nome: ""
  }

  handleNome = (e) =>{
    this.setState({nome: e.target.value})
  }
  
  adicionarPlaylist = () => {
    const body = {
      name: this.state.nome
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
        Authorization: 'luis-andrade-munoz'
      }
    }).then(() => {
      alert('Playlist adicionada com sucesso!')
      this.setState({nome: ""})
    }).catch((error) => {
      alert(error.response.data.message)
    })
  }


  render(){
     return(
       <div className ="playlista">
         <header>
           <button onClick={this.props.irParaLista}>VER PLAYLIST</button>
         </header>
           <div className="container-input">
           <p>CRIAR PLAYLIST</p>
           <p>NOME PLAYLIST</p>
           <input placeholder="Nome Playlist" 
            value={this.state.nome}
            onChange={this.handleNome}
           />
           <button onClick={this.adicionarPlaylist}>ENVIAR</button>
           </div>
       </div>
     )
   }
}
