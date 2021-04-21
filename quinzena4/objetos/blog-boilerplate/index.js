function pegaValores(){
    const inforUserBlog = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
    }

    var arrayDeObjetos = []
    arrayDeObjetos.push(inforUserBlog)
        
         document.getElementById("titulo-post").value = '',
         document.getElementById("autor-post").value = '',
         document.getElementById("conteudo-post").value = '',
    
    postUser(inforUserBlog)
    
}

function postUser(userInfor){
  const userPost = document.getElementById("Post-User")

  userPost.innerHTML += `<h2>${userInfor.autor}</h2>
  <p>${userInfor.autor}</p>  <p>${userInfor.conteudo}</p>`
}
