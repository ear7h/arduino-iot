const SerialPort = require('serialport');
const serialPort = new SerialPort("/dev/ttyACM0");
const dgram = require('dgram');
const udpClient = dgram.createSocket('udp4');
var compMsg = "";

serialPort.on('open', function(){
  console.log("serial opened");
  serialPort.on('data', function(data){
    data = data.toString('ascii');
    compMsg = compMsg + data;
    if(compMsg.includes('\r\n')){
      var msg = {
        time: Date.now(),
        level: compMsg.split('\r\n')[0],
      };
      console.log(msg);
      msg = JSON.stringify(msg);
      //change to desired host
      udpClient.send(msg, 0, msg.length, 8081, "localhost");
      compMsg = compMsg.split('\n')[1];
    }

  })
})
