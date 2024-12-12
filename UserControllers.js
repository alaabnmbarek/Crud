const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      message: "User Added !!!",
      data: { newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // Use lowercase "produit" here
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User Fetched !!!",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    
    const users = await User.find();  
    res.status(200).json({
      status: "success",
      results: users.length,
      message: "Users Fetched !!!",
      data: { users },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user not found to update",
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

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);  // Use findByIdAndDelete
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "user not found to delete",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User deleted!!!",
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
