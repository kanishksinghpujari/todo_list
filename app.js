const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/function.js");
var items=[];
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",function(req,res){
//
const day=date.getDay();
  res .render("list",{
    day:day,
    items:items

  });
});

app.post("/",function(req,res){
  const x=req.body.next;
  items.push(x);
res.redirect("/");
});

app.listen(3000,function(){
  console.log("server started on port 3000");
});
