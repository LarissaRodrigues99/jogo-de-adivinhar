let numeroSecreto = gereUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTala(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMenssagem(){
    exibirTextoNaTala('h1', 'Jogo do número secreto');
    exibirTextoNaTala('p', `Escolha um número entre 1 e 100`);
}

exibirMenssagem();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Parabéns você descobriu o número secreto com ${tentativas} ${palavraTentativa}!🎉`;
        exibirTextoNaTala('p', menssagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTala('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTala('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
}

function gereUmNumeroAleatorio(){
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gereUmNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagem();
    document.getElementById('reiniciar').removeAttribute('desabled', true);
}