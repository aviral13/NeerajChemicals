const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const aos=require("aos")

 const app=express();


 app.set('view engine', 'ejs');

 app.use(bodyParser.urlencoded({extended: true}));
 app.use(express.static("public"));

 app.get("/",function(req,res){
   res.render("home");
 })
 app.get("/about",function(req,res){
   res.render("about");
 })
 app.get("/products",function(req,res){
   res.render("products");
 })
 app.get("/contact",function(req,res){
   res.render("contact");
 })

// $(document).ready(function(){
//   $('.submit').click(function(event){
//     event.preventDefault()
//
//     var firstName=$('fname').val()
//     var lastName=$('lname').val()
//
//     var email=$('email').val()
//     var contactNo=$('contact').val()
//     var statusElm=$('.status')
//     statusElm.empty()
//
//     if(firstName.length<0){
//       statusElm.append('<div>Please Enter the First Name</div>')
//     }
//     if(lastName.length<0){
//       statusElm.append('<div>Please Enter the Last Name</div>')
//     }
//   })
// })





 app.listen(3000,function(){
   console.log("Server is running on port 3000");
 })

 // api KUEfYiJOMMV
 // baea941d37e18441ef9d309f4f2ab447-us17
 // // unique // IDEA:
 // 4453780c74
