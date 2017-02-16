var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	var extension = "." + ext;
	fs.readdir(dir, function(err, files) {
		if (err) {
			callback(err, null);
		}
		else {
			result = [];
			files.forEach(function(entry) {
				if (path.extname(entry) == extension) {
					result.push(entry);
				}
			});
			callback(null, result);
		}
	});
}



/////////////////////////
/// Official Solution ///
/////////////////////////
//
//    var fs = require('fs')
//    var path = require('path')
//    
//    module.exports = function (dir, filterStr, callback) {
//      fs.readdir(dir, function (err, list) {
//        if (err) {
//          return callback(err)
//        }
//    
//        list = list.filter(function (file) {
//          return path.extname(file) === '.' + filterStr
//        })
//    
//        callback(null, list)
//      })
//    }