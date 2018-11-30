const util = require('util')
const fs = require('fs')
const stream = require('stream')
const finished = util.promisify(stream.finished);

const rs = fs.createReadStream('foo.txt');

async function run() {
  await finished(rs);
  console.log('stream js done reading');
}

run().catch(console.error)
rs.resume();