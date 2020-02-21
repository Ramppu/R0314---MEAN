const http = require("http");
const fs = require("fs");
const contents = fs.readFileSync("testdata.json")
const cont = JSON.parse(contents);
http.createServer(function (request, response) {

  //http header, status 200 = ok
  //Content type, text/plain
  response.writeHead(200, {'Content-type': 'text/html'});
  response.write('<h1>Hello World!</h1>');
  response.write(`<table style="border: 1px solid black">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                  </tr>
                  <tr>
                    <td>`+cont[0].name+`</td>
                    <td>`+cont[0].email+`</td>
                    <td>`+cont[0].company+`</td>
                  </tr>
                  <tr>
                  <td>`+cont[1].name+`</td>
                  <td>`+cont[1].email+`</td>
                  <td>`+cont[1].company+`</td>
                  </tr>
                </table>`);
  //Send response body as 'hello'
  response.end('Hello World!\n');
}).listen(8081);

//Console prints
console.log('Server running at http://127.0.0.1:8081/');
console.log(cont[0].name);
