const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A Product name is required !!!"],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Product price is required !!!"],
    },
   
});

const Produit = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;
