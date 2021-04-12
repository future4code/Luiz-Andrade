/* // Definição dos dias, mes e ano
const dia = 1
const mes = dia * 30
const ano = mes * 12 + 5

// Pergunta para o user sua data de nascimento
let diaUser = Number(prompt("Qual dia você nasceu?"))
let mesUser = Number(prompt("Que mês você nasceu?"))
let anoUser = Number(prompt("Que ano você nasceu?"))
// Armazenamento da data de nasc. do user
let arrayDia = []
let arrayMes = []
let arrayAno = []
arrayDia.push(diaUser)
arrayMes.push(mesUser)
arrayAno.push(anoUser) 

// Transformação dos dias, meses e anos em dias
let diaDoUser = arrayDia * dia;
let mesDoUser = arrayMes * mes;
let AnoDoUser = arrayAno * ano;

// soma total da data de nasciment do user
const somaTotalUser = diaDoUser + mesDoUser + AnoDoUser;


// Pergunta data atual 
let diaComparar = Number(prompt("Que dia é hoje?"))
let mesComparar = Number(prompt("Qual mês de hoje?"))
let anoComparar = Number(prompt("Em que ano estamos?"))

// Armazenamento dos dados do dia atual
let arrayDiaComp = []
let arrayMesComp = []
let arrayAnoComp = [] 
arrayDiaComp.push(diaComparar)
arrayMesComp.push(mesComparar)
arrayAnoComp.push(anoComparar)

// Transformação dos dias, meses e anos em dias
let diaDeHoje = arrayDiaComp * dia;
let mesDeHoje = arrayMesComp * mes;
let AnoDeHoje = arrayAnoComp * ano;

// Soma dos dias atuais depois de transformado
const somaTotalHoje = diaDeHoje + mesDeHoje + AnoDeHoje;

// Diferença para contabilizar os dias que o user tem
const resultadoDiferenca = somaTotalHoje - somaTotalUser;

console.log("você tem: " + resultadoDiferenca + " dias de idade") */
