const express = require("express");
const router = express.Router();
const {
    createUser ,
    getUserById,
    updateUser,
    deleteUser,
    getAllUser,
  } = require("../controllers/UserController");
 
  router.route("/").post(createUser)
  router.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);
  router.route("/").get(getAllUser);

  module.exports = router;