
 var express = require("express");

 //use the application off of express.
 var app = express();

 //define the route for "/frontpage"
 app.get("/frontpage", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/html/frontpage.html");
 });

 app.get("/contacts", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/html/contacts.html");
 });

 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/html/frontpage.html");
 });

 //start the server
 app.listen(8081);

 console.log("Something awesome to happen at http://localhost:8081");
