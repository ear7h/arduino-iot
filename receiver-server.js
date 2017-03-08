const http = require('http');
const httpServer = http.createServer(httpHandler);
const dgram = require('dgram');
const udpServer = dgram.createSocket('udp4');
const fs = require('fs');
var lightLevel = {
  time: 0,
  level: 0,
}

function httpHandler(req, res) {
  if (req.url == '/light') {
    res.writeHead(200);
    res.write(JSON.stringify(lightLevel.level));
    res.end();
  } else {
    var index = fs.readFileSync('./index.html');
    res.writeHead(200);
    res.write(index);
    res.end();
  }

}

udpServer.on('message', (msg) => {
  msg = JSON.parse(msg);
  console.log(msg)
  if(msg.time > lightLevel.time){
    lightLevel = msg;
  } else {
    //light signal older than current
  }
});


udpServer.bind(8081);
httpServer.listen(8080);
console.log("servers up");
