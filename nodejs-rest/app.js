const Koa = require('koa');
const constroller = require('./controller');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');
const ejs = require('ejs');
const router = require('koa-router')
const app = new Koa();

app.use(bodyParser());

app.use(constroller());

app.use(views(path.join(__dirname, './'), {
  extension: 'ejs'
}))

app.use(require('./index.js').routes());

app.listen(3002);
console.log("app started at port 3002 ...")