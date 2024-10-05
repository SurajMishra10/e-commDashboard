const express = require("express");
const cors = require("cors");
require("./db/config");
const user = require("./db/user");
const Product= require("./db/product");
const product = require("./db/product");
const app = express();

app.use(express.json());
app.use(cors());

//Api-1
app.post("/register", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

//Api-2
app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let User = await user.findOne(req.body).select("-password");
    if (User) {
      res.send(User);
    } else {
      res.send({ result: "No user found" });
    }
  } else {
    res.send({ result: "No user found" });
  }
});

//Api-3
app.post("/add-product", async(req,res)=>{
let product= new Product(req.body);
let result = await product.save();
res.send(result)
});

//Api-4
app.get("/products", async(req, res)=>{
let products = await Product.find();
if(product.length>0){
  res.send(products)
}else{
  res.send({result:"No Product found"})
}
});

//Api-5
app.delete("/product/:id",async(req, res)=>{
const result= await Product.deleteOne({_id:req.params.id})
res.send(result);
});

app.get("/product/:id",async(req, res)=>{
let result = await Product.findOne({_id:req.params.id});
if(result){
  res.send(result)
}else{
  res.send({result:"No Record Found."})
}
});


app.put("/product/:id",async(req,res)=>{
let result = await product.updateOne(
  {_id: req.params.id},
  {
    $set : req.body
  }
)
res.send(result)
});

app.get("/search/:key", async(req, res)=>{
  let result = await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {company:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      {price:{$regex:req.params.key}}
    ]
  });
  res.send(result)
})




app.listen(5000);
