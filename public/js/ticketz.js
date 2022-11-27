// HEADER DE TODAS AS INTERFACES
const subheader = document.getElementById('header2-container')
const name_page_event = document.getElementById('page-title-event')
const lista_opt_event = document.querySelectorAll('#header2-container>ul>li>a')
const lista_evento = ['Shows', 'Festivais', 'Universitário', 'Esportivo', 'Teatro & Musical', 'E-sports', 'Sertanejo & Pagode', 'Empresarial']
const lista_user = ['Criar Conta', 'Login', null, null, null, null, null, null]
const lista_user_login = ['Perfil', 'Criar Anúncio', 'Meus Anúncios', 'Sair da Conta', null, null, null, null]
const lista_link_login = ['/login/perfil1.html', '/login/criarAnuncio.html', '/login/meuAnuncio.html', '/html/homepage2.html', null, null, null, null]
const lista_link_evento = ['/html/eventos.html', '/html/eventos.html', '/html/eventos.html', '/html/eventos.html', '/html/eventos.html', '/html/eventos.html', '/html/eventos.html', '/html/eventos.html']
const lista_link_evento_login = ['/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html', '/login/eventos1.html']
const lista_link = ['/html/registro.html', '/html/login.html', null, null, null, null, null, null, null]

function userEffect() {
    subheader.style.display = 'flex';
    var n = 0;
    while (n <= 7) {
        lista_opt_event[n].innerHTML = lista_user[n]
        lista_opt_event[n].href = lista_link[n];
        n++
    };
};
function loginEffect() {
    subheader.style.display = 'flex';
    var a = 0;
    while (a <= 7) {
        lista_opt_event[a].innerHTML = lista_user_login[a]
        lista_opt_event[a].href = lista_link_login[a];
        a++
    };
};
function eventoEffect() {
    subheader.style.display = 'flex';
    var c = 0;
    while (c <= 7) {
        lista_opt_event[c].innerHTML = lista_evento[c]
        lista_opt_event[c].href = lista_link_evento[c];
        c++
    };
}
function eventoEffect1() {
    subheader.style.display = 'flex';
    var b = 0;
    while (b <= 7) {
        lista_opt_event[b].innerHTML = lista_evento[b]
        lista_opt_event[b].href = lista_link_evento_login[b];
        b++
    };
}
// ESCONDER MENU OPÇÃO
function noneEffect() {
    subheader.style.display = 'none';
};





