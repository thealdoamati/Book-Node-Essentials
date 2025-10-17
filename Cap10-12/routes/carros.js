let express = require("express");
const router = express.Router();
const CarroDb = require("../model/CarroDB");

// GET em
router.get("/", function (req, res) {
  CarroDb.getCarros(function (carros) {
    res.json(carros);
  });
});

// GET em carros/id (Tem que vir antes do tipo, pois o id é number)
router.get("/:id", function (req, res) {
  let id = req.params.id;
  CarroDb.getCarrosById(id, function (carros) {
    res.json(carros);
  });
});

// DELETE em /id
router.delete("/:id", function (req, res) {
  let id = req.params.id;
  console.log("deletar carro " + id);
  CarroDb.delete(id, function (affectedRows) {
    res.json({ msg: "Carro deletado com sucesso." });
  });
});

// GET em carros/esportivos
router.get("/:tipo", function (req, res) {
  let tipo = req.params.tipo;
  CarroDb.getCarrosByTipo(tipo, function (carros) {
    res.json(carros);
  });
});

router.post("/", function (req, res) {
  let carro = req.body;
  CarroDb.save(carro, function (carro) {
    res.json(carro);
  });
});

router.put("/", function (req, res) {
  let carro = req.body;
  CarroDb.update(carro, function (carro) {
    // res.json(carro);
    res.json({ msg: "Carro atualizado com sucesso." });
  });
});

module.exports = router;
