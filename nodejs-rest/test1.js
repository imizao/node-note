const koa = require('koa');
const app = new koa();
const a = require('./test2');

app.use(a());