// console.log(__dirname)
// console.log(__filename)

const fs = require('fs')
// 删除 并返回空
// fs.unlink(__dirname+ '/a.txt',(err) => {
//   console.log(err)

//   if (err) throw err;
//   console.log('a.txt was deleted');
// })

// fs.watchFile('message.text', (curr, prev) => {
//   console.log(curr)
//   console.log(prev)
//   console.log(`the current mtime is: ${curr}`);
//   console.log(`the previous mtime was: ${prev}`);
// });
const data = new Uint8Array(Buffer.from('Hello Node.js'));
console.log(data);
fs.watch('message.text',data,(err, bytesWritten, buffer) => {
  console.log('err:')
  console.log(err)
  console.log('bytesWritten:')
  console.log(bytesWritten)
  console.log('buffer:')
  console.log(buffer)

})