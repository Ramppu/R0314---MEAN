
 const fs = require("fs");
 const data = require('./pushdata.json');
// Get content from file
 var contents = fs.readFileSync("pushdata.json")
 var cont = JSON.parse(contents);

 console.log(data);
 data.push({
   "name": "Jane Doe",
   "age": "25",
   "company": "Haaga-helia",
   "adress": "Ratatie 12"
 });
 console.log("added data?");
 console.log(data);
