const mongoose = require("mongoose");

const userSechma = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model("user", userSechma);