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
console.log("Bem vindo ao jogo de blackjack")

let inicio = confirm("Quer iniciar uma nova rodada?")

if(inicio){
   let carta1DoUser = comprarCarta()
   let carta2DoUser = comprarCarta()
   let carta1DoComp = comprarCarta()
   let carta2DoComp = comprarCarta()
      
   let pontuacaoUser = carta1DoUser.valor + carta2DoUser.valor
   let pontuacaoComp = carta1DoComp.valor + carta2DoComp.valor

   console.log('Usuario - carta: '  + carta1DoUser.texto + ' ' + carta2DoUser.texto + " - " + pontuacaoUser)
   console.log('Usuario - carta: '  + carta1DoComp.texto + ' ' + carta2DoComp.texto + " - " + pontuacaoComp)
   if(pontuacaoUser > pontuacaoComp){
      console.log("O usuario ganhou")
   }else if(pontuacaoComp > pontuacaoUser){
      console.log("O computador ganhou")
   }else if(pontuacaoUser === pontuacaoComp){
      console.log("empate")
   }

}else{
   console.log("O jogo acabou")
}