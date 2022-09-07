const botao = document.querySelector('#cardSona')

function trocaTema () {
    const caixa = document.querySelector('#caixa');
    console.log(caixa.classList);
    caixa.classList.add('bg-red');
    caixa.classList.remove('bg-aqua');
}

botao.onclick = function () {
    trocaTema();
}