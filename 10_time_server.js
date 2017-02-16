var add_leading_zero = function (num) {
	var n = num+'';
	if(n.length == 2) return n;
	n = '0' + n;
	return n;
}

var net = require('net');

var server = net.createServer(function (socket) {
	console.log(add_leading_zero(1))
	var date = new Date();
	var year = date.getFullYear();
	var month = add_leading_zero(date.getMonth() + 1);
	var day = add_leading_zero(date.getDate());
	var hour = add_leading_zero(date.getHours());
	var min = add_leading_zero(date.getMinutes());
	var res = '' + year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n';
	socket.write(res);
	socket.end();
});

server.listen(process.argv[2]);



/////////////////////////
/// Official Solution ///
/////////////////////////
//
//    var net = require('net')
//    
//    function zeroFill (i) {
//      return (i < 10 ? '0' : '') + i
//    }
//    
//    function now () {
//      var d = new Date()
//      return d.getFullYear() + '-' +
//        zeroFill(d.getMonth() + 1) + '-' +
//        zeroFill(d.getDate()) + ' ' +
//        zeroFill(d.getHours()) + ':' +
//        zeroFill(d.getMinutes())
//    }
//    
//    var server = net.createServer(function (socket) {
//      socket.end(now() + '\n')
//    })
//    
//    server.listen(Number(process.argv[2]))