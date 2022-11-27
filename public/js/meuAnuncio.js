const lista_botao_atualizar = document.querySelectorAll(['[id=submit-atualizar]'])
const lista_botao_excluir = document.querySelectorAll(['[id=submit-excluir]'])
const categoria = document.querySelectorAll(['[id=categoria-value]'])
const nomeEvento = document.querySelectorAll(['[id=nomeEvento-value]'])
const anuncio = document.querySelectorAll(['[id=anuncio]'])


function atualizar0() {

    var valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
    var categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
    let categoria_valor_antigo = categoria[0].value
    let evento_valor_antigo = nomeEvento[0].value

    while (categoria_valor != null && valor != null) {
        if (confirm(`Confirmar alterações`)) {
            categoria[0].innerHTML = valor
            nomeEvento[0].innerHTML= categoria_valor 
            break;
        }
        else {
            if (confirm(`Deseja sair?`)) {
                categoria_valor_antigo = categoria_valor_antigo
                evento_valor_antigo = evento_valor_antigo 
                break;
            }
            else{
                valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
                categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
            }
   
        }
    }


}
function atualizar1() {
    
var valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
var categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
    let categoria_valor_antigo = categoria[1].value
    let evento_valor_antigo = nomeEvento[1].value
   
    while (categoria_valor != null && valor != null) {
        if (confirm(`Confirmar alterações`)) {
            categoria[1].innerHTML = valor
            nomeEvento[1].innerHTML= categoria_valor 
            break;
        }
        else {
            if (confirm(`Deseja sair?`)) {
                categoria_valor_antigo = categoria_valor_antigo
                evento_valor_antigo = evento_valor_antigo 
                break;
            }
            else{
                valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
                categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
            }
   
        }
    }

}
function atualizar2() {

    var valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
    var categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
    let categoria_valor_antigo = categoria[2].value
    let evento_valor_antigo = nomeEvento[2].value
  
    while (categoria_valor != null && valor != null) {
        if (confirm(`Confirmar alterações`)) {
            categoria[2].innerHTML = valor
            nomeEvento[2].innerHTML= categoria_valor 
            break;
        }
        else {
            if (confirm(`Deseja sair?`)) {
                categoria_valor_antigo = categoria_valor_antigo
                evento_valor_antigo = evento_valor_antigo 
                break;
            }
            else{
                valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
                categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
            }
   
        }
    }

}
function atualizar3() {
    
var valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
var categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
    let categoria_valor_antigo = categoria[3].value
    let evento_valor_antigo = nomeEvento[3].value
   
    while (categoria_valor != null && valor != null) {
        if (confirm(`Confirmar alterações`)) {
            categoria[3].innerHTML = valor
            nomeEvento[3].innerHTML= categoria_valor 
            break;
        }
        else {
            if (confirm(`Deseja sair?`)) {
                categoria_valor_antigo = categoria_valor_antigo
                evento_valor_antigo = evento_valor_antigo 
                break;
            }
            else{
                valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
                categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
            }
   
        }
    }

}
function atualizar4() {

    var valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
    var categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
    let categoria_valor_antigo = categoria[4].value
    let evento_valor_antigo = nomeEvento[4].value
   
    while (categoria_valor != null && valor != null) {
        if (confirm(`Confirmar alterações`)) {
            categoria[4].innerHTML = valor
            nomeEvento[4].innerHTML= categoria_valor 
            break;
        }
        else {
            if (confirm(`Deseja sair?`)) {
                categoria_valor_antigo = categoria_valor_antigo
                evento_valor_antigo = evento_valor_antigo 
                break;
            }
            else{
                valor = prompt('Inserir novo nome do evento, por favor inserir evento existente')
                categoria_valor = prompt('Inserir nova categoria do evento, por favor inserir categoria existente')
            }
   
        }
    }
}
function excluir0() {
    if(confirm('Deseja excluir o anúncio?')){
        anuncio[0].style.display = 'none'
    }
    else{
        anuncio[0].style.display = 'flex'
    }
  
}

function excluir1() {
    if(confirm('Deseja excluir o anúncio?')){
        anuncio[1].style.display = 'none'
    }
    else{
        anuncio[1].style.display = 'none'
}
}
function excluir2() {
    if(confirm('Deseja excluir o anúncio?')){
        anuncio[2].style.display = 'none'
    }
    else{
        anuncio[2].style.display = 'none'
}
}
function excluir3() {
    if(confirm('Deseja excluir o anúncio?')){
        anuncio[3].style.display = 'none'
    }
    else{
        anuncio[3].style.display = 'none'
}
}
function excluir4() {
    if(confirm('Deseja excluir o anúncio?')){
        anuncio[4].style.display = 'none'
    }
    else{
        anuncio[4].style.display = 'none'
    }
}