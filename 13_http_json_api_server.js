var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
	if (req.method !== 'GET') {
		return res.end('send me a GET\n');
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });

	var info = url.parse(req.url, true);
	var date = new Date(info.query.iso);

	var output;
	if(info.pathname=='/api/parsetime') {
		output = JSON.stringify( {
			'hour': date.getHours(),
			'minute': date.getMinutes(),
			'second': date.getSeconds()
		} )
	}
	if(info.pathname=='/api/unixtime') {
		var uTime = date.getTime();
		output = JSON.stringify({'unixtime':  uTime})
	}
	res.write(output);
	res.end();
});

server.listen(process.argv[2]);



////////////////////////
/// Official Solution///
////////////////////////
//
//    var http = require('http')
//    var url = require('url')
//    
//    function parsetime (time) {
//      return {
//        hour: time.getHours(),
//        minute: time.getMinutes(),
//        second: time.getSeconds()
//      }
//    }
//    
//    function unixtime (time) {
//      return { unixtime: time.getTime() }
//    }
//    
//    var server = http.createServer(function (req, res) {
//      var parsedUrl = url.parse(req.url, true)
//      var time = new Date(parsedUrl.query.iso)
//      var result
//    
//      if (/^\/api\/parsetime/.test(req.url)) {
//        result = parsetime(time)
//      } else if (/^\/api\/unixtime/.test(req.url)) {
//        result = unixtime(time)
//      }
//   
//      if (result) {
//        res.writeHead(200, { 'Content-Type': 'application/json' })
//        res.end(JSON.stringify(result))
//      } else {
//        res.writeHead(404)
//        res.end()
//      }
//    })
//    server.listen(Number(process.argv[2]))