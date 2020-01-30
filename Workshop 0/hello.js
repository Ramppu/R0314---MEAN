var http = require("http");
http.createServer(function (request, response) {

  //http header, status 200 = ok
  //Content type, text/plain
  response.writeHead(200, {'Content-type': 'text/html'});
  response.write('<h1>Hello World!</h1>');
  response.write(`<table style="border: 1px solid black">
                  <tr>
                    <th>Album Name</th>
                    <th>Artist</th>
                    <th>Genre</th>
                  </tr>
                  <tr>
                    <td><a href="https://google.com">Wasteland</a></td>
                    <td>Riverside</td>
                    <td>Prog Rock</td>
                  </tr>
                  <tr>
                    <td>Watershed</td>
                    <td>Opeth</td>
                    <td>Prog Metal</td>
                  </tr>
                </table>`);
  //Send response body as 'hello'
  response.end('Hello World!\n');
}).listen(8081);

//Console prints
console.log('Server running at http://127.0.0.1:8081/');
