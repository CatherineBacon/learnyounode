var http = require('http');

var results = [1, 2, 3];
var count = 0;

function printResults() {
	for(var i=0; i<3; i++) {
		console.log(results[i]);
	}
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		var result = '';
		response.setEncoding('utf8');
		response.on('error', console.error);
		response.on('data', function(data) {
			result = result + data;
		});
		response.on('end', function() {
			count += 1;
			results[index] = result;
			if(count==3) {
				printResults();
			}
		});
	}).on('error', console.error);
}

for(var i=0; i<3; i++) {
	httpGet(i);
}



/////////////////////////
/// Official Solution ///
/////////////////////////
//
//    var http = require('http')
//    var bl = require('bl')
//    var results = []
//    var count = 0
//    
//    function printResults () {
//      for (var i = 0; i < 3; i++) {
//        console.log(results[i])
//      }
//    }
//    
//    function httpGet (index) {
//      http.get(process.argv[2 + index], function (response) {
//        response.pipe(bl(function (err, data) {
//          if (err) {
//            return console.error(err)
//          }
//    
//          results[index] = data.toString()
//          count++
//    
//          if (count === 3) {
//            printResults()
//          }
//        }))
//      })
//    }
//    
//    for (var i = 0; i < 3; i++) {
//      httpGet(i)
//    }