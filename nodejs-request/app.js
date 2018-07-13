var koa = require('koa');
var request = require('request');
var app = new koa();

var data;
app.use(async (ctx, next) => {
  await next();

  if (data) {
    ctx.response.type = 'text/html';
    ctx.response.body = data;
  }
}) 
request('https://cnodejs.org/api/v1/user/imizao', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body).data;
    // console.log(data);
  }
})

app.listen(3000);
console.log('app started at port 3000...');