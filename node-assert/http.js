const http = require('http');
// http.get({
//   hostname: 'localhost',
//   port: 80,
//   path: '/',
//   agent: false
// }, (res) => {
//   console.log(res)
// })
const keepAliveAgent = new http.Agent({ keepAlive: true});
options.agent = keepAliveAgent;
http.request(options,onResponseCallback);