// 1- 
// a) será impresso primeiramente o numero 10 e na outra linha o numero 50
// b) teria mesmo assim dado o resultado 10 e 50, mas como o console 
// fazia com o que esse resultado aparecesse no console, retirando ele
// já não iria aparecer mais no console.

// 2-
// a) acredito que sairia no console apenas o nome:  "Darvas" e "Caio" embaixo do outro 
// b) nesse caso acredito que sairia no console os nomes: "Amanda", "Caio" embaixo do outro

// 3-
/* é uma função que declara uma
array vazia chamada "arrayFinal"

abaixo o x terá agora os elementos da "array"
e se o resto da divisão do elemento x for igual a zero,
a "arrayFinal" irá receber um novo elemento que será multiplicado por ele mesmo
e guardado na "arrayFinal". E caso o resto da divisão não seja igual a zero
não será armazenado dentro da "arrayFinal" 

Um nome, talvez poderia ser "geradorDeNumerosPares" pois só será armazenado dentro da 
"arrayFinal" numeros que o resto da divisão será 0.
*/


/* 4- 
function apresentacao(nome, idade, cidade, boolean){
    
    let name = String(nome)
    let age = Number(idade)
    let city = String(cidade)
    let trueOrFalse = Boolean(boolean)

    if(boolean === true) {
        trueOrFalse = "sou estudante"
    } else {
        trueOrFalse = "não sou estudante"
    }

    console.log("Eu sou " + name + "," + " tenho " + age + " anos, " + "moro em " + city + " e " + trueOrFalse +".")
  
}

apresentacao("Luis", 21, "roraima", true) */

//5- a)
/* let Number1 = 2
let number2 = 4
function numeros(n1, n2){
   return n1 + n2
}
console.log(numeros(Number1, number2)) */

/* b)
function maiorOuMenor(n1, n2){
  if(n1 > n2){
      return true
  } else {
      return false
  }
  
}
console.log(maiorOuMenor(20, 10))
*/

/* C)
let palavra = "abobora"
function mensagem(){
     for (let i = 0; i < 10; i++){
         console.log(palavra)
     }
  }

mensagem() */

//6
const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
/*
function determinanteDeElementos(array){
    for (let i = 0; i < array.length; i++){
        console.log(array.length)
    }
}
determinanteDeElementos(array1) */

 function parOuImpar(num1){
    if(num1 % 2 === 0){
        return true
    } else{
        return false
    }
}

/*
 let contador = 0
function numerosPares(pares){
    for (let i = 0; i < pares.length; i++){
        if(pares[i] % 2 === 0){
        contador++
        }
    }
    console.log("são " + contador + " números pares")
}
numerosPares(array1)    */

const numeroPar = parOuImpar()
let contador = 0
let arrayTeste = [1, 2, 3, 4]
function numerosPares(pares){
    for (let i = 0; i < pares.length; i++){
        if(numeroPar){
            contador++
        }
    }
    
    console.log("são " + contador + " números pares")
}
numerosPares(arrayTeste) 
