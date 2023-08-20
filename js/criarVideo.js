import { conectaApi } from './conectaApi.js';

const furmulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaApi.criaVideos(titulo, descricao, url, imagem);

    window.location.href = 'envio-concluido.html';
}

furmulario.addEventListener("submit", evento => criarVideo(evento))