var fs = require("fs");

console.log("Program Started");

var data = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');

console.log(data.toString());
console.log(data2.toString());

for (var i = 0; i < 15; i++) {
  console.log("Node will keep going while file is being read");
}

console.log("Program ended");
