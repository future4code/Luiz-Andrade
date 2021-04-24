const pokemons = [
    { nome: "Bulbassauro", tipo: "grama", vida: 0, vidaMaxima: 1000 },
    { nome: "Charmander", tipo: "fogo", vida: 0,vidaMaxima: 2000 },
    { nome: "Squirtle", tipo: "água", vida: 0, vidaMaxima: 3000 }
]

pokemons.forEach((pokemon) => {
    pokemon.vida = pokemon.vidaMaxima
})

console.log(pokemons)