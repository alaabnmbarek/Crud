const express = require("express");
const router = express.Router();
const {
    createProduit ,
    getProduitById,
    updateProduit,
    deleteProduit,
    getAllProduit,
  } = require("../controllers/ProduitController");
 
  router.route("/").post(createProduit)
  router.route("/:id").get(getProduitById).patch(updateProduit).delete(deleteProduit);
  router.route("/").get(getAllProduit);

  module.exports = router;