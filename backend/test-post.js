const http = require('http');

const data = JSON.stringify({
  symbol: "XAUUSD",
  type: "Long",
  entry: 4700,
  exit: 4703,
  size: 0.1,
  pnl: 300,
  emotion: "Confident",
  date: "2026-05-13",
  isWinner: true
});

const req = http.request({
  hostname: '127.0.0.1',
  port: 5001,
  path: '/api/trades',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
}, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body:', body));
});

req.on('error', console.error);
req.write(data);
req.end();
