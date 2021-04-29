import React from 'react';
//import './CardGrande.css'
import styled from 'styled-components'

const BigcardContainer =  styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
`
const Imagem = styled.img`
width: 70px;
margin-right: 10px;
border-radius: 50%;
`
const Header4 = styled.h4`
margin-bottom: 15px;
`
const Div1 = styled.div` 
display: flex;
flex-direction: column;
justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigcardContainer>
            <Imagem src={ props.imagem } />
            <Div1>
                <Header4>{ props.nome }</Header4>
                <p>{ props.descricao }</p>
            </Div1>
        </BigcardContainer>
    )
}

export default CardGrande;