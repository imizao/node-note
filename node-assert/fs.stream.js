const fs = require('fs')
const { finished } = require('stream')
const rr = fs.createReadStream('foo.js');
const rs = fs.createReadStream('foo.txt')
rr.on('readable', () => {
  console.log(`readable: ${rr.read()}`);
})
rr.on('end', () => {
  console.log('end');
})

finished(rs, (err) => {
  if (err) {
    console.log('Stream failed', err)
  } else {
    console.log('Stream is done reading.')
  }
})

rs.resume();