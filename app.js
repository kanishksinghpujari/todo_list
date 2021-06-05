const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/function.js");

const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolistDB', {useNewUrlParser: true, useUnifiedTopology: true});

const itemsSchema = new mongoose.Schema({
  name: String
});
const Item = mongoose.model('Item', itemsSchema);

app.get("/",function(req,res){
//
const day=date.getDay();
Item.find({},function(err,foundItems){
  res .render("list",{
    day:day,
    items:foundItems

  });
});

});

app.post("/",function(req,res){
  const x={
    name:req.body.next};
  Item.insertMany([x], function(error) {
    if(error)
    console.log("gadbad");
    else
    res.redirect("/");
  });


});

app.post("/delete",function(req,res){
  const item=req.body.item;
  Item.findByIdAndRemove(item, function(error){
    if(error)
    console.log(error in deleting);
    else
    res.redirect("/");
  });
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
