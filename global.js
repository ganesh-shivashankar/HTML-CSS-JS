var path = require("path");

var hello = "Hello world from Node.js";

var justNode = hello.slice(17);
//console.log(justNode);

//template string
//console.log(`Rock on World from ${justNode}`);

//console.log(__dirname);
//console.log(__filename);

//console.log(`Rock on World from ${path.basename(__filename)}`);

//process object (current process)
console.log(process.argv);

function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index == -1) ? null : process.argv[index+1];
}

var greeting = grab('--greeting');
var user = grab('--user');

if(!user || !greeting)
  console.log("You blew it !");
else
  console.log(`Welcome ${user}, ${greeting}`);
