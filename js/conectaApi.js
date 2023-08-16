async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const GetConexao = await conexao.json();
    
    return GetConexao
}

export const conectaApi = {
    listaVideos
}