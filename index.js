
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const FUND = {
  "B-INCOMESSF" : 10.0548,
  "BM70SSF" : 9.9774,
  "BEQSSF" : 11.247,
  "B-FUTURESSF" : 11.443,
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(FUND[process.argv[2]]);
});