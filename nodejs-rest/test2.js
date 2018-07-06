const fs = require('fs')

fs.readFile('./controllers/api.js', 'UTF-8', (err, data) => {
  if (err) throw err;
  console.log(data);
})
console.log(fs.readFileSync('./controllers/api.js', 'UTF-8'))
