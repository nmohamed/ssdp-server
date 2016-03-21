var ip = require('ip').address();
var SSDP = require('node-ssdp').Server
  , server = new SSDP({
	location: 'http://' + ip + '/desc.html'
  });

server.addUSN('upnp:rootdevice');
server.addUSN('urn:schemas-upnp-org:device:YourDevice:1');

server.on('advertise-alive', function (headers) {
		console.log('\nadvertise-alive', headers); // see alive messages
});

server.on('advertise-bye', function (headers) {
	// console.log('advertise-bye', headers);
});

// start the server
server.start(ip);

process.on('exit', function(){
	server.stop() // advertise shutting down and stop listening
});
