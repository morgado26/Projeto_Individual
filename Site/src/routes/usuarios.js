var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/preferida", function (req, res) {
    usuarioController.preferida(req, res);
})

router.post("/Quiz1", function (req, res) {
    usuarioController.Quiz1(req, res);
})

router.get("/listarPontos", function (req, res) {
    usuarioController.listarPontos(req, res);
});

router.post("/Quiz2", function (req, res) {
    usuarioController.Quiz2(req, res);
})

router.get("/listarPontos2", function (req, res) {
    usuarioController.listarPontos2(req, res);
});

router.post("/Quiz3", function (req, res) {
    usuarioController.Quiz3(req, res);
})

router.get("/listarPontos3", function (req, res) {
    usuarioController.listarPontos3(req, res);
});

router.post("/Quiz4", function (req, res) {
    usuarioController.Quiz4(req, res);
})

router.get("/listarPontos4", function (req, res) {
    usuarioController.listarPontos4(req, res);
});

module.exports = router;