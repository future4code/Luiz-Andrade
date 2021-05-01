// Exercícios de interpretação de código //

/*

1. 

false
false
true
boolean

2.

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 11

*/

// Exercícios de escrita de código //

/*

1.

let idade = Number(prompt("Qual a sua idade?"))
let idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu amigo?", idade > idadeMelhorAmigo)

let diferenca = idade - idadeMelhorAmigo
console.log(diferenca)

2.

const numeroPar = prompt("Insira um número par: ")

console.log(numeroPar % 2)

// Para todos os números pares, vai ser impresso 0
// Para números ímpares, vai ser impresso 1


3.

let listaDeTarefas = []
let tarefa1 = prompt("Digite a tarefa 1: ")
listaDeTarefas.push(tarefa1)

let tarefa2 = prompt("Digite a tarefa 2: ")
listaDeTarefas.push(tarefa2)

let tarefa3 = prompt("Digite a tarefa 3: ")
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indice = prompt("Digite o índice da tarefa que você já realizou: ")
listaDeTarefas.splice(indice)

console.log(listaDeTarefas)


4.

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log("O e-mail ", emailDoUsuario, " foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario)

*/


/* 1. A primeira variavel "respostaDoUsuario" faz
uma pergunta ao usuario para colocar um numero.
A segunda variavel "numero" irá armazenar este numero indicado
pelo usuario  

Os numero imprimidos no console "Passou no teste" serão apenas
numeros quando dividido por dois resultara "0".

Os que não serão imprimidos, serão numeros quando dividido por dois
não resultará "0".
*/


/* 2. a) Serve para o cliente escolher uma fruta e ver seu preço. 
      b)  O preço da fruta maçã é  R$ 2.25
      c) O preço da fruta fruta pera é R$ 5)*/

/* 3. a) A primeira linha deixa claro que o valor digitado
pelo usuario terá de ser um tipo Number 
      b) se digitar 10, irá passar no filtro e irá imprimir no 
      console "Esse numero passou no teste" e também irá imprimir 
      "essa mensagem é secreta!!!"
      caso digite -10 não irá aparecer nada
      c) acredito que haverá um erro caso digite um numero
      menor que 10 pois a variavel "mensagem" dará o erro
      de "nao declarada no console"  */


// 4.
/* let idadeUser = Number(prompt("Qual a sua idade?"))
if(idadeUser >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
} */

// 5.
/* let turnoEstudante = prompt("Insira 'M' para matutino,  'V' para vespetino ou 'N' para noturno!.")

 if(turnoEstudante === 'm'){
     console.log("Bom dia")
 }else if (turnoEstudante === 'v'){
   console.log("Boa tarde")
 }else{
     console.log("Boa noite")
 }  */

// 6.
/* let turnoEstudante = prompt("Insira 'M' para matutino,  'V' para vespetino ou 'N' para noturno!.")
switch (turnoEstudante){
 case 'm':
    console.log('Bom Dia')
    break
 case 'v':
     console.log('Boa Tarde')
     break
  case 'n':
      console.log('Boa noite')   
      break
}  */

// 7.  && Desafio 8.
/* 
let generoFilm = prompt("Qual genero de filme você quer assistir?")
let precoFilm = Number(prompt("Qual valor você teria disponivel para assistir este filme?"))
let acompanhamentoSnack = prompt("Qual snack você quer comprar?(pipoca, chocolate, doces, etc)")

let snack;
snack = acompanhamentoSnack
 
switch(acompanhamentoSnack) {
  case "pipoca":
  break;
  case "chocolate":
  break;
  case "doces":
  break;
}


let resulPreco = [precoFilm]

switch(generoFilm) {
   case "ação":
     resulPreco = 20;
     break;

   case "aventura":
       resulPreco = 18;
     break;

   case "comedia":
       resulPreco = 29;
       break;

   case "documentario":
     resulPreco = 30;
     break;

   case "ficção científica":
       resulPreco = 14;
     break;

   case "fantasia":
       resulPreco = 15;
     break;
}

if(generoFilm === "fantasia" && precoFilm <= 15){
    console.log("Bom filme e com " + snack)
} else{
    console.log("Escolha outro filme")
}
*/


let perguntaNomeCompleto = prompt("Qual seu nome completo?")
let perguntaTipoDoJogo = prompt("Escolha a o tipo do jogo (IN OU DO)")
let perguntarEtapaDoJogo = prompt("Escolha a etapa do jogo (SF, DT ou FI)")
let perguntaCategoria = Number(prompt("Escolha categoria (1, 2, 3 ou 4)"))
let perguntaQuantidadeIngresso = Number(prompt("Quantos ingressos?"))

let categoria;
let total;
let tipoDoJogo;
let etapaDoJogo;


switch (perguntarEtapaDoJogo){
  case "SF":
  if (perguntaCategoria === 1){
    categoria = 1320
  } else if (perguntaCategoria === 2) {
    categoria = 880
  }else if (perguntaCategoria === 3) {
    categoria = 550
  }else if (perguntaCategoria === 4) {
    categoria = 220
  }
  etapaDoJogo = "Semifinais"
}

switch (perguntarEtapaDoJogo){
  case "DT":
  if (perguntaCategoria === 1){
    categoria = 660
  } else if (perguntaCategoria === 2) {
    categoria = 440
  }else if (perguntaCategoria === 3) {
    categoria = 330
  }else if (perguntaCategoria === 4) {
    categoria = 170
  }
  etapaDoJogo = "Descisão do 3º lugar"
}

switch (perguntarEtapaDoJogo){
  case "FI":
  if (perguntaCategoria === 1){
    categoria = 1980
  } else if (perguntaCategoria === 2) {
    categoria = 1320
  }else if (perguntaCategoria === 3) {
    categoria = 880
  }else if (perguntaCategoria === 4) {
    categoria = 330
  }
  etapaDoJogo = "Finais"
}

if (perguntaTipoDoJogo === "IN"){
 total = (categoria * perguntaQuantidadeIngresso) / 4.10;
 console.log(total)
} else {
  total = perguntaQuantidadeIngresso * categoria
  console.log(total)
}

if(perguntaTipoDoJogo === "IN"){
  tipoDoJogo = "Internacional"
} else {
  tipoDoJogo = "Nacional"
}

console.log("--Dados da compra--")
console.log("Nome do cliente: " + perguntaNomeCompleto)
console.log("Tipo do jogo: " + tipoDoJogo)
console.log("Etapa do jogo: " + etapaDoJogo)
console.log("Categoria: " + perguntaCategoria)
console.log("Quantidade de Ingressos: " + perguntaQuantidadeIngresso)
console.log("--Valores--")
console.log("Valor do ingresso:" + "R$" + categoria )
console.log("Valor total: " + "R$" + total)







/*
 let listaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


    for (let i=0; i<listaArray.length; i++){
      let valor = listaArray[i];
      if(valor == 1) listaArray.push(16);
      console.log(valor)
    }

    for(var i = 0; i < listaArray.length; i += 1){
      console.log(listaArray[i] = '' + listaArray[i]);
   }

   */