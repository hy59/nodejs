var http = require('http')
var url = require('url')

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'recieved.');

        route(pathname);

        response.writeHead(200, {'Content-type': 'text/plain'});
        response.write('Hello Node.js!');
        response.end();
    }

    http.createServer(onRequest).listen(2017, '127.0.0.1');
    console.log('Server running at http://127.0.0.1:2017/');
}

exports.start = start;