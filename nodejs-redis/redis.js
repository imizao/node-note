var db = {};
var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
  console.log('Error :', err);
})

client.on('connect', function () {
  console.log('Redis 连接成功。');
})

db.set = function (key, value, expire, callback) {
  client.set(key, value, function (err, result) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    if(!isNaN(expire) && expire > 0 ) {
      client.expire(key, parseInt(expire));
    }
    callback(null, result);
  })
}

db.get = function (key, callback) {
  client.get(key, function (err, result) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    callback(null, result);
  })
}

module.exports = db;