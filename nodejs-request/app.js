var koa = require('koa');
var fs = require('fs')
var request = require('request');
var path = require('path');
var app = new koa();
var views = require('koa-views');
var router = require('koa-router')();

var data;
// app.use(async (ctx, next) => {
//   await next();

//   if (data) {
//     // ctx.response.type = 'text/html';
//     // ctx.response.body = data;
//     ctx.render('index', {
//       data: data
//     })
//   }
// }) 

app.use(router.get('/index', async (ctx, next) => {
  var aData = (function () {
      fs.readFile('data.json', 'utf8', function (err, data){
      if(err) {console.log(err)} 
      aData = data;
    })
    return aData;
  })();
  // await ctx.render('index', {
  //   data: aData
  // })
  console.log(aData);
  
}).routes())
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

request('https://cnodejs.org/api/v1/user/imizao', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body).data;
    console.log(data);
    if(data) {
      fs.writeFile('data.json', JSON.stringify(data), function (err) {
        if (err) {
          console.log('写入出现错误');
        } else{
          console.log('写入完成！');
        }
        
      })
    }
  }
})

app.listen(3000);
console.log('app started at port 3000...');