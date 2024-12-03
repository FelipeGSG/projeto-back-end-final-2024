function verificarDados(){
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value
    let usuarioEncontrado = false

    if(email == "admin@" && senha == "senhaAdmin"){
        window.location.href = "admin.html"

    }else{
        fetch('https://raw.githubusercontent.com/FelipeGSG/projeto-back-end-final-2024/refs/heads/main/dbCadastro.json').then(resposta => {
            if(!resposta.ok){
                alert("1")
                throw new Error(servidor);
            }
            return resposta.json()
        }).then(dados =>{
            dados.cadastros.forEach(user => {
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
    // http://localhost:3000/cadastros
// 

}