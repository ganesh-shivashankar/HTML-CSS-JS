var path1 = require('path');

console.log(path1.basename(__dirname));
console.log(path1.basename(__filename));

var dirUpload = path1.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUpload);

var utilities = require('util');
utilities.log('abcd');
utilities.log(dirUpload);

var v8details = require('v8');
utilities.log(v8details.getHeapStatistics());
