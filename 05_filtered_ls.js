var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function (err, files) {
	if(err) return console.log(err);
	for(var i=0; i<files.length; i++){
		if(path.extname(files[i])== "." + extension){
			console.log(files[i])
		}
	}
});


/////////////////////////
/// Official Solution ///
/////////////////////////
//
//    var fs = require('fs')
 //   var path = require('path')
    
 //   var folder = process.argv[2]
 //   var ext = '.' + process.argv[3]
    
 //   fs.readdir(folder, function (err, files) {
 //     if (err) return console.error(err)
 //     files.forEach(function (file) {
 //       if (path.extname(file) === ext) {
 //         console.log(file)
 //       }
 //     })
 //   })