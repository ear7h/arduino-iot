# arduino-iot
Internet of things server with nodejs and arduino


### receiver-server.js
nodejs sever which receives information from sensor-server via datagram (udp socket) and serves via http


### transmitter.js
nodejs server which receives stream from arduino serial and transmits each line to http-server individually via datagram

### lightSensorSketch
contains arduino sketch for getting analog information from photoresistor, based on schematic from http://playground.arduino.cc/Learning/PhotoResistor

### index.html
sends requests to server via ajax and uses response data to change the body's background color to shades of yellow

### misc.
port numbers:
* 8080 - http
* 8081 - udp4
