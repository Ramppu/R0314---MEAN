var http = require("http");
http.createServer(function (request, response) {

  //http header, status 200 = ok
  //Content type, text/plain
  response.writeHead(200, {'Content-type': 'text/html'});
  if (request.url === "/helloworld") {
    response.write('Hello World!');
  }
  else if (request.url === "/worldhello") {
    response.write('World Hello!')
  }

  //Send response body as 'hello'
  response.end('Hello World!\n');
}).listen(8081);
