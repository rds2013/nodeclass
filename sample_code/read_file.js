var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
    fs.readFile('app.js', function(error, data) {
        response.write(data);
	  response.end();
	    });
	    }).listen(8080);

