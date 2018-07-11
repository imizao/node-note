var db = require('./redis');

db.set('test', 'testtest', '222', function (err, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('插入数据是： ', result);
})

db.get('test', function (err, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
})
