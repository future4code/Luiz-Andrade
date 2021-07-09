import axios from 'axios'
import './TelaInicial.css';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TrocaTela from '../Components/TrocaTela';


const MeuBotaoGostei = styled(IconButton)({
  background: 'white',
  color: 'rgba(27, 228, 161, 1)',
  height: 70,
  width: 70,
  boxShadow: '0px 3px 5px 2px rgba(67, 255, 0, .3)',
  '&:hover': {
    background: 'rgba(27, 228, 161, 1)',
    color: 'white',
    boxShadow: '0px 3px 5px 2px rgba(33, 33, 33, 0.3)'
  }
})

const MeuBotaoNaoGostei = styled(IconButton)({
  background: 'white',
  color: 'rgba(253, 73, 97, 1)',
  height: 70,
  width: 70,
  boxShadow: '0px 3px 5px 2px rgba(254, 119, 137, .4)',
  '&:hover': {
    background: 'rgba(253, 73, 97, 1)',
    color: 'white',
    boxShadow: '0px 3px 5px 2px rgba(33, 33, 33, 0.3)'
  }
})

const BtnStyledDislike = styled(ClearIcon)({
  fontSize: 40
})

const BtnStyledlike = styled(FavoriteIcon)({
  fontSize: 40
})


function TelaInicial(props) {
  
    const onNaoGostei = () =>{
     props.getProfileToChoose()
    }

    const postChoosePerson = () => {
      const body = {
        id: props.perfilEscolher.id,
	      choice: true
      }
      const aluno = 'luis'
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body,)
      .then(() => {
         props.getProfileToChoose()
      })
      .catch((err) => {
        console.log(err)
      })
    }

    const deiMatch = () =>{
      postChoosePerson()
    }

    return (
      <div className="aa">
       
       
      <TrocaTela onClickButton={props.onClickButton}/>

        <div className="photos-and-actions">
          
          <img className="photo" src={props.perfilEscolher.photo}/>
          <img className="photo-borrada" src={props.perfilEscolher.photo}/>
           
           <div className="photo-text">
              <div className="nome-idade">
               <h1>{props.perfilEscolher.name} {props.perfilEscolher.age}</h1>
              </div>
           <div className="bio-foto">
           <p>{props.perfilEscolher.bio}</p>
           </div>  

          </div>
        </div>
         
        <div className="buttons">
        <MeuBotaoNaoGostei>
         <BtnStyledDislike onClick={onNaoGostei} />
        </MeuBotaoNaoGostei> 

        <MeuBotaoGostei>
        <BtnStyledlike onClick={deiMatch}></BtnStyledlike> 
        </MeuBotaoGostei>

        </div> 
      </div>
    );
  }
  
  export default TelaInicial;