'use strict'


import { createRequire } from 'module';
const http = createRequire('http');

const data = JSON.stringify({
  "method": "floor",
  "params": [13.5],
  "jsonrpc": "2.0",
  "id": 0,
});

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
const url = "https://localhost:4000/jsonrpc"
const request = http.request(url, options);
console.log(request);
request.write(data);
request.end();
