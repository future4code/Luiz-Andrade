const arrayNumeros = [13, 6, 75, 24, 73, 97, 8]

const maioresQueDez = arrayNumeros.filter((numero) => {
    if (numero > 10) {
        return true
    } 

    return false
})

const verificaPar = arrayNumeros.filter((numero) => {
    if(numero % 2 === 0) {
        return true
    }

    return false
})

console.log(maioresQueDez)
console.log(verificaPar)