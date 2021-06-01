const express=require("express");
const bodyParser=require("body-parser");
var items=[];
const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  var today=new Date();

  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };

  var day=today.toLocaleDateString("en-US",options);
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
