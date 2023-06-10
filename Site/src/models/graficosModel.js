var database = require("../database/config")

function visualizar() {
    var instrucao = `
    SELECT COUNT(musica_album.musica) as voto, musica_album.musica as musica
    FROM musica_album group by musica_album.musica order by voto desc limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    visualizar
};