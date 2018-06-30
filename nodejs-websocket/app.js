var ws = require("nodejs-websocket");
console.log("开始建立连接...");
console.log(ws);

var game1 = null,game2 = null, game1Ready = false, game2Ready = false;
var server = ws.createServer(function(con) {
  con.on("text",function (str) {
    console.log("收到消息为："+str);
    if (str === "game1"){
        game1 = con;
        game1Ready = true;
        con.sendText("success");
    }
    if (str === "game2"){
        game2 = con;
        game2Ready = true;
        con.sendText("success");
    }
    if (game1Ready && game2Ready) {
        game2.sendText(str);
    }
    con.sendText(str);
  })
  con.on("close", function (code,reason) {
	  console.log("关闭连接")
  })
  con.on("error", function (code,reason) {
	  console.log("异常关闭");
  })
}).listen(8001)
console.log("Websocket建立完毕");
