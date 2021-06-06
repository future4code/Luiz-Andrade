import React from 'react'
import CriarPlaylist from './Components/CriarPlaylist'
import ListaPlaylist from './Components/ListaPlaylist'
import DetalhesPlaylist from './Components/DetalhesPlaylist'

 export default class App extends React.Component{
  state ={
    telaAtual: "criar",
    playlistSelecionada: undefined
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "criar":
        return <CriarPlaylist irParaLista={this.irParaLista} />
      case "lista":
        return <ListaPlaylist irParaCriarTela={this.irParaCriarTela}  irParaDetalhes={this.irParaDetalhes}/>  
      case "detalhes":
        return <DetalhesPlaylist  irParaDetalhes={this.irParaDetalhes}/>
  
      default: 
        return <CriarPlaylist />
    }
  }
  irParaCriarTela = () => {
   this.setState({telaAtual: "criar"})
  }
  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }
  irParaDetalhes = () => {
    this.setState({telaAtual: "detalhes", playlistSelecionada: ""})
  }

  render(){
     return(
       <div>
         {this.escolheTela()}
       </div>
     )
   }
}

