function criaTarefa(){
    const inputTexto = document.getElementById("tarefa")
    const texto = inputTexto.value

    const e = document.getElementById("dias-semana")
    const userSelected = e.value

     if(inputTexto.value !== " "){
        const selectedDiv = document.getElementById(userSelected)

        selectedDiv.innerHTML += `<li>${texto}</li>`
        inputTexto.value = " "
     }
}
