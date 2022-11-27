const dados = document.querySelectorAll('[id=dados]')
const email = document.getElementById('username')
const username = document.getElementById('name')
const password = document.getElementById('password')
const social_media = document.getElementById('social-media')
const lista = [username, social_media, email, password]
function alterarPerfil() {
    if (confirm('Confirmar alteração dos dados pessoais')) {
        for (var p = 0; dados.length; p++) {
            if (lista[p].value!=null) {
                dados[p].innerHTML = lista.value
            }
            else {
                dados[p].innerHTML = dados.value
            }
        }


    }
}