function verificarDados(){
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value
    let usuarioEncontrado = false

    if(email == "admin@" && senha == "senhaAdmin"){
        window.location.href = "admin.html"

    }

        fetch('https://raw.githubusercontent.com/FelipeGSG/projeto-back-end-final-2024/refs/heads/main/dbCadastro.json').then(resposta => {
            if(!resposta.ok){
                throw new Error();
            }
            return resposta.json()
        }).then(dados =>{
            dados.forEach(user => {
                if(user.email == email && user.senha == senha){
                    alert("Login feito com sucesso!")
                    window.location.href = "home.html"
                    usuarioEncontrado = true
                    return
                }
            });
            if(usuarioEncontrado == false){
                alert("Usuário não encontrado")
            } 
        }).catch(erro =>{
            alert("Houve uma falha ao conectar com o servidor!")
            console.log("ERRO:", erro)
        }) 
}
