var fs = require('fs');

var file_path = process.argv[2];


fs.readFile(file_path, 'utf8', function getContents(err, data) {
	if (err) return console.log(err)
	lines = data.split('\n');
	console.log(lines.length - 1);
});

//var lines = file.split('\n');

//console.log(file.length - 1);


/////////////////////////
/// Official Solution ///
/////////////////////////
//
//    var fs = require('fs')
//    var file = process.argv[2]
//    
//    fs.readFile(file, function (err, contents) {
//      if (err) {
//        return console.log(err)
//      }
//      // fs.readFile(file, 'utf8', callback) can also be used
//      var lines = contents.toString().split('\n').length - 1
//      console.log(lines)
//    })