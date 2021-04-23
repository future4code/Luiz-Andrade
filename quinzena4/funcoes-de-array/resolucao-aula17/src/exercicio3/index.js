const arrayNumeros = [13, 6, 75, 24, 73, 97, 8]

const arrayStrings = arrayNumeros.map(function (numero, indice) {
    return `O elemento ${indice} é ${numero}`
})

console.log(arrayStrings)