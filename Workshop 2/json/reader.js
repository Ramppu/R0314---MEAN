
 const fs = require("fs");

// Get content from file
 var contents = fs.readFileSync("testdata.json")
 var cont = JSON.parse(contents);
 
// Get Value from JSON
  for(var i = 0; i < cont.length;i++) {
     console.log("Name:", cont[i].name);
     console.log("Company:", cont[i].company);
     console.log("Email:", cont[i].email,"\n__________________");
 }
