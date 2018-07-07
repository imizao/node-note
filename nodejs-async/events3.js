const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth() {
  console.log('hi');
  emitter.on('myEvent', sth);
})

emitter.emit('myEvent');

// 不会进入死循环