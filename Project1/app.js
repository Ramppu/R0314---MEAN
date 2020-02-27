const express = require('express');
const fs = require('fs');
const app = express();

//module for handling form data
const bp = require('body-parser');
app.use(bp.urlencoded({ extended: true }));


//Routes
app.get('/frontpage',function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/list',function(req, res) {
  res.sendFile(__dirname + '/html/guestbook.html');
});

app.get('/message',function(req, res) {
  res.sendFile(__dirname + '/html/addMessage.html');
});
app.post('/message',function (req, res) {
  var data = require('./json/messages.json');
  var dataa = {
    "Name": req.body.name,
    "Country": req.body.country,
    "Message": req.body.message,
    "Date": new Date()
  };
  data.push(dataa);
  var write = JSON.stringify(data, null, 2);
    fs.writeFile('./json/messages.json',write,finished);
    function finished(err) {
      console.log("All done!");
      res.redirect('/frontpage');
    }
});

//If route is not given, default to the frontpage
app.get('*',function (req, res) {
       res.redirect('/frontpage');
});

app.listen(8081);
console.log("server open in http://localhost:8081/");
