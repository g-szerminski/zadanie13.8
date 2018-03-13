var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html', 'utf-8');
	if (request.method === 'GET' && request.url === '/') {
    	fs.readFile('./index.html', function(err, data) {
      	if (err) throw err;
      	response.write(data);
      	response.end();
    	});
	} else {
		response.setHeader('Content-Type', 'image/jpg', 'utf-8');
		response.statusCode = 404;
		fs.readFile('./404.jpg', function(err, data) {
		if (err) throw err;
		response.write(data);
		response.end();
		});
	}
});
server.listen(9000);


//Tu mam jeszcze drugą wersję rozwiązania ?

/*
server.on('request', function (request, response) {
    fs.readFile('./index.html',  function(err, data) {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        if (request.method === 'GET' && request.url === '/') {
            response.write(data);
            response.end();
        } else {
            response.statusCode = 404;
            response.write('./404.jpg');
            response.end();
        }
    });
});
*/