const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const ProduitRoutes = require("./routes/ProduitRoutes");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());
app.use("/Produit", ProduitRoutes);
app.use("/user", userRoutes);




//connection BD
const DB = process.env.DATABASE.replace(
  "alaa665",
  process.env.DATABASE_PASSWORD
);
  console.log(DB)
  mongoose
    .connect(DB)
    .then(() => {
      console.log("DB Connection secured!!!");
    })
    .catch((err) => {
      console.log(err);
    });


//PORT
const port =9003;
//Listen
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
