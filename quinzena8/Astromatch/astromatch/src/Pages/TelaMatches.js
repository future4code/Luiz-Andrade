import { useEffect} from 'react';

function TelaMatches(props) {

  useEffect(() => {
    props.mostraMatches()
 }, [])

  return (
    <div className="App">
      <h1>Oi</h1> <button onClick={props.onClickButton}>Voltar</button>
      {props.listaMatches.map((pessoa) => (
       <div>
         
         <p>{pessoa.name}</p>
         <img src={pessoa.photo} />
       </div>
      ))}
    </div>
  );
}

export default TelaMatches;
