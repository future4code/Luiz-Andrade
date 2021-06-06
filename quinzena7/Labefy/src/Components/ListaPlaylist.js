import React from 'react'
import './listaPlaylist.css'
import axios from 'axios'

 export default class ListaPlaylist extends React.Component{
  state = {
    playlist: []
  } 
  
  componentDidMount = () => {
   this.mostrarPlaylist()
  }
  
  mostrarPlaylist = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers:{
        Authorization: 'luis-andrade-munoz'
      }
    }).then((res) => {
      this.setState({playlist: res.data.result.list})

    }).catch(() => {
      alert("Ocorreu um problema, tente novamente!")

    })
  } 

  deletarPlaylist = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
      headers: {
        Authorization: 'luis-andrade-munoz'
      }
    }).then(()=>{
      alert('playlist deleteada com sucesso!')
      this.mostrarPlaylist()
    }).catch(()=>{
     alert('não foi removido!')
    })
  }
  
  render(){
    
    const listaDePlaylist = this.state.playlist.map((playlist) => { 
        return (<div key={playlist.id}>
          {playlist.name}
          <button onClick={() => this.deletarPlaylist(playlist.id)}>DELETAR</button>
          <button onClick={this.props.irParaDetalhes}>DETALHES</button>
          </div>)

    })
     return(
       <div className="list">
         <header>
           <button onClick={this.props.irParaCriarTela}>VOLTAR PARA HOME</button>
         </header>
         <div className="cointainer-lista">
         <p>PLAYLIST</p>
         {listaDePlaylist}
         </div>
       </div>
     )
   }
}
