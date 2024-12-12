const Produit = require("../models/ProduitModel");

exports.createProduit = async (req, res) => {
  try {
    const newProduit = await Produit.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Produit Added !!!",
      data: { newProduit },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getProduitById = async (req, res) => {
  try {
    const produit = await Produit.findById(req.params.id);  // Use lowercase "produit" here
    if (!produit) {
      return res.status(404).json({
        status: "fail",
        message: "Produit not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Produit Fetched !!!",
      data: { produit },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllProduit = async (req, res) => {
  try {
    
    const produits = await Produit.find();  
    res.status(200).json({
      status: "success",
      results: produits.length,
      message: "Produits Fetched !!!",
      data: { produits },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!produit) {
      return res.status(404).json({
        status: "fail",
        message: "Produit not found to update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Update success!!!",
      data: { produit },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteProduit = async (req, res) => {
  try {
    const produit = await Produit.findByIdAndDelete(req.params.id);  // Use findByIdAndDelete
    if (!produit) {
      return res.status(404).json({
        status: "fail",
        message: "Produit not found to delete",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Produit deleted!!!",
      data: { produit },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
