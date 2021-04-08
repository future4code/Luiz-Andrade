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
const cartaRan1 = comprarCarta();
const cartaRan2 = comprarCarta();

let cartaRan3 = comprarCarta()
let cartaRan4 = comprarCarta();

let somaUserRan = Number(cartaRan1.valor) + Number(cartaRan2.valor);
let somaCompRan = Number(cartaRan3.valor) + Number(cartaRan4.valor);

if (primeiraCartaUser.valor === 11 && segundaCartaUser.valor === 11 || primeiraCartaComputador.valor === 11 && segundaCartaComputador.valor === 11){
   console.log("Novamente Sorteado")
   console.log("Usuario - Cartas:" + " " + cartaRan1.texto + " " + cartaRan2.texto + " - " + somaUserRan);
   console.log("Computador - Cartas:" + " " + cartaRan3.texto + " " + cartaRan4.texto + " - " + somaCompRan);
}

if (confirm("Suas Cartas são " + primeiraCartaUser.texto + " " + segundaCartaUser.texto + "." + " A carta revelada do computador é " + primeiraCartaComputador.texto + "\n" + "Deseja comprar mais uma carta?")){
   
}
