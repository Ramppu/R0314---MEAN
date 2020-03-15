const express = require('express');
const app = express();
app.set('view engine','ejs');

//Test Data
const data = {users:[
  {name: 'Rammu', age: 23},
  {name: 'Ammu', age: 24},
  {name: 'Wammu', age: 22}
]};

app.get('/',function(req,res) {
  res.render('pages/index', {
    new_heading: "This text was written in the server.js File",
    new_paragraph: "Nill by Mouth By Haken was playing when writing this"
  });
});

app.get('/users',function(req,res) {
  res.render('pages/users',data);
});


app.listen(8081);
console.log("we out here at http://localhost:8081/")
console.log("Dig in!")
