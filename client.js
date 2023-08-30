var rpc = require('jsonrpc2');
var sys = require('sys');

var client = new rpc.Client(8000, 'localhost');

client.call('add', [1, 2], function(err, result) {
    sys.puts('1 + 2 = ' + result);
});