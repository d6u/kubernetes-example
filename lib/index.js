'use strict';

let http = require('http');

let i = 0;

let server = http.createServer((req, res) => {
  console.log(`GET ${i++}`);
  setTimeout(function () {
    res.writeHead(200, {'Content-Type': 'text/text'});
    res.end(`Hello World ${i}`);
  }, 1000);
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000/');
  console.log(`pid is ${process.pid}`);
});

let closeHandler = () => {
  console.log('Received signal');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', closeHandler);
process.on('SIGTERM', closeHandler);
