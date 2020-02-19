const folder = './readdir/';
const fs = require('fs');

fs.readdir(folder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
