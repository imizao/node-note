var http = require('http')
var fs = require('fs')
var server = http.createServer();

server.on('request', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream('./image.jpg').pipe(res);
  //res.end('Hello World\n');
})

server.listen(3000);
console.log('Server running at http://localhost:3000/')