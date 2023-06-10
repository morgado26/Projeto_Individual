var database = require("../database/config");

function buscarUltimasMedidas(xpto) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(musica_album.musica) as voto, musica_album.musica as musica
        FROM musica_album group by musica_album.musica order by voto desc limit 5;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        if(xpto == 1){
            instrucaoSql = `SELECT COUNT(musica_album.musica) as voto, musica_album.musica as musica
            FROM musica_album group by musica_album.musica order by voto desc limit 5;`;
        } 
        else if(xpto == 2){
            instrucaoSql = `SELECT COUNT(musica_album.album) as voto, musica_album.album as album
            FROM musica_album group by musica_album.album order by voto desc limit 5;`
        }

       }
        else {
            console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
            return
        }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function albuns(idAlbum) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(musica_album.album) as voto, musica_album.album as album
        FROM musica_album group by musica_album.album order by voto desc limit 5;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(musica_album.album) as voto, musica_album.album as album
        FROM musica_album group by musica_album.album order by voto desc limit 5;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    albuns,
}
