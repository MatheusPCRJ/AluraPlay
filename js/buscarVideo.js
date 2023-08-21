import { conectaApi } from "./conectaApi.js";
import controiCard from "./mostraVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisar]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elementos => lista.appendChild(
        controiCard(elementos.titulo, elementos.descricao, elementos.url, elementos.imagem)
    ));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class='mensagem__titulo'> Não encontramos nada com o termo "${dadosDePesquisa}" </h2>`
    }
}

const botaoDePesquisar = document.querySelector('[data-botao-pesquisar]');
botaoDePesquisar.addEventListener("click", evento => buscarVideo(evento));