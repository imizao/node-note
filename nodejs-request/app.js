var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');

app.get('/', function (req,res,next) {
  res.send("hello world");
})

app.get('/getapi', function (req, res, next) {
  var e = request({
    url: 'https://cnodejs.org/api/v1/topics',
    methods: 'GET',
    headers: {'Content-Type': 'text/json'}
  }, function (error, reaponse, body) {
    if(!error && reaponse.statusCode == 200) {
      res.render('task', {'data': JSON.parse(body)})
    }
  });
})
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
})

// module.exports = router;