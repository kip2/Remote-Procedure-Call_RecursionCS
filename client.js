import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const http = require('http');

const data = JSON.stringify({
  "method": "floor",
  "params": [13.5],
  "jsonrpc": "2.0",
  "id": 0,
});

const content = "content"

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    'Content-Length': '' + content.length,
    'X-Header': 'X-Header',
  },
};
const url = "http://127.0.0.1:4000/jsonrpc"
//const url = "http://localhost:4000/jsonrpc"
const request = http.request(url, options, response => {
  console.log(`statusCode: ${response.statusCode}`)
})
console.log(request);
request.write(data);
request.end();

