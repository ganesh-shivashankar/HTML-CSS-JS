//var events = require('events');

//var emitter = new events.EventEmitter();

//emitter.on('customEvent', function(message, status) {
//  console.log(`${status} : ${message}`);
//});

//emitter.emit('customEvent', "Hello world", 200);

var EventEmitter = require('events');
var util = require('util');

var Person = function(name) {
  EventEmitter.call(this);
  this.name = name
};

util.inherits(Person, EventEmitter);

var person1 = new Person("Ganesh");

person1.on('say', function(message) {
  console.log(`${this.name}: ${message}`);
});

person1.emit('say', "God is great");
