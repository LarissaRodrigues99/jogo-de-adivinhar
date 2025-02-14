let numeroSecreto = gereUmNumeroAleatorio();

function exibirTextoNaTala(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTala('h1', 'Jogo do número secreto');
exibirTextoNaTala('p', 'Escolha um número entre 1 e 100');

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

function gereUmNumeroAleatorio(){
    return parseInt(Math.random()* 100 + 1);
}