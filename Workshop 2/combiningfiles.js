const fs = require('fs');

var data = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');
var testing = "I wrote This!";

fs.writeFile("test.txt", testing + '\n' + data + data2  + testing, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

// Or
fs.writeFileSync('test');
