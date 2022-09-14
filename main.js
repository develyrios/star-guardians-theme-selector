const sona = document.getElementById("cardSona");
sona.onclick = () => trocarTema("Sona");

const kaisa = document.getElementById("cardKaisa");
kaisa.onclick = () => trocarTema("Kaisa");

const taliyah = document.getElementById("cardTaliyah");
taliyah.onclick = () => trocarTema("Taliyah");

const akali = document.getElementById("cardAkali");
akali.onclick = () => trocarTema("Akali");

const corEscura = document.querySelectorAll(".caixaDeTexto");
const fundo = document.getElementById("caixaBody");
const corClara = document.getElementById("body");
const cartaoAtivo = document.querySelector(".card-ativo");

function trocarTema(guardia) {
    let cartaoAtivo = document.querySelector(".card-ativo");
    let cartaoClicado = document.getElementById(`card${guardia}`);
    
    for (const elementos of corEscura) {
        elementos.classList.remove("bgSonaEscuro");
        elementos.classList.remove("bgKaisaEscuro");
        elementos.classList.remove("bgAkaliEscuro");
        elementos.classList.remove("bgTaliyahEscuro");
        elementos.classList.add(`bg${guardia}Escuro`);
    }

    fundo.classList.remove("bg-imgSona");
    fundo.classList.remove("bg-imgKaisa");
    fundo.classList.remove("bg-imgAkali");
    fundo.classList.remove("bg-imgTaliyah");
    fundo.classList.add(`bg-img${guardia}`);

    corClara.classList.remove("bgSonaClaro");
    corClara.classList.remove("bgKaisaClaro");
    corClara.classList.remove("bgAkaliClaro");
    corClara.classList.remove("bgTaliyahClaro");
    corClara.classList.add(`bg${guardia}Claro`);

    cartaoAtivo.classList.remove("card-ativo");
    cartaoAtivo.classList.add("card");

    cartaoClicado.classList.remove("card");
    cartaoClicado.classList.add("card-ativo");
}
