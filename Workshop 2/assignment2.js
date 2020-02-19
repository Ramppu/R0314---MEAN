var fs = require("fs");

console.log("Program Started");

//Name for callback, define it later on
fs.readFile('example.txt',results);

for (var i = 0; i < 15; i++) {
  console.log("Node will keep going while file is being read");
}

function results(err, data) {
  if(err) return console.log(err);
  console.log("Results of fileread:");
  console.log(data.toString());
}
