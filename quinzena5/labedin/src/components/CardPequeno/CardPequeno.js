import React from 'react';
//import './CardPequeno.css'
import styled from 'styled-components'

const SmallcardContainer =  styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 70px;
`
const Imagem = styled.img`
width: 30px;
margin-right: 10px;
border-radius: 50%;
`
const Div1 = styled.div` 
display: flex;
flex-direction: column;
justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <Imagem src={ props.imagem } />
            <Div1>
                <p>{ props.texto}</p>
            </Div1>
        </SmallcardContainer>
    )
}

export default CardPequeno;
