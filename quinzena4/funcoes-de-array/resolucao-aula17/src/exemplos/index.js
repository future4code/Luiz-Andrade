
// // função nomeada
// function imprimirTexto(texto) {
//     console.log(texto)
// } // string

// // função não-nomeada / função anônima / arrow function
// const verificaPar = (num, imprimir) => {
//     if (num % 2 === 0) {
//         const resultado = num/2
//         imprimir(resultado)
//     }
// }

// // função não-nomeada simples
// const verificaZero = function(num, imprimir) {
//     if (num === 0) {
//         const resultado = true
//         imprimir(resultado)
//     }
// }

// verificaPar(4, function(texto) {
//     console.log(texto)
// })

// verficaZero(5, (texto) => {
//     console.log(texto)
// })

// --------------------------------

// const verificaPar = (num) => {
//     if (num !== 1) {
//         if (num % 2 === 0) {
//             const resultado = num/2
//             console.log(resultado)
//         } else {
//             console.log("Não é par")
//         }
//     }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// for (numero of array) {
//     verificaPar(numero)
// }

// array.forEach(verificaPar)

// array.forEach((num) => {
//     if (num !== 1) {
//         if (num % 2 === 0) {
//             const resultado = num/2
//             console.log(resultado)
//         } else {
//             console.log("Não é par")
//         }
//     }
// })


// --------------------------------------

// const verificaPar = (num) => {
//     if (num % 2 === 0) {
//         const resultado = num/2
//         return resultado
//     } 

//     return "Não é par"
// }

// const multiplica = (num) => {
//     return num*2
// }

const verificaPar = (num) => {
    if (num % 2 === 0) {
        return true
    } 
    return false
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const arrayDeRespostas = array.map(verificaPar)

console.log(arrayDeRespostas)

// --------------------------------------

// const verificaPar = (num) => {
//     if (num % 2 === 0) {
//         return true
//     } 
//     return false
// }

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const numerosPares = numeros.filter(verificaPar)

console.log(numerosPares)
