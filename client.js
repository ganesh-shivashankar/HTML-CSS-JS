// var request = require('request');
// request('http://127.0.0.1:8081/listUsers', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body)
//   }
// });

var http = require('http');

//http://127.0.0.1:8081/listUsers
var optionsget = {
    host : '127.0.0.1',
    port : 8081,
    path : '/listUsers',
    method : 'GET'
};

//http://127.0.0.1:8081/2
// var optionsget = {
//     host : '127.0.0.1',
//     port : 8081,
//     path : '/2',
//     method : 'GET'
// };

var getRequest = http.request(optionsget, function(res) {
    console.log("-----------------------------");
    console.log("statusCode: ", res.statusCode);
    console.log("-----------------------------");
    console.log("headers: ", res.headers);
    console.log("-----------------------------");
    res.on('data', function(d) {
        console.info('GET result BODY:\n');
        process.stdout.write(d);
    });
});

getRequest.end();
getRequest.on('error', function(e) {
    console.error(e);
});









//http://stackoverflow.com/questions/5643321/how-to-make-remote-rest-call-inside-node-js-any-curl/5643366#5643366
