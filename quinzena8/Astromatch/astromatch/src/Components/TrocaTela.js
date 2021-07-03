import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { styled } from '@material-ui/core/styles';
import './TrocaTela.css'


const IrMatches = styled(QuestionAnswerIcon)({
    fontSize: 35,
    color: 'rgba(26, 30, 30, .2)',
  
    '&:hover': {
      color:'rgba(26, 30, 30, .7)',
    }
  })

function TrocaTela (props) {

 return(
    <div className="mat">
    <IrMatches onClick={props.onClickButton}/>
    </div>
 )   
}

export default TrocaTela;