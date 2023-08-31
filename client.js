import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const webclient = require('request');
const fsPromises = require('fs/promises');

export async function clientRequest(command, args) {
  const answer = await webclient.post({
    url: "http://127.0.0.1:4000/jsonrpc",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "method": command,
      "params": args,
      "jsonrpc": "2.0",
      "id": 0,
    })
  }, function (error, response, body){
    const jsonObj = JSON.parse(body);
    return console.log(jsonObj['result']);
  });
}
