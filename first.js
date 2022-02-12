var http = require('http');
const { listenerCount } = require('process');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Word!');
}).listen(8080);