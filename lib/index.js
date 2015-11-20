'use strict';

let http = require('http');

let i = 0;

let server = http.createServer((req, res) => {
  console.log(`Request #${i}`);

  let counter = 0;
  while (counter < 100000000) {
    counter++;
  }

  res.writeHead(200, {'Content-Type': 'text/text'});
  res.end(`Hello World ${i++}`);
}).listen(3000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:3000/');
  console.log(`pid is ${process.pid}`);
});

let closeHandler = (signal) => {
  return () => {
    console.log(`Received ${signal}`);
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  };
};

process.on('SIGINT', closeHandler('SIGINT'));
process.on('SIGTERM', closeHandler('SIGTERM'));
