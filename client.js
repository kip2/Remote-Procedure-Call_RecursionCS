import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const webclient = require('request');


webclient.post({
  url: "http://127.0.0.1:4000/jsonrpc",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    "method": "floor",
    "params": [13.5],
    "jsonrpc": "2.0",
    "id": 0,
  })
}, function (error, response, body){
  console.log(body);
});