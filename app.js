function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
    }
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
}

let resultado = document.getElementById('resultado');
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
alterarStatusBtn()
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBtn() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.replace('container__botao-desabilitado', 'container__botao');
        document.getElementById("btn-reiniciar").disabled = false;
        document.getElementById("btn-sortear").disabled = true;
    } else {
        botao.classList.replace('container__botao', 'container__botao-desabilitado');
        document.getElementById("btn-reiniciar").disabled = true;
        document.getElementById("btn-sortear").disabled = false;
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBtn();
}