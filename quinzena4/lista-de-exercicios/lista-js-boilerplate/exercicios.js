//Exercício 1
function inverteArray(array) {
  // implemente sua lógica aqui
   var newArr = [];
   for (let i = 0; i < array.length; i++){
      newArr[i] = array[array.length - i - 1];
   }
   return newArr;
  }

//Exercício 2
function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let guardar = []
   for (let numero of array){
      if(numero % 2 === 0){
         guardar.push(numero**2)
      }
   }
   return guardar
}


//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let guardar = []
   for (let numero of array){
      if(numero % 2 === 0){
         guardar.push(numero)
      }
   }
   return guardar
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = [0]
   for(let i = 0; i < array.length; i++){
      if(array[i] > maior){
         maior = array[i]
      }
   }
   return maior
}

//Exercício 5
function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
   let armazenaResul = array.length;
   return armazenaResul;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
let arrayArmazena = []

const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 
const booleano4 = !booleano3 

let a = booleano1 && booleano2 && !booleano4;
arrayArmazena.push(a)
let b = (booleano1 && booleano2) || !booleano3;
arrayArmazena.push(b)
let c = (booleano2 || booleano3) && (booleano4 || booleano1) 
arrayArmazena.push(c)
let d = !(booleano2 && booleano3) || !(booleano1 && booleano3) 
arrayArmazena.push(d)
let e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
arrayArmazena.push(e)

 return arrayArmazena
}


//Exercício 7
function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   const myArray = []
   for (let i = 0; myArray.length < n ; i++) {
         if( i % 2 === 0){
            myArray.push(i)
         }
   }
   return myArray
}

// Exercício 8
function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if(a === b && a === c){
   return "Equilátero"
  } else if (a === b || a === c || b === c){
   return "Isósceles"
  } else if(a !== b || a !== c || b !== c){
   return "Escaleno"
  }
}


// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let gurdaMenorValor = []

   const objetoGuarda = {
      maiorNumero: '',
      maiorDivisivelporMenor: '',
      diferenca: '',
   }

   // 9) i
   if(num1 > num2){
      objetoGuarda.maiorNumero = num1
      gurdaMenorValor.push(num2)

   } else if (num2 > num1){
      objetoGuarda.maiorNumero = num2
      gurdaMenorValor.push(num1)
   }

   // 9) ii
   if(objetoGuarda.maiorNumero % gurdaMenorValor[0] === 0){
      objetoGuarda.maiorDivisivelporMenor = true
   } else {
      objetoGuarda.maiorDivisivelporMenor = false
   }

   // 9) iii
   const dif = Number(objetoGuarda.maiorNumero) - Number(gurdaMenorValor[0])
   objetoGuarda.diferenca = dif

   return objetoGuarda
}

// Exercício 10
function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui

    }



//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filme = {
     nome: "O Diabo Veste Prada",
     ano: 2006,
     diretor: "David Frankel",
     atores: ["Meryl Streep" , "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filme   
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
    const filme = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep" , "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
    }

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.` 
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
  let objret = {
     largura: lado1,
     altura: lado2,
     perimetro: 2 * (lado1 + lado2),
     area: lado1 * lado2,
  }
  return objret
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
   const anonPessoa = {
      ...pessoa,
      nome: String('ANÔNIMO')
   }
   return anonPessoa
}
// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]


// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
  let arrayMaiores = []
      arrayDePessoas.filter ((elemento) => {
     if(elemento.idade >= 18){
         arrayMaiores.push(elemento)
     }
  })
  return arrayMaiores
}


// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   let arrayMenores = []
      arrayDePessoas.filter ((elemento) => {
      if(elemento.idade <= 18){
          arrayMenores.push(elemento)
      }
   })
   return arrayMenores
}

// Exercício 17, letra A
const array = [1, 2, 3, 4, 5, 6]


function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
   let multPorTwo = array.map((elemento) => {
      return elemento * 2
   })
   return multPorTwo
}
 

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
  let toString = array.map((elemento) => {
       const ele = elemento * 2
       return ele + ""
   })
   return toString
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
   let guardaParidade = []
     array.map((elemento) => {
     if(elemento % 2 === 0){
        guardaParidade.push(`${elemento} é par`)
     } else if ( elemento % 2 === 1) {
      guardaParidade.push(`${elemento} é impar`)
     }
  })
  return guardaParidade

}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A


function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
   let temPermição = []
     pessoas.filter((people) => {
     if(people.altura >= 1.50 && people.idade > 14 && people.idade < 60 ){
      temPermição.push(people)
     }

   })
   return temPermição
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   let naoTemPermição = []
     pessoas.filter((people) => {
     if(people.altura >= 1.50 && people.idade > 14 && people.idade < 60 ){
        
     }else {
        naoTemPermição.push(people)
     }

   })
   return naoTemPermição
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}

