const checks = document.querySelectorAll('[id=check]')
const form = document.getElementById('reg-form')
// REGISTRO.HTML & LOGIN.HTML
function mostrarSenha() {
    let x = document.getElementById("password")
    let y = document.getElementById("hide1")
    let z = document.getElementById("hide2")

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else {
        x.type = "password"
        y.style.display = "none";
        z.style.display = "block"
    }
}


function checarSenha() {
    var senha = document.getElementById('password').value;
    senha = senha.trim();
    if (senha.length >= 8 && senha.length <= 24) {
        checks[2].style.color = 'green'

    }
    else {
        checks[2].style.color = 'red'

    }
    if (senha !== senha.toUpperCase() && senha !== senha.toLowerCase()) {
        checks[3].style.color = 'green'

    }
    else {
        checks[3].style.color = 'red'

    }
    if (/[^a-zA-Z]/.test(senha)) {
        checks[4].style.color = 'green'

    }
    else {
        checks[4].style.color = 'red'

    }
}
function checarNome() {
    var nome = document.getElementById('name').value;
    nome = nome.trim();
    nome = nome.replace(/\s/g, '')
    if (/[^a-zA-Z]/.test(nome) == false) {
        checks[0].style.color = 'green'
    }
    else {
        checks[0].style.color = 'red'
    }
    if (nome.length >= 5 && nome.length <= 15) {
        checks[1].style.color = 'green'
    }
    else if (nome.length == 0) {
        checks[0].style.color = 'red'
    }
    else {
        checks[1].style.color = 'red'
    }
}
function checarLogin(){
    if(confirm('Confirmar login')){
        alert('Parabéns, sua conta foi criada com sucesso!')
    }
    else{
        alert('Preencher novamente.')
    }
}
// REGISTRO.HTML -
function selecionar() {
    let instagram = document.getElementById('insta')
    let facebook = document.getElementById('face')
    let twitter = document.getElementById('twitter')
    if (instagram.classList.toggle('active')) {
        instagram.style.color = '#FFA800'
        twitter.style.color = 'black'
        facebook.style.color = 'black'
    }
    else if (twitter.classList.toggle('active')) {
        twitter.style.color = '#FFA800'
        instagram.style.color = 'black'
        facebook.style.color = 'black'
    }
    else if (facebook.classList.toggle('active')) {
        facebook.style.color = '#FFA800'
        instagram.style.color = 'black'
        twitter.style.color = 'black'
    }
    else {
        facebook.style.color = 'black'
        instagram.style.color = 'black'
        twitter.style.color = 'black'
    }
}

