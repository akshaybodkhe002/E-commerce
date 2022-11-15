const express = require("express");
const cors = require("cors");
require('./db/config');
const app = express();

app.use(express.json());
app.use(cors());
const User = require('./db/Users');
const Product = require('./db/Product');
var bodyParser = require('body-parser');
const { urlencoded } = require("body-parser");
app.use(bodyParser.urlencoded({limit:"25mb", extended:true}));
app.use(bodyParser.json({limit:"25mb", extended:true}));

app.post("/register",async (req,res)=>{
    // console.log(req);
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
    
})

app.post("/login", async (req,res)=>{
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user);
        } else {
            res.send("No user found");
        }
    }else{
        res.send({"reult": " No result found"});
    }  
})

app.post("/add-product", async (req, res)=>{
    console.log(req.body);
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})


app.listen(3000)