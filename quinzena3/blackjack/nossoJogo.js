/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Cartas com texto e valor random do usuario
let primeiraCartaUser = comprarCarta()
let segundaCartaUser = comprarCarta()
// Cartas com texto e valor random do Computador
let primeiraCartaComputador = comprarCarta()
let segundaCartaComputador = comprarCarta();
// Soma dos valores entre as duas cartas random do User
let somaUser = Number(primeiraCartaUser.valor) + Number(segundaCartaUser.valor);
// Soma dos valores entre as duas cartas random do Computador
let somaComp = Number(primeiraCartaComputador.valor) + Number(segundaCartaComputador.valor);

// Pergunta se o User quer jogar. 
//Se sim o jogo dá as duas cartas para o User e Comp.
if(("Quer iniciar uma nova jogada?")){
      true === console.log("Bem vindo ao jogo de Blackjack!")
      true === console.log("Usuario - Cartas:" + " " + primeiraCartaUser.texto + " " + segundaCartaUser.texto + " - " + somaUser);
      true === console.log("Computador - Cartas:" + " " + primeiraCartaComputador.texto + " " + segundaCartaComputador.texto + " - " + somaComp);        
} else {
   console.log("Bem vindo ao jogo de Blackjack!")
   console.log("O jogo acabou")
}

//Logica para comparação e resultado
if (somaUser > somaComp){
   console.log("O Usuario ganhou!")
} else if (somaComp > somaUser){
   console.log("O computador ganhou!")
}else{
   console.log("Empate!")
}


