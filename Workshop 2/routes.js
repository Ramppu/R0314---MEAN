
const express = require("express");

 //use the application off of express.
const app = express();

 //define the route for "/frontpage"
 app.get("/frontpage", function (request, response){
     //show this file when the "/frontpage" is requested
     response.sendFile(__dirname+"/html/frontpage.html");
 });

 app.get("/contacts", function (request, response){
     //show this file when the "/contacts" is requested
     response.sendFile(__dirname+"/html/contacts.html");
 });

 app.get("/plaintext", function (request, response){
     //show this file when the "/plaintext" is requested
     response.sendFile(__dirname+"/newData/test.txt");
 });

 app.get("/json", function (request, response){
     //show this file when the "/plaintext" is requested
     response.sendFile(__dirname+"/json/testdata.json");
 });


 //If route is not given, default to the frontpage
 app.get('*',function (req, res) {
        res.redirect('/frontpage');
    });

 //start the server
 app.listen(8081);

 console.log("Something awesome to happen at http://localhost:8081");
