const AAA = require('events')

class MyEmitter extends AAA {}

const myEmitter = new MyEmitter();

myEmitter.once('newListener', (event, listener) => {
  console.log('C')
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log('B')
    })
  }
})

myEmitter.on('event', () => {
  console.log('A')
})

myEmitter.emit('event');