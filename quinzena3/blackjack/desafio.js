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
const carta = comprarCarta();

if (primeiraCartaUser.valor === 11 && segundaCartaUser.valor === 11 || primeiraCartaComputador.valor === 11 && segundaCartaComputador.valor === 11){
   console.log("Novamente Sorteado")
   console.log("Usuario - Cartas:" + " " + carta.texto + " " + segundaCartaUser.texto + " - " + somaUser);
   console.log("Computador - Cartas:" + " " + primeiraCartaComputador.texto + " " + carta.texto + " - " + somaComp);
}
