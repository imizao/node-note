const EventEmitter = require('events');
console.log(EventEmitter);

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter();

myEmitter.once('aaa', () => {
  console.log('an event occurred!');
})

myEmitter.emit('aaa');
myEmitter.emit('aaa');