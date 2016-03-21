var Client = require('node-ssdp').Client
      , client = new Client({
});

client.on('notify', function () {
	console.log('Got a notification.')
});

client.on('response', function inResponse(headers, code, rinfo) {
	console.log('Got a response to an m-search:\n%d\n%s\n%s', code, JSON.stringify(headers, null, '  '), JSON.stringify(rinfo, null, '  '))
});

// Or maybe if you want to scour for everything
setInterval(function() {
  client.search('ssdp:all')
  // client.search('urn:schemas-upnp-org:device:YourDevice:1');
}, 10000); //10 sec