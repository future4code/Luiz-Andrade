// 1. O codigo é um loop e vai repetir até o indice ser
// menor que 5 e vai imprimir na tela seu valor



// 2.
/* A) Acredito que será impresso os numeros da array
   B) Acredito que não*/



// 3.
let arrayOriginal = [10, 20, 30, 40, 29, 1, 3 , 5]  

// A)
/* for (num of arrayOriginal){
    console.log(num)
}


// B)
for (num1 of arrayOriginal){
    console.log(num1 / 10)
} 

// C) 
let novaArray = [];

for (num of arrayOriginal){
    if (num % 2 === 0){
        novaArray.push(num)        
    }
}
console.log(novaArray) 


// D)
 let arrayNew = []

for ( i = 0; i < arrayOriginal.length; i++){
arrayNew.push("O elemento do índex "+ i + " é: " + arrayOriginal[i])
}
console.log(arrayNew)  



// E)
let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0];

for (let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] > maiorNumero){
        maiorNumero = arrayOriginal[i]
    }
}
for (let i = 0; i < arrayOriginal.length; i++) {
     if(arrayOriginal[i] < menorNumero){
         menorNumero = arrayOriginal[i];
     }
}
console.log("O maior número é ", maiorNumero + " e o menor é: " + menorNumero) */
