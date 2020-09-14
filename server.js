const express = require("express");
const nunjucks = require("nunjucks")
const bodyParser = require("body-parser");
const server = express();

server.set("view engine", "njk");

server.use(express.static("public"))
server.use(express.static("pictures"))

// server.get("/", function(req, res){
//     return res.render("index");
// })

server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

server.get("/", function(req, res){
    return res.render("cadastrar");
})

server.get("/cadastrar", function(req, res){
    return res.render("cadastrar")
})


 server.post("/registros", function(req, res){
     name = req.body.name
     email = req.body.email;
     address = req.body.address
     return res.render("registros" , { 
          name: name,
          email: email,
          address: address
      })
 })






nunjucks.configure("views", {
    'express': server
})

server.listen(5000, function(){
    console.log(" server is running...");
});