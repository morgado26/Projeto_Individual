var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/visualizar", function (req, res) {
    // função a ser chamada quando acessar /graficos/visualizar
    graficosController.visualizar(req, res);
});

module.exports = router;