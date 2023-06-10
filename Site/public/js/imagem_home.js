var lista_imagens = ["<img style='height: 620px; width: 94%;margin-left: 43px;'src=assets/imagens_site/imagem_home.jpg>",
        "<img style='height: 620px; width: 94%;margin-left: 43px;'src=assets/imagens_site/imagem_home2.jpg>",
        "<img style='height: 620px; width: 94%; margin-left: 43px;' src=assets/imagens_site/imagem_home3.jpg>",
        "<img style='height: 620px; width: 94%; margin-left: 43px;' src=assets/imagens_site/imagem_home4.jpg>",
        "<img style='height: 620px; width: 94%; margin-left: 43px;' src=assets/imagens_site/imagem_home5.jpg>",
        "<img style='height: 620px; width: 94%;margin-left: 43px;' src=assets/imagens_site/imagem_home6.jpg>"
    ]

    function imagens_home() {
        var numero_aleatorio = parseInt(Math.random() * lista_imagens.length);
        imagem_home.innerHTML += `${lista_imagens[numero_aleatorio]}`
    }