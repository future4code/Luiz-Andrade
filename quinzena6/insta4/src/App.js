import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

 const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center; 
`
const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 10px;
`

/* const arrayPosts = [
  {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/51',
    fotoPost: 'https://picsum.photos/200/150'
  },
  {
    nomeUsuario: 'Mateus',
    fotoUsuario: 'https://picsum.photos/50/52',
    fotoPost: 'https://picsum.photos/200/151'
  },
  {
    nomeUsuario: 'Tiago',
    fotoUsuario: 'https://picsum.photos/50/53',
    fotoPost: 'https://picsum.photos/200/152'
  }
]
*/
/* const arrayComponentes = arrayPosts.map((informacoes, index) => {
    return <Post key={index}
      nomeUsuario ={informacoes.nomeUsuario}
      fotoUsuario ={informacoes.fotoUsuario}
      fotoPost ={informacoes.fotoPost}
      />  
}); */

class App extends React.Component {
  state = {
    itemPost: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Mateus',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Tiago',
        fotoUsuario: 'https://picsum.photos/50/53',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    inputNome: "",
    inputFotoPerfil: "",
    inputFotoPost: ""
  };
      pegaNome = (e) => {
        this.setState({inputNome: e.target.value})
      }
      pegaFotoUser = (e) => {
        this.setState({inputFotoPerfil: e.target.value})
      }
      pegaFotoPost = (e) => {
        this.setState({inputFotoPost: e.target.value})
      }

      adicionaPostNovo = () => {
        const novaFoto = {
          nomeUsuario: this.state.inputNome,
          fotoUsuario: this.state.inputFotoPerfil,
          fotoPost: this.state.inputFotoPost
        }

        this.setState({
          itemPost: [...this.state.itemPost, novaFoto],
          inputNome: "",
          inputFotoPerfil: "",
          inputFotoPost: ""
        })
      }

     arraysDosItens = () => {
       return this.state.itemPost.map((informacoes, index) => {
        return <Post key={index}
        nomeUsuario ={informacoes.nomeUsuario}
        fotoUsuario ={informacoes.fotoUsuario}
        fotoPost ={informacoes.fotoPost}
        />  
       });
     }
  
  
  render() {
    return (
      <div className="App">
        <ContainerInput>
          <input 
            value={this.state.inputNome}
            onChange={this.pegaNome}
            placeholder="Nome"
          />
        <input 
            value={this.state.inputFotoPerfil}
            onChange={this.pegaFotoUser}
            placeholder="Foto do Perfil"
          />
          <input 
            value={this.state.inputFotoPost}
            onChange={this.pegaFotoPost}
            placeholder="Foto do post"
          />
          
         <button onClick ={this.adicionaPostNovo}>Adicionar</button>
        </ContainerInput>
      <MainContainer>
        {this.arraysDosItens()}
      </MainContainer>
      </div>
    );
  }
}

export default App;
