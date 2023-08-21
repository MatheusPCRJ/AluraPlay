async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const GetConexao = await conexao.json();
    
    return GetConexao
}

async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível cadastrar o vídeo");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
    
}

async function buscaVideo(buscadorDeVideo) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${buscadorDeVideo}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideos,
    buscaVideo
}