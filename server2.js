var dgram = require('dgram');

function notify() {
	var port = 1900;
	var host = '239.255.255.250';
	var ip = require('ip').address();
	var message = new Buffer(
		'NOTIFY * HTTP/1.1\r\n' +
		'HOST: ' + host + ':' + port + '\r\n' +
		'NT: urn:schemas-upnp-org:device:YourDevice:1\r\n' +
		'NTS: ssdp:alive\r\n' +
		'USN: uuid:f40c2981-7329-40b7-8b04-27f187aecfe5::urn:schemas-upnp-org:device:YourDevice:1\r\n' +
		'LOCATION: ' + ip + '/desc.html\r\n' +
		'CACHE-CONTROL: max-age=1800\r\n' +
		'SERVER: node.js/0.10.40 UPnP/1.1 node-ssdp/2.7.0\r\n' +
		'\r\n'
	);

	setInterval(function() {
		var server = dgram.createSocket('udp4');
		server.bind(1901);
		server.send(message, 0, message.length, port, host, function(err, bytes) {
		  server.close();
		});
	}, 10000); //10 sec
}

notify();