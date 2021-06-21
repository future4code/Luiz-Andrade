import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { styled } from '@material-ui/core/styles';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './App.css'
//import Reseta from './Components/Reseta';
import TelaMatches from './Pages/TelaMatches';
import TelaInicial from './Pages/TelaInicial';


const IrMatches = styled(QuestionAnswerIcon)({
  fontSize: 35,
  color: 'rgba(26, 30, 30, .2)',

  '&:hover': {
    color:'rgba(26, 30, 30, .7)',
  }
})

function App() {
  const [perfilEscolher, setPerfilEscolher] = useState ([])
   const [changeScreen, setChangeScreen] = useState ('inicial')
   const [listaMatches, setListaMatches] = useState ([])


   useEffect(() => {
    getProfileToChoose();
}, []); 

  const trocaPagina = () => {
    switch(changeScreen){
      case 'inicial': 
        return < TelaInicial onClickButton={onClickButton} perfilEscolher={perfilEscolher} getProfileToChoose={getProfileToChoose} />
      case 'matches':
        return <TelaMatches onClickButton={onClickButton} listaMatches={listaMatches} mostraMatches={mostraMatches} />  
      default: 
         return  <TelaInicial />
    }
  }

  const onClickButton = () =>{
    if(changeScreen === 'inicial'){
      setChangeScreen('matches')
    } else if (changeScreen === 'matches') {
      setChangeScreen('inicial')
    }
  }

  const getProfileToChoose = () =>{
    const aluno = 'luis'
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
    .then((res) => 
    {setPerfilEscolher(res.data.profile)})
    
    .catch((err) => console.log(err.response))          
 }

  const mostraMatches = () =>{
    const aluno = 'luis'
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
    .then((res) => {
      setListaMatches(res.data.matches)
    })
    .catch(() => {
     alert("Ocorreu um problema, tente novamente!")
    })
  }

   const putReseta = () =>{
    const aluno = 'luis'
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
    .then(() => {
      mostraMatches()
    })
    .catch(() => {
     alert("Ocorreu um problema, tente novamente!")
    })
  }

  return (
    <div className="App">
      <div className="Container">
  
     {trocaPagina()}
    
     {/* <Reseta putReseta={putReseta} /> */}
     </div>
    </div>
  );
}

export default App;
