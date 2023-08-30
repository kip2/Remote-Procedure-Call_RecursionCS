var rpc = require('jsonrpc2');

var server = new rpc.Server();

function add(args, opt, callback){
    callback(args[0] + args[1]);
}

server.expose('add', add);
server.listen(8000, 'localhost');