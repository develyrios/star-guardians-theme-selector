const elementoAkali = document.getElementById("cardAkali");
elementoAkali.onclick = () => trocarTema("Akali");

const elementoKaisa = document.getElementById("cardKaisa");
elementoKaisa.onclick = () => trocarTema("Kaisa");

const elementoSona = document.getElementById("cardSona");
elementoSona.onclick = () => trocarTema("Sona");

const elementoTaliyah = document.getElementById("cardTaliyah");
elementoTaliyah.onclick = () => trocarTema("Taliyah");

const corEscura = document.querySelectorAll(".caixaDeTexto");
const fundo = document.getElementById("caixaBody");
const corClara = document.getElementById("body");
let guardiaAtual = "Sona";

function trocarTema(guardiaSelecionada) {
    let cartaoAtivo = document.querySelector(".card-ativo");
    let cartaoClicado = document.getElementById(`card${guardiaSelecionada}`);

    const removerTema = () => {
        for (const elementos of corEscura) {
            elementos.classList.remove(`bg${guardiaAtual}Escuro`);
        }
        fundo.classList.remove(`bg-img${guardiaAtual}`);
        corClara.classList.remove(`bg${guardiaAtual}Claro`);
        cartaoAtivo.classList.remove("card-ativo");
        cartaoClicado.classList.remove("card");
    }
    
    removerTema();

    const adicionarTema = () => {
        for (const elementos of corEscura) {
            elementos.classList.add(`bg${guardiaSelecionada}Escuro`);
        }
        fundo.classList.add(`bg-img${guardiaSelecionada}`);
        corClara.classList.add(`bg${guardiaSelecionada}Claro`);
        cartaoAtivo.classList.add("card");
        cartaoClicado.classList.add("card-ativo");
    }

    adicionarTema();
    guardiaAtual = guardiaSelecionada;
}
