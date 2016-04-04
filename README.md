#Task:

Implement a simple ssdp server handler which should run on a linux machine. This handler should respond to any alive message from mobile phones which are on the same wifi network.

1. Use ready made library (either nodejs/php/python)

2. Modify relevant parameters to have a unique service name and location (IP address)

3. Test with SSDPTester

#Pre-install

Install node and npm:
`sudo apt-get install nodejs nodejs-dev npm`

#Running:

Initialize:
`npm install`

Send notify messages:
`node server.js` or `node server2.js`

Send search messages:
`node client.js`

Listen to all messages:
`node listen.js`