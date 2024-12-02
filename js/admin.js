function buscarUsuario(){
    var rg = document.getElementById("inputRG").value 

    fetch(`https://raw.githubusercontent.com/FelipeGSG/projeto-back-end-final-2024/refs/heads/main/dbCadastro.json`, {
        method: 'GET'       
    }).then(response => response.json())
    .then(dados =>{
        var pessoaEncontrada = dados.find(pessoa => pessoa.rg == rg )

        if(pessoaEncontrada){
            document.getElementById("inputNome").value = pessoaEncontrada.nome
            document.getElementById("inputNome").disabled = false
            document.getElementById("inputSobrenome").value = pessoaEncontrada.sobrenome
            document.getElementById("inputSobrenome").disabled = false
            document.getElementById("inputRG").value = pessoaEncontrada.rg
            document.getElementById("inputEmail").value = pessoaEncontrada.email
            document.getElementById("inputEmail").disabled = false
            document.getElementById("inputSenha").value = pessoaEncontrada.senha
            document.getElementById("inputSenha").disabled = false
            
            document.getElementById('botaoAtualizarDados').disabled = false
            document.getElementById("statusBusca").innerHTML = "Usuário encontrado"
            document.getElementById("statusBusca").style.color = "lime"
        } else{
            document.getElementById("inputNome").disabled = true
            document.getElementById("inputSobrenome").disabled = true
            document.getElementById("inputEmail").disabled = true
            document.getElementById("inputSenha").disabled = true
            document.getElementById('botaoAtualizarDados').disabled = true
            document.getElementById("statusBusca").innerHTML = "Usuário não encontrado..."
            document.getElementById("statusBusca").style.color = "#fc9c9c"
            alert("não tem esse cadastro não meu lindo")
        }
    })
}

function mudarUsuario(){
    var rg = document.getElementById('inputRG').value
    var nome = document.getElementById("inputNome").value
    var sobrenome = document.getElementById("inputSobrenome").value
    var email = document.getElementById("inputEmail").value
    var senha  = document.getElementById("inputSenha").value
    var id;
    fetch(`https://raw.githubusercontent.com/FelipeGSG/projeto-back-end-final-2024/refs/heads/main/dbCadastro.json`).then(response => response.json()).then(dados =>{
        var pessoaEncontrada = dados.find(pessoa => pessoa.rg == rg )

        if(pessoaEncontrada){
            console.log(pessoaEncontrada.id)
            id = pessoaEncontrada.id
        }
        fetch(`http://localhost:3000/cadastros/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({nome: nome, sobrenome: sobrenome, rg: rg, email: email, senha: senha})
        })
    })
}

function tabelaCadastros(){
    document.getElementById("tabelaUsuarios").innerHTML = ""
    fetch(`https://raw.githubusercontent.com/FelipeGSG/projeto-back-end-final-2024/refs/heads/main/dbCadastro.json`).then(response => response.json()).then(dados =>{
        dados.forEach(e => {
            const tdRG  = document.createElement("td")
                tdRG.innerHTML = e.rg
            const tdNome = document.createElement("td")
                tdNome.innerHTML = e.nome
            const tdSobrenome = document.createElement("td")
                tdSobrenome.innerHTML = e.sobrenome
            const tdEmail = document.createElement("td")
                tdEmail.innerHTML = e.email
            const tdSenha = document.createElement("td")
                tdSenha.innerHTML = e.senha

            const tr = document.createElement("tr")
                tr.appendChild(tdRG)
                tr.appendChild(tdNome)
                tr.appendChild(tdSobrenome)
                tr.appendChild(tdEmail)
                tr.appendChild(tdSenha)


            document.getElementById("tabelaUsuarios").appendChild(tr)
        });
    })
}

tabelaCadastros()
