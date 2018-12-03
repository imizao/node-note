const crypto = require('crypto')
//console.log(crypto)
const secret = '123';
const hash = crypto.createHmac('sha256', secret)
console.log(hash)
console.log(hash.update('npm_package_description').digest('hax'))