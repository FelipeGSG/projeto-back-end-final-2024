function enviarDados() {
    var nome = document.getElementById('inputNome').value
    var sobrenome = document.getElementById('inputSobrenome').value
    var rg = document.getElementById('inputRG').value
    var email = document.getElementById('inputEmail').value
    var senha = document.getElementById('inputSenha').value

    if(nome == '' || sobrenome == '' || rg == '' || email == '' || senha == ''){
        return
    }

    fetch('http://localhost:3000/cadastros', {
        //Método CRUD
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado pro Json
        },
        body: JSON.stringify({
            //Dados que serão enviados e convertidos
            
            nome: nome,
            sobrenome: sobrenome,
            rg: rg,
            email: email,
            senha: senha

        }) 
    })
    .then(resposta => resposta.JSON).then(window.location.href = 'index.html') //Converte a resposta para JSON
    alert("Dados enviados com sucesso!")
}

function inputValido(element){
    if(element.value == ''){
        element.style.border = '1px solid red'
    } else{
        element.style.border = '1px solid lime'
    }
}

document.getElementById('inputNome').addEventListener('focusout', () => {
    inputValido(document.getElementById('inputNome'))
})
document.getElementById('inputSobrenome').addEventListener('focusout', () => {
    inputValido(document.getElementById('inputSobrenome'))
})
document.getElementById('inputRG').addEventListener('focusout', () => {
    inputValido(document.getElementById('inputRG'))
})
document.getElementById('inputEmail').addEventListener('focusout', () => {
    inputValido(document.getElementById('inputEmail'))
})
document.getElementById('inputSenha').addEventListener('focusout', () => {
    inputValido(document.getElementById('inputSenha'))
})
