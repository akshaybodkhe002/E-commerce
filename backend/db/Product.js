const mongoose = require("mongoose");

const productSehema = new mongoose.Schema({
    name: String,
    price: String,
    catagory: String,
    userId: String,
    company : String
});

module.exports = mongoose.model("products", productSehema);