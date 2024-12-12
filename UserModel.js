const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // name:String
  name: {
    type: String,
    // required:true
    required: [true, "A user name is required !!!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "A user email is required !!!"],
    unique: true,
    validate: [validator.isEmail, "Email is not valid !!"],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "A user password is required !!!"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "A user password is required !!!"],
    minlength: 8,
    valdiate: {
      validator: function (c) {
        return c === this.password;
      },
      message: "passowrd and confirmPassword does not match !!!",
    },
  },
  age: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;