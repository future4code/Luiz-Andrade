const verificaImpar = (numero, imprimir) => {
    if (numero % 2 === 1) {
        imprimir("Sim, é ímpar!")
    }
}

function imprimeMensagem(texto) {
    console.log(texto)
}

verificaImpar(1, imprimeMensagem)
verificaImpar(2, imprimeMensagem)
verificaImpar(3, imprimeMensagem)
verificaImpar(4, imprimeMensagem)